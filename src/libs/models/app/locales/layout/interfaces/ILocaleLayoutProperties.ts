import type { IChildren } from "@/humavery/libs/models/components/general/interfaces/IChildren"

/**
 * @summary Interface for the locale layout properties.
 * @description Interface for the locale layout properties.
 */
interface ILocaleLayoutProperties extends IChildren {
    /**
     * @summary The parameters for the locale layout.
     * @description The parameters for the locale layout. This is the locale that will be used to render the layout.
     */
    readonly params: Promise<{ locale: string }>
}

export type { ILocaleLayoutProperties }
