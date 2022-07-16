const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-addon-next",
        "@react-theming/storybook-addon",
        "storybook-addon-pseudo-states",
    ],
    core: {
        builder: "webpack5",
    },
    webpackFinal: async (config) => {
        // There is likely a better way to extract the baseUrl from tsconfig.
        config.resolve.modules.push(path.resolve(__dirname, "../"));
        config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx", ".js", ".jsx"];

        return config;
    },
};
