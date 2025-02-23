import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3|m4a)$/, // Поддержка файлов .mp3 и .m4a
      type: "asset/resource", // Ресурсы обрабатываются как статические файлы
      generator: {
        filename: "static/media/[name].[hash][ext]", // Сохраняются в static/media
      },
    });

    return config; // Возвращаем обновленную конфигурацию
  },
};

export default nextConfig;
