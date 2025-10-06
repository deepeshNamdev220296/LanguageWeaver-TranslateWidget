// for translation of content by javascript, used for DOM changes and reloading frames

import { translateDynamic, translateNodes } from "./widget";
import { getAllTextNodes } from "./harvest";
import { iPageTranslateDynamic, iPageTranslateIn } from "./interface";

// Options for the observer (which mutations to observe)
//const DynamicTranslationObserverFlags = { attributeOldValue: true, attributes: true, childList: true, subtree: true };
export const DynamicTranslationObserverFlags = {
  childList: true,
  subtree: true,
};

//the actual observer, still needs activating
export var DynamicTranslationObserver: MutationObserver;

var _params: iPageTranslateIn;

export function initDynamic(params: iPageTranslateIn) {
  _params = params;
  if (
    DynamicTranslationObserver === undefined ||
    DynamicTranslationObserver === null
  ) {
    DynamicTranslationObserver = new MutationObserver(MutationObserverCallback);
  }
}
// Callback function when an iframe is loaded
export function startDynamicTranslate(frameDoc: Document) {
  let allText = getAllTextNodes(frameDoc.body);
  // each new frame requires its own observer
  DynamicTranslationObserver.observe(
    frameDoc.body,
    DynamicTranslationObserverFlags
  );
  if (allText.length > 0) {
    translateNodes(_params, allText);
  }
}

// Callback function to execute when mutations are observed
export function MutationObserverCallback(
  mutationsList: any,
  observer: any
): void {
  let allText: HTMLElement[] = [];
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      for (let mutationNode of mutation.addedNodes) {
        let subnodes = getAllTextNodes(mutationNode);
        if (subnodes.length > 0) {
          allText = allText.concat(subnodes);
        }
      }
    }
  }

  if (allText.length > 0) {
    let params: iPageTranslateDynamic = { ..._params, nodes: allText };
    translateDynamic(params);
  }
}

// make each frame listen to the load event, and remove the sandbox to permit scripts again.
export function SetupFrameListeners(doc: Document, callback: () => void) {
  // observe the main document
  DynamicTranslationObserver.observe(doc.body, DynamicTranslationObserverFlags);

  let frames = doc.getElementsByTagName("iframe");
  for (let i = 0; i < frames.length; ++i) {
    if (!frames[i] || frames[i].contentDocument === null) {
      // cannot handle cross domain or empty frames
      continue;
    }

    // once a frame is loaded, allow scripts again (for dynamic reloads)
    augmentFrameDyn(frames[i]);

    frames[i].addEventListener("load", function () {
      if (frames[i].contentDocument !== null) {
        startDynamicTranslate(frames[i].contentDocument!);
      }
    });
  }
}

function augmentFrameDyn(frame: HTMLIFrameElement) {
  // looks like rights are lost here already somehow. brute force add most rights
  frame.sandbox =
    "allow-same-origin allow-scripts allow-forms allow-modals allow-popups-to-escape-sandbox allow-popups allow-top-navigation allow-downloads";
}
