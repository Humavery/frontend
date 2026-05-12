/**
 * @summary Interface for the item of the RequestCachingClientService.
 * @description This interface is used to define the item of the RequestCachingClientService.
 * @template T - The type of the item to cache, it can be any type.
 */
interface IRequestCachingClientServiceItem<T> {
    /**
     * @summary The expiration date of the item.
     * @description The expiration date of the item in milliseconds.
     */
    readonly expiresAt: number
    /**
     * @summary The item to cache.
     * @description The item to cache, it can be any type, defined by the template parameter.
     */
    readonly item: T
}

export type { IRequestCachingClientServiceItem }
