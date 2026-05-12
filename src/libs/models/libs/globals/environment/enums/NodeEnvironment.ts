/**
 * @summary Node environment.
 * @description Node environment.
 */
const enum NodeEnvironment {
    /**
     * @summary Development environment.
     * @description Development environment.
     */
    DEVELOPMENT = "development",
    /**
     * @summary Production environment.
     * @description Production environment.
     */
    PRODUCTION = "production",
    /**
     * @summary CI environment.
     * @description CI environment (used by GitHub Actions), this is a special environment that is used to validate the code quality and build the application.
     * @remarks Omit some of the parsing due to the capabilities of the CI environment.
     */
    CI = "ci",
}

export { NodeEnvironment }
