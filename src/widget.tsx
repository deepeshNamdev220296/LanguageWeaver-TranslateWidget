import React from "react";
import languagePairMapping from "./languagePairMapping.json";
import {
  Cloud_fetchAccountId,
  Cloud_fetchLanguages,
  triggerLanguageIdentification,
  getLanguageDetectionStatus,
  getLanguageDetectionResult,
  initiateTranslation,
  getTranslationStatus,
  downloadTranslation,
  triggerLanguageIdentificationEdge,
} from "LW_Api";
// @ts-ignore
import mainIcon from "./assets/32.png";
// @ts-ignore
import translateIcon from "./assets/translating.png";
// @ts-ignore
import languageIcon from "./assets/language.png";
import { initDynamic } from "./dynamic";
import { getAllTextNodes } from "./harvest";
import { wrap, unwrap } from "./wrap";

import {
  iChunk,
  iPageTranslateIn,
  DetectedLanguage,
  iPageTranslateDynamic,
} from "./interface";
import { chunkNodes } from "./chunk";

// ---------- for running locally use local host as node js server ---------//
// const baseUrl = "http://localhost:4000";
const baseUrl = "https://lw-widget-server-c5565f7cbb73.herokuapp.com";
let langPairsRef: any[] = [];
let targetLanguages: { value: string; label: string }[] = [];
let selectedTarget = "";
let _nodes: Record<number, HTMLElement[]> = [];
let contentMap: any[] = [];
let originalData: string[] = [];
let originalBodyHTML: string | null = document.body.innerHTML;
let originalPageHTML: string | null = null;

/** -----------------------
 * Helpers
 ------------------------ */
function injectFloatingPanel() {
  if (document.getElementById("lw-sidepanel")) return;

  // Floating icon
  const floatingIcon = document.createElement("img");
  floatingIcon.src = mainIcon;
  floatingIcon.className = "lw-floating-sidebar-icon";
  floatingIcon.style.cssText = `
    position: fixed !important;
    top: 250px !important;
    right: -12px !important;
    width: 50px !important;
    height: 45px !important;
    padding: 6px !important;
    background: #fff !important;
    cursor: pointer !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 9999 !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
    border: 1px solid rgb(62,1,111) !important;
    box-sizing: border-box !important;
    object-fit: contain !important;
  `;
  floatingIcon.title = "Open Sidebar";
  document.body.appendChild(floatingIcon);

  // Main panel
  const panel = document.createElement("div");
  panel.id = "lw-sidepanel";
  panel.style.cssText = `
    position: fixed;
    right: -300px;
    top: 200px;
    width: 240px;
    background: #f9fbfc;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #111;
    overflow: hidden;
    transition: right 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  panel.innerHTML = `
    <style>
      .sidebar-header {
        padding: 12px 16px;
        background: #e60054;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        cursor: grab;
      }
      .drag-handle {
        font-size: 20px;
        cursor: grab;
        user-select: none;
      }
      .panel-item {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px 16px;
      }
      .panel-item:hover {
        background: #dddddd; /* light hover effect */
      }
      .lw-custom-dropdown-trigger {
        width: 65%;
        padding: 8px 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        background: #fff;
        cursor: pointer;
        font-size: 14px;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    </style>
    <div class="sidebar-header">
      <span>Language Weaver</span>
      <span class="drag-handle">⋮⋮</span>
    </div>
    <div class="panel-content" style="display: flex; flex-direction: column;"></div>
  `;
  document.body.appendChild(panel);

  // Handle opening panel
  floatingIcon.addEventListener("click", async (e) => {
    e.stopPropagation();
    panel.style.right = "0px";

    const siteId = await fetchSiteId();
    console.log("Site Id", siteId);

    const token = siteId ? await fetchToken(siteId) : null;
    console.log("Token", token);

    const storedData = JSON.parse(
      localStorage.getItem(`lw-token-${siteId}`) || "{}"
    );
    const mode = storedData.mode;

    const panelContent = token
      ? `
      <div style="display: flex; flex-direction: column;">
        <div class="panel-item" id="translate-full-page-btn">
          <div style="display:flex; align-items:center; gap:6px; cursor:pointer;">
            <img src="${translateIcon}" style="height: 21px; width: 22px;" />
            <span>Translate Full Page</span>
          </div>
        </div>
        <div class="panel-item">
          <div style="display:flex; align-items:center; gap:6px;">
            <img src="${languageIcon}" style="height: 20px; width: 22px;" />
            <span>Target Language</span>
             <div id="target-lang-trigger" class="lw-custom-dropdown-trigger">
            Please select
          </div>
          </div>
        </div>
      </div>`
      : siteId
      ? `<div style="padding:16px;text-align:center;color:#b00;font-weight:600;">Authentication Not Available</div>`
      : `<div style="padding:16px;text-align:center;color:#b00;font-weight:600;">Site ID not configured, contact Admin</div>`;

    const header = panel.querySelector(".sidebar-header");
    if (header) {
      while (header.nextSibling) header.nextSibling.remove();
      header.insertAdjacentHTML("afterend", panelContent);
    }

    if (token) {
      // Bind buttons
      panel
        .querySelector("#translate-full-page-btn")
        ?.addEventListener("click", async () => {
          console.log("Translate Full Page button clicked");

          showTranslationOverlay(true);

          const detectionContent = postDetectionContent();
          console.log("Detection content:", detectionContent);

          if (!detectionContent || detectionContent.trim() === "") {
            console.warn("Detection content is empty.");
            showTranslationOverlay(false);
            return;
          }

          const detectedLanguage = await detectLanguage(
            token,
            mode,
            detectionContent
          );
          console.log("Detected language:", detectedLanguage);

          if (!detectedLanguage || detectedLanguage.length === 0) {
            showInPageNotification("Could not detect language");
            showTranslationOverlay(false);
            return;
          }

          const selectedSource = detectedLanguage[0].code;
          console.log("Selected Source Language", selectedSource);
          console.log("Selected Target language", selectedTarget);

          if (
            detectedLanguage &&
            Array.isArray(detectedLanguage) &&
            detectedLanguage[0].code === selectedTarget
          ) {
            showInPageNotification(`This Page is already in Target language.`);
            showTranslationOverlay(false);
            return;
          }

          // Trigger translation and handle chunks
          try {
            translatePage({
              token,
              mode,
              inputFormat: "html",
              input: [],
              sourceLanguageId: selectedSource,
              targetLanguageId: selectedTarget,
              tabId: Date.now(),
            });
            // const chunks = await translatePage({
            //   token,
            //   mode,
            //   inputFormat: "html",
            //   input: [],
            //   sourceLanguageId: selectedSource,
            //   targetLanguageId: selectedTarget,
            //   tabId: Date.now(),
            // });

            // console.log("Chunks", chunks);
            // showInPageNotification("Translation completed!");

            // for (const chunk of chunks) {
            //   for (const node of chunk.nodes) {
            //     const chunkParams: iPageTranslateIn = {
            //       token,
            //       mode,
            //       inputFormat: "PLAIN",
            //       input: [node.nodeValue ?? ""], // <-- single node text
            //       sourceLanguageId: selectedSource,
            //       targetLanguageId: selectedTarget,
            //       model: "generic",
            //       tabId: chunk.id,
            //       chunkId: chunk.id,
            //     };

            //     const result = await sendChunkForTranslation(chunkParams);

            //     if (result.translation && Array.isArray(result.translation)) {
            //       node.nodeValue = result.translation[0]; // ⚡ use the string
            //     } else if (result.error) {
            //       console.error(
            //         `Translation error in chunk ${chunk.id}: ${result.error}`
            //       );
            //     }
            //   }
            // }

            // showInPageNotification("Translation completed!");
          } catch (err) {
            console.error("Error during translation:", err);
            showInPageNotification("An error occurred during translation.");
          } finally {
            showTranslationOverlay(false);
            panel.style.right = "-300px"; // ✅ Close the panel only after full page translation
          }
        });

      // Target language custom dropdown
      const trigger = panel.querySelector(
        "#target-lang-trigger"
      ) as HTMLElement;

      const currentSelected =
        localStorage.getItem("selectedTargetLanguage") || "";

      const cachedData = localStorage.getItem("cachedTargetLanguages");
      let cachedLangs: { value: string; label: string }[] = [];
      if (cachedData) {
        try {
          cachedLangs = JSON.parse(cachedData);
        } catch {
          cachedLangs = [];
        }
      }

      if (mode === "cloud") {
        try {
          if (cachedLangs.length > 0) {
            targetLanguages = cachedLangs;
          } else {
            const accountId = await Cloud_fetchAccountId(token);
            const languages = await Cloud_fetchLanguages(
              token,
              Number(accountId)
            );
            targetLanguages = await handleGetLanguages(languages);
            localStorage.setItem(
              "cachedTargetLanguages",
              JSON.stringify(targetLanguages)
            );
          }

          // Restore last selected
          if (currentSelected) {
            const match = targetLanguages.find(
              (l) => l.value === currentSelected
            );
            if (match) {
              trigger.textContent = match.label;
              selectedTarget = match.value;
            }
          }

          // Dropdown logic
          trigger.addEventListener("click", (e) => {
            e.stopPropagation(); // ✅ Prevent this click from bubbling up
            const existing = document.getElementById("lw-lang-dropdown");
            if (existing) {
              existing.remove();
              return;
            }

            const dropdown = document.createElement("div");
            dropdown.id = "lw-lang-dropdown";
            dropdown.style.cssText = `
              position: absolute;
              background: #fff;
              border: 1px solid #ddd;
              border-radius: 8px;
              box-shadow: 0 6px 20px rgba(0,0,0,0.15);
              z-index: 10001;
              max-height: 200px;
              overflow-y: auto;
              font-size: 14px;
            `;

            const rect = trigger.getBoundingClientRect();
            const dropdownHeight = 200; // same as max-height
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;

            // Flip above if not enough space below
            if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
              dropdown.style.top =
                rect.top + window.scrollY - dropdownHeight + "px";
            } else {
              dropdown.style.top = rect.bottom + window.scrollY + "px";
            }

            dropdown.style.left = rect.left + window.scrollX + "px";
            dropdown.style.width = rect.width + "px";

            targetLanguages.forEach((lang) => {
              const option = document.createElement("div");
              option.textContent = lang.label;
              option.dataset.value = lang.value;
              option.style.cssText = `
      padding: 8px 10px;
      cursor: pointer;
    `;

              if (lang.value === selectedTarget) {
                option.style.background = "#e60054";
                option.style.color = "#fff";
              }

              option.addEventListener("mouseenter", () => {
                if (lang.value !== selectedTarget) {
                  option.style.background = "#f8d7da";
                }
              });
              option.addEventListener("mouseleave", () => {
                if (lang.value !== selectedTarget) {
                  option.style.background = "transparent";
                  option.style.color = "#000";
                }
              });

              option.addEventListener("click", (e) => {
                e.stopPropagation(); // ✅ Prevent this click from bubbling up
                selectedTarget = lang.value;
                localStorage.setItem("selectedTargetLanguage", lang.value);
                trigger.textContent = lang.label;
                dropdown.remove();
              });

              dropdown.appendChild(option);
            });

            document.body.appendChild(dropdown);

            const closeHandler = (e: MouseEvent) => {
              if (
                !dropdown.contains(e.target as Node) &&
                e.target !== trigger
              ) {
                dropdown.remove();
                document.removeEventListener("click", closeHandler);
              }
            };
            setTimeout(
              () => document.addEventListener("click", closeHandler),
              0
            );
          });
        } catch (err) {
          console.error("Error fetching target languages (Cloud):", err);
        }
      }
    }
  });

  // Close on outside click (panel itself)
  // document.addEventListener("click", (e) => {
  //   const target = e.target as HTMLElement;
  //   if (!panel.contains(target) && target !== floatingIcon) {
  //     // panel.style.right = "-300px";
  //   }
  // });
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const dropdown = document.getElementById("lw-lang-dropdown");
    if (
      !panel.contains(target) &&
      target !== floatingIcon &&
      (!dropdown || !dropdown.contains(target))
    ) {
      panel.style.right = "-300px";
    }
  });

  // Draggable
  makeDraggable(panel, floatingIcon, ".drag-handle");
}

// Draggable helper
function makeDraggable(
  panel: HTMLElement,
  icon: HTMLElement,
  handleSelector: string
) {
  let isDragging = false,
    startY = 0,
    startTopPanel = 0,
    startTopIcon = 0;

  panel.addEventListener("mousedown", (e) => {
    if (!(e.target as HTMLElement).matches(handleSelector)) return;
    isDragging = true;
    startY = e.clientY;
    startTopPanel = panel.offsetTop;
    startTopIcon = icon.offsetTop;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dy = e.clientY - startY;
    panel.style.top = Math.max(50, startTopPanel + dy) + "px";
    icon.style.top = Math.max(50, startTopIcon + dy) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
  });
}

export function initTranslatorWidget() {
  injectFloatingPanel();
}

if (typeof window !== "undefined") {
  (window as any).TranslatorWidget = { initTranslatorWidget };
  injectFloatingPanel();
}

// Fetch helpers
async function fetchSiteId() {
  try {
    const scriptEl =
      (document.currentScript as HTMLScriptElement) ||
      document.querySelector('script[src*="translator-widget.js"]');
    return scriptEl?.getAttribute("data-site-id") || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function fetchToken(siteId: string) {
  try {
    const cachedData = localStorage.getItem(`lw-token-${siteId}`);
    if (cachedData) {
      const { token, expiry } = JSON.parse(cachedData);
      if (expiry && Date.now() < expiry) return token;
      localStorage.removeItem(`lw-token-${siteId}`);
      localStorage.removeItem("cachedTargetLanguages");
    }

    const res = await fetch(`${baseUrl}/token/${siteId}`);
    if (!res.ok) throw new Error("Failed to fetch token");

    const data = await res.json();
    const token = data.token || data.accessToken;
    const expiresIn = data.expiresIn || 3600;
    const mode = data.mode;

    if (!token) throw new Error("No token returned from backend");

    localStorage.setItem(
      `lw-token-${siteId}`,
      JSON.stringify({ token, expiry: Date.now() + expiresIn * 1000, mode })
    );

    return token;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const handleGetLanguages = async (message: any) => {
  let targetLanguages: { value: string; label: string }[] = [];

  try {
    let data: any[] = [];
    const raw = message?.data?.data || message?.languagePairs;

    if (Array.isArray(raw)) data = raw;

    if (data.length > 0 && data[0]?.sourceLanguageId && !data[0]?.value) {
      data = data.map((pair: any) => ({
        ...pair,
        value: pair.sourceLanguageId,
        label: pair.sourceLanguage || pair.label,
      }));
    }

    langPairsRef = data;

    const targetLangMap = new Map<string, { value: string; label: string }>();

    const getLabel = (code: string) =>
      languagePairMapping.find((x: any) => x.threeLetterCode === code)?.name ||
      code;

    data.forEach(({ targetLanguageId }: any) => {
      if (targetLanguageId && !targetLangMap.has(targetLanguageId)) {
        targetLangMap.set(targetLanguageId, {
          value: targetLanguageId,
          label: getLabel(targetLanguageId),
        });
      }
    });

    targetLanguages = Array.from(targetLangMap.values()).sort((a, b) =>
      a.label.localeCompare(b.label)
    );
  } catch (err) {
    console.error("Error processing languages:", err);
  }

  return targetLanguages;
};

function showTranslationOverlay(show: boolean) {
  let overlay = document.getElementById(
    "lw-translation-overlay"
  ) as HTMLDivElement | null;
  if (show) {
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "lw-translation-overlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.background = "rgba(255,255,255,0.85)";
      overlay.style.zIndex = "9999999";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.backdropFilter = "blur(2px)";
      overlay.innerHTML = `<div style="font-size:1rem;color:#e60054;font-weight:bold;">Translating...</div>`;
      document.body.appendChild(overlay);
    }
  } else {
    if (overlay) overlay.remove();
  }
}

function postDetectionContent() {
  const data = fetchingBodyContent();
  console.log("Data", data);

  // Fetch first 100 words from detection data (joined as string)
  const detectedText = (Array.isArray(data) ? data.join(" ") : String(data))
    .split(/\s+/)
    .slice(0, 100)
    .join(" ");
  return detectedText;
}

function fetchingBodyContent() {
  originalData = [];
  contentMap = [];
  if (originalBodyHTML === null) {
    originalBodyHTML = document.body.innerHTML;
  }
  const nodes = deepText(document.body);
  console.log("nodes", nodes);

  for (const node of nodes) {
    if (node.parentNode) {
      const parent = node.parentNode;
      const index = Array.prototype.indexOf.call(parent.childNodes, node);
      contentMap.push({ parent, index });
      originalData.push(node.textContent ?? "");
    }
  }
  return originalData;
}

function deepText(node: Node | null): Node[] {
  let A: Node[] = [];

  if (node) {
    node = node.firstChild;
    while (node != null) {
      const parentElement = node.parentElement;

      // Skip nodes inside floating panel or translation overlay
      if (
        parentElement &&
        (parentElement.closest("#lw-sidepanel") ||
          parentElement.closest("#lw-translation-overlay"))
      ) {
        node = node.nextSibling;
        continue;
      }

      if (
        node.nodeType === 3 &&
        node.textContent &&
        node.textContent.trim().replace(/\n/g, "") !== ""
      ) {
        A.push(node);
      } else {
        A = A.concat(deepText(node));
      }

      node = node.nextSibling;
    }
  }
  return A;
}

async function detectLanguage(
  token: string,
  mode: string,
  content: string
): Promise<DetectedLanguage[] | null> {
  try {
    if (mode === "cloud") {
      const res = await triggerLanguageIdentification(token, content);
      if (!res || !res.requestId) return null;

      const requestId = res.requestId;

      const checkStatus = async (): Promise<DetectedLanguage[] | null> => {
        const status = await getLanguageDetectionStatus(token, requestId);
        if (status?.status === "DONE") {
          const result = await getLanguageDetectionResult(token, requestId);
          // Assume result.languages is [{code: string, confidence: number}]
          return result.languages;
        } else {
          return new Promise((resolve) =>
            setTimeout(async () => resolve(await checkStatus()), 1000)
          );
        }
      };

      return await checkStatus();
    } else if (mode === "edge") {
      const result = await triggerLanguageIdentificationEdge(token, content);
      return result.languages; // ensure this is an array of {code: string}
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function showInPageNotification(message: string, duration = 5000) {
  const notification = document.createElement("div");
  Object.assign(notification.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#e60054",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px #8353fd",
    zIndex: "9999",
    fontFamily: "sans-serif",
    fontSize: "12px",
    opacity: "0",
    transition: "opacity 0.3s ease",
    display: "flex",
    alignItems: "flex-start",
    maxWidth: "300px", // ✅ prevent infinite width
    wordWrap: "break-word",
    whiteSpace: "normal",
  });

  // --- message text ---
  const text = document.createElement("div");
  text.innerText = message;
  Object.assign(text.style, {
    flex: "1",
    paddingRight: "25px", // space for the close button
    lineHeight: "1.4",
  });

  // --- close (cross) button ---
  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  Object.assign(closeBtn.style, {
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    marginLeft: "8px",
  });

  closeBtn.addEventListener("click", () => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (notification.parentElement)
        notification.parentElement.removeChild(notification);
    }, 300);
  });

  notification.appendChild(text);
  notification.appendChild(closeBtn);

  document.body.appendChild(notification);
  requestAnimationFrame(() => (notification.style.opacity = "1"));

  const timeoutId = setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (notification.parentElement)
        notification.parentElement.removeChild(notification);
    }, 300);
  }, duration);

  // Cancel auto-close if user clicks close
  closeBtn.addEventListener("click", () => clearTimeout(timeoutId));
}

export async function postTranslation(
  token: string,
  mode: string,
  src: string,
  trgt: string
) {
  console.log("Initializing Translation");

  const params: iPageTranslateIn = {
    token, // now matches interface
    mode, // now matches interface
    inputFormat: "html", // assuming input format
    input: [], // will be populated in translatePage
    sourceLanguageId: src, // corrected field name
    targetLanguageId: trgt, // corrected field name
    tabId: Date.now(), // unique tab id
  };

  await translatePage(params);
}

// -----------------------------
// Updated translatePage logic
// -----------------------------

export function translateDynamic(params: iPageTranslateDynamic) {
  translateNodes(params, params.nodes);
}

export async function translatePage(params: iPageTranslateIn): Promise<void> {
  _nodes = {};
  originalData = [];
  contentMap = [];

  await restoreOriginalPageIfNeededAsync();

  if (!originalPageHTML) originalPageHTML = document.documentElement.innerHTML;

  initDynamic(params);

  const nodes = getAllTextNodes(document.documentElement);
  console.log("Nodes", nodes);

  if (nodes.length === 0) return;

  // Show translation overlay
  showTranslationOverlay(true);
  try {
    const chunks: iChunk[] = chunkNodes(params.tabId!, nodes);

    for (const chunk of chunks) {
      _nodes[chunk.id] = chunk.nodes;

      const clone: iPageTranslateIn = { ...params };
      clone.input =
        params.input && params.input.length > 0 ? params.input : chunk.segments; // ⚡ send array per node
      clone.chunkId = chunk.id;

      const result = await sendChunkForTranslation(clone);
      console.log("Chunk Result:", result);

      if (result.translation && Array.isArray(result.translation)) {
        chunk.nodes.forEach((node, idx) => {
          const translatedText = result.translation![idx]; // ⚡ the '!' tells TS this is not null
          if (translatedText !== null && translatedText !== undefined) {
            node.nodeValue = translatedText;
          }
        });
      } else if (result.error) {
        console.error(
          `Translation error in chunk ${chunk.id}: ${result.error}`
        );
      }

      await new Promise((resolve) => requestAnimationFrame(resolve));
    }

    showInPageNotification("Translation completed!");
  } catch (err) {
    console.error("Error during full page translation:", err);
    showInPageNotification("An error occurred during translation.");
  } finally {
    showTranslationOverlay(false);
  }
}

export function translateNodes(params: iPageTranslateIn, nodes: HTMLElement[]) {
  let chunks: iChunk[] = chunkNodes(params.tabId!, nodes);

  chunks.forEach((chunk) => {
    handleChunk(chunk, params);
  });
}

async function handleChunk(
  chunk: iChunk,
  data: iPageTranslateIn
): Promise<void> {
  _nodes[chunk.id] = chunk.nodes;

  console.log("chunk", chunk);
  console.log("_nodes", _nodes);

  const clone: iPageTranslateIn = JSON.parse(JSON.stringify(data));
  clone.input =
    data.input && data.input.length > 0 ? data.input : [wrap(chunk.segments)];
  clone.chunkId = chunk.id;

  const result = await sendChunkForTranslation(clone);
  console.log("Result", result);

  // if (result.translation && Array.isArray(result.translation)) {
  //   node.nodeValue = result.translation[0]; // ⚡ use the string
  // } else if (result.error) {
  //   console.error(`Translation error in chunk ${chunk.id}: ${result.error}`);
  // }

  // showInPageNotification("Translation completed!");
}

async function restoreOriginalPageIfNeededAsync(): Promise<void> {
  if (originalPageHTML) {
    console.log("Restoring original page content before new translation...");
    document.documentElement.innerHTML = originalPageHTML;
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
}

// -----------------------------
// Updated sendChunkForTranslation
// -----------------------------
async function sendChunkForTranslation(
  params: iPageTranslateIn
): Promise<{ translation: string[] | null; chunkId: number; error?: string }> {
  try {
    const chunkPayload = {
      input: params.input, // array of strings, one per node
      sourceLanguageId: params.sourceLanguageId!,
      targetLanguageId: params.targetLanguageId!,
      inputFormat: params.inputFormat,
      model: params.model || "generic",
    };

    const response = await initiateTranslation(params.token!, chunkPayload);

    if (!response || !response.requestId) {
      return {
        translation: null,
        chunkId: params.chunkId!,
        error: "No request ID returned from initiateTranslation",
      };
    }

    const requestId = response.requestId;

    const checkStatus = async (): Promise<{
      translation: string[] | null;
      chunkId: number;
      error?: string;
    }> => {
      const status = await getTranslationStatus(params.token!, requestId);

      if (status?.translationStatus === "DONE") {
        const result = await downloadTranslation(params.token!, requestId);

        if (!result || !result.translation || result.translation.length === 0) {
          return {
            translation: null,
            chunkId: params.chunkId!,
            error: "No translation returned",
          };
        }

        // The API already returns an array of translations corresponding to input nodes
        return { translation: result.translation, chunkId: params.chunkId! };
      } else if (status?.translationStatus === "FAILED") {
        return {
          translation: null,
          chunkId: params.chunkId!,
          error: "Translation failed",
        };
      } else {
        // Poll every 1s until done
        return new Promise((resolve) =>
          setTimeout(async () => resolve(await checkStatus()), 1000)
        );
      }
    };

    return await checkStatus();
  } catch (error: any) {
    console.error("Translation request failed:", error);
    return {
      translation: null,
      chunkId: params.chunkId!,
      error: error.message || "Unknown error",
    };
  }
}
