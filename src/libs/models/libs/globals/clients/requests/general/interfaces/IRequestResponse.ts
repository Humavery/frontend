/**
 * @summary Interface for the response of a request.
 * @description This interface is used to define the response of a request.
 * @template D - The type of the data.
 * @template E - The type of the error.
 */
type IRequestResponse<D, E> = {
    /**
     * @summary The status of the response.
     * @description The status of the response, it is the HTTP status code.
     */
    readonly status: number
    /**
     * @summary The headers of the response.
     * @description The headers of the response, it is a record of the key and the value.
     */
    readonly headers: Headers
} & (
    | {
          /**
           * @summary Whether the request was successful.
           * @description Whether the request was successful, it is true if the request was successful.
           */
          readonly success: true
          /**
           * @summary The data of the response.
           * @description The data of the response, it is the data of the response, defined by the template parameter.
           * @remarks It's only present if the request was successful.
           */
          readonly data: D
      }
    | {
          /**
           * @summary Whether the request was successful.
           * @description Whether the request was successful, it is false if the request was not successful.
           */
          readonly success: false
          /**
           * @summary The error of the response.
           * @description The error of the response, it is the error of the response, defined by the template parameter.
           * @remarks It's only present if the request was not successful.
           */
          readonly error: E
      }
)

export type { IRequestResponse }
