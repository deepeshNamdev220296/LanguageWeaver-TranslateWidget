import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import url from "@rollup/plugin-url";

export default {
  input: "src/widget.tsx",
  output: {
    file: "dist/translator-widget.js",
    format: "umd",
    name: "TranslatorWidget", // becomes window.TranslatorWidget
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(),
    url({
      include: ["**/*.png", "**/*.jpg", "**/*.svg"],
      limit: 8192, // inline base64 if < 8kb
      emitFiles: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
};
