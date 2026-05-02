import type { NextConfig } from "next"

/**
 * @summary The CDN endpoint URL.
 * @description Parses the CDN endpoint URL from the environment variables and returns it if it's valid.
 * @throws {Error} If the CDN endpoint URL is not set or is invalid.
 */
const CDN_ENDPOINT_URL: URL = ((): URL => {
    const value: string | undefined = process.env.NEXT_PUBLIC_CDN_ENDPOINT_URL
    if (value === undefined) throw new Error("NEXT_PUBLIC_CDN_ENDPOINT_URL is not set.")

    try {
        return new URL(value)
    } catch {
        throw new Error("NEXT_PUBLIC_CDN_ENDPOINT_URL is not a valid URL.")
    }
})()

/**
 * @summary Next.js configuration.
 * @description Configuration of the frontend application.
 * @see {@link https://nextjs.org/docs/app/api-reference/config/next-config-js}
 */
export default {
    typedRoutes: true,
    reactCompiler: true,
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: false,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: CDN_ENDPOINT_URL.hostname,
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/favicon.ico",
                destination: "/favicon.png",
                permanent: true,
            },
        ]
    },
} satisfies NextConfig
