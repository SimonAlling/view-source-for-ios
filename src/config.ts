const ID_TOKEN = "view-source-for-ios-by-alling"; // inserted into the generated page so it can be identified
const SELECTOR_DETECT_PLUGIN = "html#" + ID_TOKEN;
const HLJS_VERSION = "9.12.0";
const THEME = "hybrid";
const SPECIAL_PAGES: RegExp[] = [
    /^about:/,
];

export default {
    TITLE_MAX_LENGTH: 50,
    URL_HLJS_STYLESHEET: `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${HLJS_VERSION}/styles/${THEME}.min.css`,
    URL_HLJS_SCRIPT: `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${HLJS_VERSION}/highlight.min.js`,
    SPECIAL_PAGES,
    ID_TOKEN,
    SELECTOR_DETECT_PLUGIN,
};
