/**
 * @summary Interface for the options of the RequestCachingClientService.
 * @description This interface is used to define the options of the RequestCachingClientService.
 */
interface IRequestCachingClientServiceOptions {
    /**
     * @summary The time to live for the cached items.
     * @description The time to live for the cached items in milliseconds.
     */
    readonly timeToLive: number
    /**
     * @summary The max size of the cached items.
     * @description The max size of the cached items, used to limit the number of cached items.
     */
    readonly maxSize: number
}

export type { IRequestCachingClientServiceOptions }
