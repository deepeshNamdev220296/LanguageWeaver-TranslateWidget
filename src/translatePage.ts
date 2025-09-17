import { iPageTranslateIn, iChunk } from "./interface";

let _params: iPageTranslateIn;
let DynamicTranslationObserver: MutationObserver | null = null;
let _nodes: { [key: number]: Text[] } = {};

// Initialize the MutationObserver if not already initialized
export function initDynamic(params: iPageTranslateIn) {
  _params = params;
  if (!DynamicTranslationObserver) {
    DynamicTranslationObserver = new MutationObserver(MutationObserverCallback);
  }
}

// Get all valid text nodes in the page body
export function getAllTextNodes(root: HTMLElement): Text[] {
  const nodes: Text[] = [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node: Node) {
      if (
        !node.nodeValue ||
        !node.nodeValue.trim() ||
        (node.parentElement &&
          node.parentElement.closest("#lw-sidepanel,#lw-translation-overlay"))
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let currentNode = walker.nextNode();
  while (currentNode) {
    nodes.push(currentNode as Text);
    currentNode = walker.nextNode();
  }

  return nodes;
}

// Break text nodes into chunks
export function chunkNodes(
  tabId: number,
  nodes: Text[],
  chunkSize = 50
): iChunk[] {
  const chunks: iChunk[] = [];
  let idCounter = 0;

  for (let i = 0; i < nodes.length; i += chunkSize) {
    const slice = nodes.slice(i, i + chunkSize);
    const segments = slice.map((node) => node.nodeValue || "");
    chunks.push({
      id: idCounter++,
      nodes: slice,
      segments,
    });
  }

  return chunks;
}

// Store chunk references and prepare data
export async function handleChunk(
  chunk: iChunk,
  data: iPageTranslateIn
): Promise<void> {
  _nodes[chunk.id] = chunk.nodes;
}

// Example MutationObserver callback stub
function MutationObserverCallback(mutations: MutationRecord[]) {
  // Implement if needed
}

// Restore the original page content if previously saved
let originalPageHTML: string | null = null;
async function restoreOriginalPageIfNeededAsync(): Promise<void> {
  if (originalPageHTML) {
    console.log("Restoring original page content before new translation...");
    document.documentElement.innerHTML = originalPageHTML;
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
}

// Main function to prepare chunks for translation
export async function translatePage(
  params: iPageTranslateIn
): Promise<iChunk[]> {
  _nodes = {};
  originalPageHTML = originalPageHTML || document.documentElement.innerHTML;

  await restoreOriginalPageIfNeededAsync();

  initDynamic(params);

  const nodes = getAllTextNodes(document.body);

  const chunks = chunkNodes(params.tabId, nodes);

  for (const chunk of chunks) {
    await handleChunk(chunk, params);
  }

  return chunks;
}
