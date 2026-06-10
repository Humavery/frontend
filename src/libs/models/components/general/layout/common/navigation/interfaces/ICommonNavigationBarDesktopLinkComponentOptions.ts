/**
 * @summary Interface for the options of the CommonNavigationBarDesktopLinkComponent.
 * @description This interface is used to define the options of the CommonNavigationBarDesktopLinkComponent.
 */
interface ICommonNavigationBarDesktopLinkComponentOptions {
    /**
     * @summary The label of the link.
     * @description The label of the link is used to display the text of the link.
     */
    readonly label: string
    /**
     * @summary The href of the link.
     * @description The href of the link is used to navigate to the link.
     */
    readonly href: string
    /**
     * @summary Whether the link is active.
     * @description Whether the link is active is used to determine if the link is active.
     */
    readonly isActive: boolean
}

export type { ICommonNavigationBarDesktopLinkComponentOptions }
