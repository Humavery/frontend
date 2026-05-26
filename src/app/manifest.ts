import type { MetadataRoute } from "next"
import { routing } from "@/humavery/libs/translations/Routing"

/**
 * @summary The manifest route.
 * @description This function is used to generate a `manifest.json` file.
 * @returns A generated `manifest.json` file.
 */
function ManifestRoute(): MetadataRoute.Manifest {
    return {
        name: "Humavery",
        short_name: "Humavery",
        description: "Humavery",
        start_url: `/${routing.defaultLocale}`,
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: "/assets/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/assets/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/assets/icons/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
                purpose: "maskable",
            },
        ],
        lang: routing.defaultLocale,
    }
}

export default ManifestRoute
