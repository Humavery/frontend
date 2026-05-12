import type { IRequestResponse } from "@/humavery/libs/models/libs/globals/clients/requests/general/interfaces/IRequestResponse"
import { RequestCachingClientService } from "@/humavery/libs/services/client/RequestCachingClientService"

/**
 * @summary A base class for all request clients.
 * @description This class is used as a base class for all request clients.
 */
class BaseRequestClient {
    /**
     * @summary The constructor for the BaseRequestClient.
     * @description Constructs a class that is used as a base class for all request clients.
     */
    private constructor() {}

    /**
     * @summary The request caching service.
     * @description The request caching service, it is used to cache the responses of the requests.
     */
    protected static readonly requestCachingService: RequestCachingClientService<IRequestResponse<unknown, unknown>> =
        new RequestCachingClientService({
            timeToLive: 1000 * 60,
            maxSize: 100,
        })

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
