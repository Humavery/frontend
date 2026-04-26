import type { ReactNode } from "react"

/**
 * @summary Interface for components that have children.
 * @description This interface is used to define the children of a component. Extend this interface to add children to your component.
 */
interface IChildren {
    /**
     * @summary The children of the component.
     * @description The children of the component. This is the content that will be rendered inside the component.
     */
    readonly children: ReactNode
}

export type { IChildren }
