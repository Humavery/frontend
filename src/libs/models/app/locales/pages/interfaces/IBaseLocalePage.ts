/**
 * @summary Interface for the base locale page.
 * @description Interface for the base locale page.
 */
interface IBaseLocalePage {
    /**
     * @summary The parameters for the base locale page.
     * @description The parameters for the base locale page. This is the locale that will be used to render the page.
     */
    readonly params: Promise<{ locale: string }>
}

export type { IBaseLocalePage }
