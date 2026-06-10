import { EnvironmentVariables } from "@/humavery/libs/globals/EnvironmentVariables"
import { routing } from "@/humavery/libs/translations/Routing"

/**
 * @summary Loads merged translation JSON for next-intl.
 * @description Builds per-locale messages (default locale merged under others); tolerates missing files in CI.
 */
class LoadTranslationMessagesDataManager {
    /**
     * @summary Private constructor.
     * @description Prevents instantiation.
     */
    private constructor() {}

    /**
     * @summary Deep-merges nested message objects; leaf values from `override` replace `base`.
     * @description Lets locale files omit keys that exist on the default locale.
     */
    private static mergeNestedMessages(
        base: Record<string, unknown>,
        override: Record<string, unknown>,
    ): Record<string, unknown> {
        const out: Record<string, unknown> = { ...base }
        for (const key of Object.keys(override)) {
            const b: unknown = base[key]
            const o: unknown = override[key]
            if (
                o !== null &&
                typeof o === "object" &&
                !Array.isArray(o) &&
                b !== null &&
                typeof b === "object" &&
                !Array.isArray(b)
            ) {
                out[key] = this.mergeNestedMessages(b as Record<string, unknown>, o as Record<string, unknown>)
            } else {
                out[key] = o
            }
        }
        return out
    }

    /**
     * @summary Loads messages for a locale from `messages/*.json`.
     * @param locale The BCP 47 locale id (e.g. `en-US`).
     * @returns Merged messages for next-intl.
     */
    public static async loadMessages(locale: string): Promise<Record<string, unknown>> {
        const importMessages = async (l: string) => {
            try {
                return (await import(`@/humavery/libs/translations/messages/${l}.json`)).default as Record<
                    string,
                    unknown
                >
            } catch {
                return {}
            }
        }

        const tryImportMessages = async (l: string): Promise<Record<string, unknown> | undefined> => {
            try {
                return await importMessages(l)
            } catch {
                return undefined
            }
        }

        if (locale === routing.defaultLocale) {
            if (!EnvironmentVariables.IS_CI) {
                return importMessages(locale)
            }
            return (await tryImportMessages(locale)) ?? {}
        }

        if (!EnvironmentVariables.IS_CI) {
            const base: Record<string, unknown> = await importMessages(routing.defaultLocale)
            const override: Record<string, unknown> = await importMessages(locale)
            return this.mergeNestedMessages(base, override)
        }

        const base: Record<string, unknown> = (await tryImportMessages(routing.defaultLocale)) ?? {}
        const override: Record<string, unknown> | undefined = await tryImportMessages(locale)
        if (override === undefined) {
            return base
        }
        return this.mergeNestedMessages(base, override)
    }
}

export { LoadTranslationMessagesDataManager }
