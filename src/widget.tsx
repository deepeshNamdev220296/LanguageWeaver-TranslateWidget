import React from "react";
import { createRoot } from "react-dom/client";
import TranslateWidget from "./TranslateWidget";

(function () {
  if (window.__TRANSLATE_WIDGET__) return;
  window.__TRANSLATE_WIDGET__ = true;

  const container = document.createElement("div");
  container.id = "translate-widget";
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.zIndex = "999999";
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<TranslateWidget />);
})();
