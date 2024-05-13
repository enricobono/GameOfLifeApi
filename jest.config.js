module.exports = {
  moduleFileExtensions: ["ts", "js"],
  setupFiles: [],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  testMatch: ["**/tests/**/*.test.(ts|js)"],
  testEnvironment: "node",
};
