import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default {
    rootDir: ".",
    bail: true,
    clearMocks: true,
    coverageProvider: "v8",
    preset: "ts-jest",
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/src/",
    }),
    testMatch: ["**/*.spec.ts"],
};
