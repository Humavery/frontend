import createMiddleware from "next-intl/middleware"
import type { NextRequest } from "next/server"
import { routing } from "@/humavery/libs/translations/Routing"

const handleI18nRouting = createMiddleware(routing)

/**
 * @summary Next.js 16 proxy entry (replaces `middleware`).
 * @description Delegates locale detection and prefix routing to next-intl.
 * @see {@link https://next-intl.dev/docs/routing/setup}
 */
export function proxy(request: NextRequest) {
    return handleI18nRouting(request)
}

/**
 * @summary Next.js 16 proxy configuration.
 * @description Configuration for the Next.js 16 proxy.
 * @see {@link https://next-intl.dev/docs/routing/setup}
 */
export const config = {
    matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
}
