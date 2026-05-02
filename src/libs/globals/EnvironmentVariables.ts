import { EnvironmentVariablesDataManager } from "./managers/security/EnvironmentVariablesDataManager"

/**
 * @summary The class for the environment variables.
 * @description This class is used to get the environment variables.
 */
class EnvironmentVariables {
    /**
     * @summary Private constructor.
     * @description Private constructor to prevent instantiation of the class.
     */
    private constructor() {}

    /**
     * @summary The URL to the API endpoint.
     * @description Endpooint URL to the API.
     */
    public static readonly API_ENDPOINT_URL: URL = EnvironmentVariablesDataManager.getURL(
        "NEXT_PUBLIC_API_ENDPOINT_URL",
        process.env.NEXT_PUBLIC_API_ENDPOINT_URL,
        true,
    )

    /**
     * @summary The URL to the CDN endpoint.
     * @description Endpooint URL to the CDN server to serve static files, used by {@link CdnImage} component.
     */
    public static readonly CDN_ENDPOINT_URL: URL = EnvironmentVariablesDataManager.getURL(
        "NEXT_PUBLIC_CDN_ENDPOINT_URL",
        process.env.NEXT_PUBLIC_CDN_ENDPOINT_URL,
        true,
    )

    /**
     * @summary The URL to the website endpoint.
     * @description Endpooint URL to the website itself, mostly for SEO and PWA configuration.
     */
    public static readonly WEBSITE_ENDPOINT_URL: URL = EnvironmentVariablesDataManager.getURL(
        "NEXT_PUBLIC_WEBSITE_ENDPOINT_URL",
        process.env.NEXT_PUBLIC_WEBSITE_ENDPOINT_URL,
        true,
    )
}

export { EnvironmentVariables }
