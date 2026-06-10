import { EnvironmentVariables } from "@/humavery/libs/globals/EnvironmentVariables"
import type { ICdnImageProperties } from "@/humavery/libs/models/components/general/images/cdn/interfaces/ICdnImageProperties"
import type { JSX } from "react"
import Image from "next/image"

/**
 * @summary The CDN image component.
 * @description This component is used to load images from the custom CDN server.
 * @param props - The properties of the image.
 * @see {@link ICdnImageProperties} for the properties of the component.
 * @returns The CDN image component.
 */
const CdnImage = ({ key, alt, ...props }: ICdnImageProperties): JSX.Element => {
    const url: URL = new URL(EnvironmentVariables.CDN_ENDPOINT_URL)
    url.searchParams.set("key", key)

    return <Image src={url.toString()} alt={alt ?? "/"} {...props} />
}

export default CdnImage
