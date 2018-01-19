const webpack = require("webpack");
const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");

const DIR_SOURCE = "./src/";
const FILE_CONFIG = "./configuration.js";
const FILE_MAIN = DIR_SOURCE + "main.ts";
const CONFIG = require(FILE_CONFIG);
const CONFIG_REQUIRED = [
    "ID",
];

const EXTENSIONS = ["ts", "js"];
const REGEX_SOURCE_CODE = new RegExp("\\.(" + EXTENSIONS.join("|") + ")$");

// Config validation:
CONFIG_REQUIRED.forEach((property) => {
    if (typeof CONFIG[property] !== "string") {
        throw new Error("Property "+property+" in "+FILE_CONFIG+" missing or invalid (expected a string but found "+JSON.stringify(CONFIG[property])+").");
    }
});

function onlyTruthy(array) {
    return array.filter(Boolean);
}

function outputHeader(name) {
    return "javascript:" + (name ? "/*" + name + "*/" : "");
}

module.exports = (env = {}) => {

    const PRODUCTION = Boolean(env.production);

    return {
        entry: {
            "main": FILE_MAIN,
        },
        output: {
            path: path.resolve(__dirname, "."),
            filename: CONFIG.ID + ".bookmarklet.js",
        },
        module: {
            rules: [
                {
                    // Loaders chained from the bottom up:
                    loaders: [
                        // TypeScript with Babel:
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                useBabel: PRODUCTION,
                                useCache: true,
                                allowJs: true,
                                babelOptions: {
                                    presets: [
                                        ["env", {
                                            modules: false, // don't touch ES6 module syntax
                                            targets: {
                                                browsers: ["last 3 versions"]
                                            },
                                        }]
                                    ],
                                },
                            }
                        },
                    ],
                    // Only include source directory:
                    include: onlyTruthy([
                        path.resolve(__dirname, DIR_SOURCE),
                        PRODUCTION && path.resolve(__dirname, "node_modules"), // may take a long time; useful only for production builds
                    ]),
                    // Only run source code files through the loaders:
                    test: REGEX_SOURCE_CODE,
                },
            ],
        },
        resolve: {
            modules: [
                "node_modules",
                path.resolve(__dirname, DIR_SOURCE),
            ],
            extensions: EXTENSIONS.map(ext => "."+ext),
        },
        plugins: onlyTruthy([
            new webpack.optimize.ModuleConcatenationPlugin(),
            PRODUCTION && new MinifyPlugin(),
            PRODUCTION && new webpack.BannerPlugin({
                banner: outputHeader(CONFIG.ID),
                raw: true,
                entryOnly: true,
            }),
        ]),
    };

};
