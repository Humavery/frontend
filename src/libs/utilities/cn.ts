import { twMerge } from "tailwind-merge"
import type { ClassValue } from "clsx"

/**
 * @summary Utility function to merge Tailwind CSS classes.
 * @description This function is used to merge Tailwind CSS classes into a single string.
 * @param classes - The classes to merge.
 * @returns The merged classes.
 */
const cn = (...classes: ClassValue[]): string => {
    return twMerge(classes.filter(Boolean).join(" "))
}

export { cn }
