/**
 * @summary The error for environment variables.
 * @description This error is thrown when an environment variable is missing or invalid.
 */
class EnvironmentVariablesError extends Error {
    /**
     * @summary The name of the environment variable.
     * @description The name of the environment variable that caused the error.
     * @readonly
     */
    public readonly variableName: string
    /**
     * @summary The value of the environment variable.
     * @description The value of the environment variable that caused the error.
     * @readonly
     */
    public readonly variableValue: string | undefined

    /**
     * @summary The constructor for the EnvironmentVariablesError.
     * @description Constructs a class that contains information about the environment variable that caused the error.
     * @param message - The message of the error.
     * @param variableName - The name of the environment variable that caused the error.
     * @param variableValue - The value of the environment variable that caused the error.
     */
    public constructor(message: string, variableName: string, variableValue: string | undefined) {
        super(message)
        this.name = "EnvironmentVariablesError"
        this.variableName = variableName
        this.variableValue = variableValue
        Object.setPrototypeOf(this, EnvironmentVariablesError.prototype)
    }

    /**
     * @summary The method to create an error from a missing variable.
     * @description This method creates an error from a missing variable.
     * @param variableName - The name of the environment variable that is missing.
     * @returns The error from the missing variable.
     */
    public static fromMissingVariable(variableName: string): EnvironmentVariablesError {
        return new this(`The environment variable "${variableName}" is missing.`, variableName, undefined)
    }

    /**
     * @summary The method to create an error from an invalid URL value.
     * @description This method creates an error from an invalid URL value.
     * @param variableName - The name of the environment variable that is invalid.
     * @param variableValue - The value of the environment variable that is invalid.
     * @returns The error from the invalid URL value.
     */
    public static fromInvalidURLValue(variableName: string, variableValue: string): EnvironmentVariablesError {
        return new this(`The environment variable "${variableName}" is not a valid URL.`, variableName, variableValue)
    }
}

export { EnvironmentVariablesError }
