/**
 * @summary HTTP request method.
 * @description HTTP request method.
 */
const enum HttpRequestMethod {
    /**
     * @summary GET request method.
     * @description GET request method.
     */
    GET = "GET",
    /**
     * @summary POST request method.
     * @description POST request method.
     */
    POST = "POST",
    /**
     * @summary PUT request method.
     * @description PUT request method.
     */
    PUT = "PUT",
    /**
     * @summary DELETE request method.
     * @description DELETE request method.
     */
    DELETE = "DELETE",
    /**
     * @summary PATCH request method.
     * @description PATCH request method.
     */
    PATCH = "PATCH",
    /**
     * @summary OPTIONS request method.
     * @description OPTIONS request method.
     */
    OPTIONS = "OPTIONS",
    /**
     * @summary HEAD request method.
     * @description HEAD request method.
     */
    HEAD = "HEAD",
}

export { HttpRequestMethod }
