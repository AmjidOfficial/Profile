import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../premium-v3.css", import.meta.url), "utf8");
const js = readFileSync(new URL("../premium-v3.js", import.meta.url), "utf8");
const required = ["MUHAMMAD AMJID","04 / MEDIA & FIELD GALLERY","SMART SALES","SALESPULSE AI","BAZAR360.ONLINE","N-LINK360","AUTOMATED DISTRIBUTOR LEDGER SYSTEM","WhatsApp","Ismail Industries Limited","MBA (Executive)","MA Islamic Studies","DAE Electrical"];
for (const text of required) assert.ok(html.includes(text), "Missing required content: "+text);
for (const removed of ["BA</h3>","SSC</h3>","AMJID/26","profileButton","Gravity","Editorial","Cinematic"]) assert.ok(!html.includes(removed), "Unexpected legacy content: "+removed);
for (const id of ["themeToggle","mediaUploadForm","mediaFiles","dropZone","galleryGrid","mediaLightbox","fullscreenMedia","contactForm"]) assert.ok(html.includes('id="'+id+'"'), "Missing UI id: "+id);
for (const project of ["smart-sales","salespulse-ai","bazar360","n-link360","distributor-ledger"]) assert.ok(html.includes('data-project="'+project+'"'), "Missing project gallery action: "+project);
for (const filter of ["all","photos","videos","dashboard","awards"]) assert.ok(html.includes('data-filter="'+filter+'"'), "Missing gallery filter: "+filter);
assert.ok(html.includes('href="https://wa.me/923149198403"'), "WhatsApp link missing or incorrect");
assert.ok(html.includes('data-theme="dark"'), "Dark theme must be the default");
assert.ok(js.includes("indexedDB.open") && js.includes("createObjectURL") && js.includes("requestFullscreen"), "Media persistence, previews and fullscreen support should be present");
assert.ok(js.includes("youtube-nocookie.com/embed/") && js.includes("safeHttpUrl"), "YouTube and safe public URL support should be present");
assert.ok(css.includes("@media(max-width:600px)") && css.includes("prefers-reduced-motion"), "Responsive and reduced-motion styles should be present");
const ids = [];
let remaining = html;
while (remaining.includes('id="')) {
  remaining = remaining.slice(remaining.indexOf('id="') + 4);
  ids.push(remaining.slice(0, remaining.indexOf('"')));
}
assert.equal(ids.length, new Set(ids).size, "HTML contains duplicate IDs");
execFileSync(process.execPath, ["--check", new URL("../premium-v3.js", import.meta.url).pathname], { stdio: "inherit" });
console.log("Portfolio smoke checks passed.");
