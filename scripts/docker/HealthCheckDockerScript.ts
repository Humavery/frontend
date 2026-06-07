import { env } from "bun"
import { exit } from "process"

/**
 * @summary Health check script for Docker Compose.
 * @description This script is used to check if the application is running correctly.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HealthCheckDockerScript {
    /**
     * @summary Private constructor.
     * @description Prevents from instanization & inheritance.
     */
    private constructor() {}

    /**
     * @summary Static initializer.
     * @description Initializes the script.
     */
    static {
        void this.init()
    }

    /**
     * @summary Private getter for the application port.
     * @description Gets the application port from the environment variables.
     * @returns The application port.
     */
    private static get APP_PORT(): number {
        try {
            const value: string | undefined = env.APP_PORT
            return value === undefined ? 3000 : Number.parseInt(value, 10)
        } catch {
            return 3000
        }
    }

    /**
     * @summary Static initializer.
     * @description Initializes the script.
     */
    private static async init(): Promise<void> {
        try {
            const response: Response = await fetch(`http://localhost:${HealthCheckDockerScript.APP_PORT}`, {
                method: "GET",
            })

            exit(response.status === 200 ? 0 : 1)
        } catch {
            exit(1)
        }
    }
}
