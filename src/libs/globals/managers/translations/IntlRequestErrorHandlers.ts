import { IntlErrorCode } from "next-intl"
import type { IntlError } from "next-intl"
import { EnvironmentVariables } from "@/humavery/libs/globals/EnvironmentVariables"

/**
 * @summary Server `getRequestConfig` error handlers for next-intl.
 * @description Suppresses missing-message noise in CI; logs other errors and supplies fallbacks.
 */
class IntlRequestErrorHandlers {
    /**
     * @summary Private constructor.
     * @description Prevents instantiation.
     */
    private constructor() {}

    /**
     * @summary `onError` callback for next-intl `getRequestConfig` (server).
     * @param error The internationalization error from next-intl.
     */
    public static onError(error: IntlError): void {
        if (EnvironmentVariables.IS_CI && error.code === IntlErrorCode.MISSING_MESSAGE) {
            return
        }
        console.error(error)
    }

    /**
     * @summary `getMessageFallback` for next-intl `getRequestConfig` (server).
     * @param parameters Namespace, message key, and error from next-intl.
     * @returns Fallback string shown when a message cannot be resolved.
     */
    public static getMessageFallback({
        namespace,
        key,
        error,
    }: {
        namespace?: string
        key: string
        error: IntlError
    }): string {
        const path: string = [namespace, key].filter((part: string | undefined) => part != null).join(".")
        if (error.code === IntlErrorCode.MISSING_MESSAGE) {
            return path
        }
        return `Dear developer, please fix this message: ${path}`
    }
}

export { IntlRequestErrorHandlers }
