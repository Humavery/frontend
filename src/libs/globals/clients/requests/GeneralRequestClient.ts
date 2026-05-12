import type { IRequestResponse } from "@/humavery/libs/models/libs/globals/clients/requests/general/interfaces/IRequestResponse"
import { RequestCachingClientService } from "@/humavery/libs/services/client/RequestCachingClientService"
import { BaseRequestClient } from "./base/BaseRequestClient"
import { HttpRequestMethod } from "@/humavery/libs/models/libs/globals/clients/requests/general/enums/HttpRequestMethod"

/**
 * @summary A client that is used to make requests to the server.
 * @description This class is used to make requests to the server.
 */
class GeneralRequestClient extends BaseRequestClient {
    /**
     * @summary The constructor for the GeneralRequestClient.
     * @description Constructs a class that is used to make requests to the server.
     */
    private constructor() {
        super()
    }

    /**
     * @summary The request caching service.
     * @description The request caching service, it is used to cache the responses.
     */
    protected static readonly requestCachingService: RequestCachingClientService<IRequestResponse<unknown, unknown>> =
        new RequestCachingClientService(BaseRequestClient.DEFAULT_REQUEST_CACHE_OPTIONS)

    /**
     * @summary Performs a request to the server.
     * @description Performs a request to the server.
     * @param method - The method of the request.
     * @param url - The URL of the resource to request.
     * @param headers - The headers to send with the request.
     * @param body - The body to send with the request.
     * @param cache - Whether to cache the response.
     * @returns The response from the server.
     */
    private static async performRequest<D, E>(
        method: HttpRequestMethod,
        url: string,
        headers: HeadersInit,
        body: BodyInit | null,
        cache: boolean,
    ): Promise<IRequestResponse<D, E>> {
        try {
            const response: Response = await fetch(url, {
                method,
                body,
                credentials: "omit",
                headers: {
                    ...this.BASE_HEADERS,
                    ...headers,
                },
            })

            let data: D | E | null = null

            const contentMime: string = response.headers.get("Content-Type")?.split(";")[0]?.trim().toLowerCase() ?? ""

            switch (contentMime) {
                case "application/json":
                    data = await response.json()
                    break
                case "application/xml":
                case "text/plain":
                    data = (await response.text()) as D | E
                    break
                case "application/pdf":
                    data = (await response.blob()) as D | E
                    break
                default:
                    data = (await response.text()) as D | E
                    break
            }

            const finalResponse: IRequestResponse<D, E> = response.ok
                ? {
                      success: true,
                      status: response.status,
                      headers: response.headers,
                      data: data as D,
                  }
                : {
                      success: false,
                      status: response.status,
                      headers: response.headers,
                      error: data as E,
                  }

            if (cache) {
                this.requestCachingService.set(url, finalResponse)
            }

            return finalResponse
        } catch (error: unknown) {
            return {
                success: false as const,
                status: 0,
                headers: new Headers(),
                error: error as E,
            }
        }
    }

    /**
     * @summary Gets a resource from the server.
     * @description Gets a resource from the server.
     * @param url - The URL of the resource to get.
     * @param headers - The headers to send with the request.
     * @param body - The body to send with the request.
     * @param cache - Whether to cache the response. It's `true` by default.
     * @returns The response from the server.
     */
    public static async get<D, E>(
        url: string,
        headers: HeadersInit = {},
        body: BodyInit | null = null,
        cache: boolean = false,
    ): Promise<IRequestResponse<D, E>> {
        return this.performRequest(HttpRequestMethod.GET, url, headers, body, cache)
    }

    /**
     * @summary Sends a POST request to the server.
     * @description Sends a POST request to the server.
     * @param url - The URL of the resource to post.
     * @param headers - The headers to send with the request.
     * @param body - The body to send with the request.
     * @param cache - Whether to cache the response. It's `false` by default.
     * @returns The response from the server.
     */
    public static async post<D, E>(
        url: string,
        headers: HeadersInit = {},
        body: BodyInit | null,
        cache: boolean = false,
    ): Promise<IRequestResponse<D, E>> {
        return this.performRequest(HttpRequestMethod.POST, url, headers, body, cache)
    }

    /**
     * @summary Sends a PUT request to the server.
     * @description Sends a PUT request to the server.
     * @param url - The URL of the resource to put.
     * @param headers - The headers to send with the request.
     * @param body - The body to send with the request.
     * @param cache - Whether to cache the response. It's `false` by default.
     * @returns The response from the server.
     */
    public static async put<D, E>(
        url: string,
        headers: HeadersInit = {},
        body: BodyInit | null,
        cache: boolean = false,
    ): Promise<IRequestResponse<D, E>> {
        return this.performRequest(HttpRequestMethod.PUT, url, headers, body, cache)
    }

    /**
     * @summary Sends a DELETE request to the server.
     * @description Sends a DELETE request to the server.
     * @param url - The URL of the resource to delete.
     * @param headers - The headers to send with the request.
     * @param cache - Whether to cache the response. It's `false` by default.
     * @returns The response from the server.
     */
    public static async delete<D, E>(
        url: string,
        headers: HeadersInit = {},
        cache: boolean = false,
    ): Promise<IRequestResponse<D, E>> {
        return this.performRequest(HttpRequestMethod.DELETE, url, headers, null, cache)
    }

    /**
     * @summary Sends a PATCH request to the server.
     * @description Sends a PATCH request to the server.
     * @param url - The URL of the resource to patch.
     * @param headers - The headers to send with the request.
     * @param body - The body to send with the request.
     * @param cache - Whether to cache the response. It's `false` by default.
     * @returns The response from the server.
     */
    public static async patch<D, E>(
        url: string,
        headers: HeadersInit = {},
        body: BodyInit | null,
        cache: boolean = false,
    ): Promise<IRequestResponse<D, E>> {
        return this.performRequest(HttpRequestMethod.PATCH, url, headers, body, cache)
    }
}

export { GeneralRequestClient }
