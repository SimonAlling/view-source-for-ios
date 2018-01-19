declare function require(path: string): any;

import CONFIG from "./config";
import TEXT from "./text";
import { escapeHtml, truncateTo } from "./utilities";
const format = require("string-format");
const STYLE: string = require("!!raw-loader!minifycss-loader?minify!sass-loader!./stylesheet.scss");
const HTML: string = require("!!raw-loader!html-minifier-loader!./page.html");

function generateHtml(sourceCode: string): string {
    const truncate = truncateTo(
        CONFIG.TITLE_MAX_LENGTH,
        TEXT.clipping_indicator,
    );
    const url = location.href;
    return format(HTML, {
        title: truncate(TEXT.title_prefix + url),
        heading: TEXT.heading_prefix + url,
        source: escapeHtml(sourceCode),
        css: STYLE,
        url_hljs_script: CONFIG.URL_HLJS_SCRIPT,
        url_hljs_stylesheet: CONFIG.URL_HLJS_STYLESHEET,
    });
}

function main(): void {
    const doctypeDeclaration = document.doctype ? new XMLSerializer().serializeToString(document.doctype) + "\n" : "";
    const sourceCode = doctypeDeclaration + document.documentElement.outerHTML;
    const uri = `data:text/html,` + encodeURIComponent(generateHtml(sourceCode));
    window.open(uri);
}

main();
