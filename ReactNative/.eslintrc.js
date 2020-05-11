module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb'],
  rules: {
    "max-len": "off",
    "no-plusplus": "off",
    "arrow-body-style": "off",
    "prettier/prettier": "off",
    "react/jsx-fragments": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
  }
};
