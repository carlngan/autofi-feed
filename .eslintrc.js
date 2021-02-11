module.exports = {
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: ["react", "prettier", "import"],
  rules: {
    "prettier/prettier": ["error", { never: true }],
    "no-console": ["off"],
    "comma-dangle": ["error", "never"],
    semi: ["error", "never"],
    indent: 0,
    "max-len": 0,
    "no-undef": 1,
    "import/first": 2,
    "react/prop-types": 0,
    "no-else-return": 0,
    "react/no-string-refs": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-render-return-value": 0
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module"
  },
  env: {
    node: true,
    es2020: true
  },
  settings: {
    react: {
      version: "16.12.0"
    }
  }
}
