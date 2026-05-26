/**
 * @summary The configuration for the authentication cookies names.
 * @description This class is used to get the names of the authentication cookies.
 */
class AuthCookiesNamesConfiguration {
    /**
     * @summary Private constructor.
     * @description Private constructor to prevent instantiation of the class.
     */
    private constructor() {}

    /**
     * @summary The name of the access token cookie.
     * @description The name of the access token cookie.
     */
    public static readonly ACCESS_TOKEN: string = "accessToken"

    /**
     * @summary The name of the refresh token cookie.
     * @description The name of the refresh token cookie.
     */
    public static readonly REFRESH_TOKEN: string = "refreshToken"
}

export { AuthCookiesNamesConfiguration }
