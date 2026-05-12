import { createNavigation } from "next-intl/navigation"
import { routing } from "@/humavery/libs/translations/Routing"

/**
 * @summary Locale-aware navigation helpers for the App Router.
 * @description Prefer these over `next/link` and `next/navigation` so the active locale stays in the URL.
 */
const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)

export { Link, redirect, usePathname, useRouter, getPathname }
