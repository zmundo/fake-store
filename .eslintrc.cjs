module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["warn", "never"],
        "quotes": ["warn", "single"]
    },
    "parser": "@babel/eslint-parser",
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
