import { EnvironmentVariablesError } from "@/humavery/libs/models/builders/process-errors/environment/EnvironmentVariablesError"

/**
 * @summary The manager for the environment variables.
 * @description This manager is used to get the data from the environment variables.
 */
class EnvironmentVariablesDataManager {
    /**
     * @summary The constructor for the EnvironmentVariablesDataManager.
     * @description Constructs a class that contains information about the environment variables.
     */
    private constructor() {}

    /**
     * @summary Gets the URL from the environment variables.
     * @param variableName The name of the environment variable.
     * @param value The value of the environment variable.
     * @param required Whether the environment variable is required.
     * @returns The URL from the environment variables or null, if variable is missing and it's not required.
     */
    public static getURL<T extends boolean>(
        variableName: string,
        value: string | undefined,
        required: T,
    ): T extends true ? URL : URL | undefined {
        if (value === undefined) {
            if (required) throw EnvironmentVariablesError.fromMissingVariable(variableName)
            return undefined as T extends true ? URL : URL | undefined
        }

        try {
            return new URL(value) as T extends true ? URL : URL | undefined
        } catch {
            throw EnvironmentVariablesError.fromInvalidURLValue(variableName, value)
        }
    }
}

export { EnvironmentVariablesDataManager }
