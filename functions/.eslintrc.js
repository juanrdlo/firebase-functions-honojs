module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": 'off',
    "semi": 'off',
    "linebreak-style": 'off',
    "object-curly-spacing": 'off',
    "comma-dangle": 'off',
    "no-multiple-empty-lines": 'off',
    "@typescript-eslint/no-unused-vars": 'off',
    "max-len": 'off',
    "import/no-unresolved": 'off',
    "@typescript-eslint/no-explicit-any": 'off',
    "indent": 'off',
  },
};
