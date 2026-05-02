import type { MetadataRoute } from "next"
import { EnvironmentVariables } from "../libs/globals/EnvironmentVariables"

/**
 * @summary The robots route.
 * @description This function is used to generate a `robots.txt` file.
 * @returns A generated `robots.txt` file.
 */
function RobotsRoute(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            disallow: "/api/*",
            allow: "/",
        },
        sitemap: `${EnvironmentVariables.WEBSITE_ENDPOINT_URL.href}/sitemap.xml`,
    }
}

export default RobotsRoute
