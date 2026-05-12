import type { IRequestCachingClientServiceOptions } from "@/humavery/libs/models/libs/services/client/request-caching/interfaces/IRequestCachingClientServiceOptions"

/**
 * @summary A base class for all request clients.
 * @description This class is used as a base class for all request clients.
 */
class BaseRequestClient {
    /**
     * @summary The constructor for the BaseRequestClient.
     * @description Constructs a class that is used as a base class for all request clients.
     */
    protected constructor() {}

    /**
     * @summary Default request cache tuning shared by subclasses.
     * @description Each subclass must instantiate its own `RequestCachingClientService` with these or custom options so caches stay isolated per client type.
     */
    protected static readonly DEFAULT_REQUEST_CACHE_OPTIONS: Readonly<IRequestCachingClientServiceOptions> = {
        timeToLive: 1000 * 60,
        maxSize: 100,
    }

    /**
     * @summary The base headers for all requests.
     * @description The base headers for all requests, it is a record of the key and the value.
     */
    protected static readonly BASE_HEADERS: HeadersInit = {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}

export { BaseRequestClient }
