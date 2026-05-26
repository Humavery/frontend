import type { MetadataRoute } from "next"
import { routing } from "@/humavery/libs/translations/Routing"
import { EnvironmentVariables } from "../libs/globals/EnvironmentVariables"

/**
 * @summary The manager for the sitemap.
 * @description This manager is used to generate the sitemap.
 */
class SitemapManager {
    /**
     * @summary Private constructor.
     * @description Private constructor to prevent instantiation of the class.
     */
    private constructor() {}

    /**
     * @summary The paths for the sitemap.
     * @description The that will be included in the sitemap.
     */
    private static readonly PATHS: readonly string[] = ["/"]

    /**
     * @summary Resolves the localized path.
     * @description Resolves the localized path.
     * @param locale The locale of the path.
     * @param pathname The pathname of the path.
     * @returns The localized path.
     */
    private static resolveLocalizedPath(locale: string, pathname: string): string {
        if (pathname === "/") return `/${locale}`
        const suffix = pathname.startsWith("/") ? pathname : `/${pathname}`
        return `/${locale}${suffix}`
    }

    /**
     * @summary Generates the sitemap.
     * @description Generates the sitemap file.
     * @returns The sitemap.
     */
    public static generateSitemap(): MetadataRoute.Sitemap {
        const baseUrl: string = EnvironmentVariables.WEBSITE_ENDPOINT_URL.href

        return SitemapManager.PATHS.flatMap((pathname) => {
            const languages = Object.fromEntries(
                routing.locales.map((locale) => [
                    locale,
                    `${baseUrl}${SitemapManager.resolveLocalizedPath(locale, pathname)}`,
                ]),
            )

            return routing.locales.map((locale) => ({
                url: `${baseUrl}${SitemapManager.resolveLocalizedPath(locale, pathname)}`,
                lastModified: new Date(),
                alternates: { languages },
            }))
        })
    }
}

export default SitemapManager.generateSitemap
