const HLJS_VERSION = "9.12.0";
const THEME = "monokai-sublime";
const SPECIAL_PAGES: RegExp[] = [
    /^about:/,
];

export default {
    TITLE_MAX_LENGTH: 50,
    URL_HLJS_STYLESHEET: `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${HLJS_VERSION}/styles/${THEME}.min.css`,
    URL_HLJS_SCRIPT: `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${HLJS_VERSION}/highlight.min.js`,
    SPECIAL_PAGES,
};
