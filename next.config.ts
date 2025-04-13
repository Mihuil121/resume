import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp3|m4a|glb|mp4|pdf)$/, 
            type: "asset/resource",
            generator: {
                filename: "static/media/[name].[hash][ext]",
            },
        });

        return config;
    },
};

export default nextConfig;
