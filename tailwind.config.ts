import type { Config } from "tailwindcss";
const config: Config = {
  content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme:{extend:{fontFamily:{sans:["Inter","ui-sans-serif","system-ui"],mono:["JetBrains Mono","ui-monospace"]}}},
  plugins:[]
};
export default config;