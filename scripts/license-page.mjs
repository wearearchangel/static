// Keeps /design/license/ in step with design/LICENSE.txt.
//
//   node scripts/license-page.mjs --write   regenerate the page from the licence
//   node scripts/license-page.mjs --check   fail if the page is out of date
//
// design/LICENSE.txt is the single source of truth. The page holds a generated
// block between the START and END markers; everything outside it is hand-written.

import { readFileSync, writeFileSync } from "node:fs";
import process from "node:process";

const LICENSE_FILE = "design/LICENSE.txt";
const PAGE_FILE = "design/license/index.html";
const START = "<!-- license:start (generated from design/LICENSE.txt) -->";
const END = "<!-- license:end -->";

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Words left lower case inside a title, except at the start.
const SMALL_WORDS = new Set([
  "a",
  "an",
  "and",
  "in",
  "of",
  "on",
  "or",
  "the",
  "to",
]);

// "THIRD-PARTY COMPONENTS" -> "Third-Party Components"
const titleCase = (text) =>
  text
    .toLowerCase()
    .replace(/[a-z]+/g, (word, offset) =>
      offset > 0 && SMALL_WORDS.has(word)
        ? word
        : word[0].toUpperCase() + word.slice(1),
    );

const HEADING = /^(\d+)\.\s+([A-Z][A-Z ,;&-]*)$/;
const CLAUSE = /^\([a-z]\)\s/;

function render(source) {
  const blocks = source
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.split("\n").map((line) => line.trim()));

  // The first block is the document title; the page supplies its own <h1>.
  const html = [];
  for (const lines of blocks.slice(1)) {
    const heading = lines.length === 1 && HEADING.exec(lines[0]);
    if (heading) {
      const [, number, title] = heading;
      // Subtitles under the page's single <h1>, so no section-title class.
      html.push(
        `<h2 id="section-${number}">${number}. ${escapeHtml(titleCase(title))}</h2>`,
      );
    } else if (CLAUSE.test(lines[0])) {
      const clauses = [];
      for (const line of lines) {
        if (CLAUSE.test(line)) clauses.push(line);
        else clauses[clauses.length - 1] += ` ${line}`;
      }
      for (const clause of clauses) {
        html.push(`<p class="clause">${escapeHtml(clause)}</p>`);
      }
    } else {
      html.push(`<p>${escapeHtml(lines.join(" "))}</p>`);
    }
  }
  return html.join("\n");
}

// Whitespace is the only thing Prettier changes, so compare without it.
const squash = (html) =>
  html
    .replace(/\s+/g, " ")
    .replace(/\s*(<[^>]+>)\s*/g, "$1")
    .trim();

const mode = process.argv[2];
if (mode !== "--write" && mode !== "--check") {
  throw new Error("Usage: license-page.mjs --write | --check");
}

const generated = render(readFileSync(LICENSE_FILE, "utf8"));
const page = readFileSync(PAGE_FILE, "utf8");
const start = page.indexOf(START);
const end = page.indexOf(END);
if (start === -1 || end === -1 || end < start) {
  throw new Error(
    `${PAGE_FILE} is missing the license:start / license:end markers.`,
  );
}

if (mode === "--write") {
  const next = `${page.slice(0, start + START.length)}\n${generated}\n${page.slice(end)}`;
  writeFileSync(PAGE_FILE, next);
} else {
  const current = page.slice(start + START.length, end);
  if (squash(current) !== squash(generated)) {
    throw new Error(
      `${PAGE_FILE} is out of date with ${LICENSE_FILE}. Run: npm run license:build`,
    );
  }
}
