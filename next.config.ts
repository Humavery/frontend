import type { NextConfig } from "next"

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
    async redirects() {
        return [
            {
                source: "/favicon.ico",
                destination: "/favicon.png",
                permanent: true
            }
        ]
    }
} satisfies NextConfig
