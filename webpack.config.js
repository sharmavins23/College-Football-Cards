module.exports = (env) => {
    return {
        mode: env,
        entry: "./index.js",
        output: {
            filename: "bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        devServer: {
            port: 3000,
        },
    };
};
