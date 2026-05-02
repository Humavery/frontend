import type { ImageProps } from "next/image"

/**
 * @summary Interface for the properties of the CDN image component.
 * @description This interface is used to define the properties of the CDN image component. It has the same options as the `<Image />` component from `next/image` package,
 * but it uses `key` as `src` property to load the image from the CDN server.
 */
type ICdnImageProperties = Omit<ImageProps, "src"> & {
    /**
     * @summary The key of the image.
     * @description The key of the image is used to load the image from the CDN server.
     */
    readonly key: string
}

export type { ICdnImageProperties }
