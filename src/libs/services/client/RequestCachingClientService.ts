import type { IRequestCachingClientServiceItem } from "../../models/libs/services/client/request-caching/interfaces/IRequestCachingClientServiceItem"
import type { IRequestCachingClientServiceOptions } from "../../models/libs/services/client/request-caching/interfaces/IRequestCachingClientServiceOptions"
import { BaseClientService } from "../base/BaseClientService"

/**
 * @summary A client service that is used to cache the requests, used to improve the performance of the application.
 * @description This class is used to cache the requests, used to improve the performance of the application.
 */
class RequestCachingClientService<T> extends BaseClientService {
    /**
     * @summary The cached items.
     * @description The cached items, it is a record of the key and the item.
     */
    private readonly CACHED_ITEMS: Record<string, IRequestCachingClientServiceItem<T>> = {}
    /**
     * @summary The cache options.
     * @description The cache options, it is a record of the key and the item.
     */
    private readonly CACHE_OPTIONS: Readonly<IRequestCachingClientServiceOptions>

    /**
     * @summary Cleans up the cache.
     * @description Cleans up the cache, it is used to remove the expired items and the items that are beyond the max size.
     */
    private cleanup(): void {
        const now: number = Date.now()
        const sortedEntries: [string, IRequestCachingClientServiceItem<T>][] = Object.entries(this.CACHED_ITEMS).sort(
            (a: [string, IRequestCachingClientServiceItem<T>], b: [string, IRequestCachingClientServiceItem<T>]) =>
                a[1].expiresAt - b[1].expiresAt,
        )

        for (const [key, item] of sortedEntries) {
            if (item.expiresAt < now || sortedEntries.length > this.CACHE_OPTIONS.maxSize) {
                delete this.CACHED_ITEMS[key]
                continue
            }

            break
        }
    }

    /**
     * @summary The constructor for the RequestCachingClientService.
     * @description Constructs a class that is used to cache the requests, used to improve the performance of the application.
     * @param cacheOptions - The cache options.
     */
    public constructor(cacheOptions: IRequestCachingClientServiceOptions) {
        super()
        this.CACHE_OPTIONS = {
            maxSize: Math.max(1, cacheOptions.maxSize),
            timeToLive: Math.max(1, cacheOptions.timeToLive),
        }
    }

    /**
     * @summary Gets an item from the cache.
     * @description Gets an item from the cache.
     * @param key - The key of the item to get.
     * @returns The item from the cache or null, if the item is not found or expired.
     */
    public get(key: string): T | null {
        const item: IRequestCachingClientServiceItem<T> | undefined = this.CACHED_ITEMS[key]
        if (item === undefined) {
            return null
        }

        if (item.expiresAt < Date.now()) {
            delete this.CACHED_ITEMS[key]
            return null
        }

        return item.item
    }

    /**
     * @summary Sets an item in the cache.
     * @description Sets an item in the cache.
     * @param key - The key of the item to set.
     * @param item - The item to set.
     */
    public set(key: string, item: T): void {
        this.CACHED_ITEMS[key] = {
            expiresAt: Date.now() + this.CACHE_OPTIONS.timeToLive,
            item,
        }

        this.cleanup()
    }

    /**
     * @summary Deletes an item from the cache.
     * @description Deletes an item from the cache.
     * @param key - The key of the item to delete.
     */
    public delete(key: string): void {
        delete this.CACHED_ITEMS[key]
    }
}

export { RequestCachingClientService }
