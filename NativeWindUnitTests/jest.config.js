module.exports = {
    preset: "jest-expo",
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?react-native|@react-native|expo|@expo|moti|react-native-reanimated|@react-navigation)"
    ],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  };
  