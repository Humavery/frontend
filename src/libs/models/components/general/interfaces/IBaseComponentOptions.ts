import type { IChildren } from "./IChildren"

/**
 * @summary Interface for the options of the base component.
 * @description This interface is used to define the options of the base component.
 */
interface IBaseComponentOptions extends IChildren {
    /**
     * @summary The class name of the component.
     * @description The class name of the component. This is used to add custom styles to the component.
     */
    readonly className?: string
}

export type { IBaseComponentOptions }
