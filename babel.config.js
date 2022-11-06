module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            [
                "module-resolver",
                {
                    alias: {
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@helpers": "./src/helpers",
                        "@hooks": "./src/hooks",
                        "@layouts": "./src/layouts",
                        "@navigation": "./src/navigation",
                        "@screens": "./src/screens",
                        "@stores": "./src/stores",
                    },
                },
            ],
        ],
    };
};
