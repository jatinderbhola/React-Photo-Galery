
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
  }
};
