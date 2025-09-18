

import "dotenv/config";

export default {
    expo: {
      name: "reactNativeFullstackApp",
      slug: "reactnativefullstackapp",
      version: "1.0.0",
      extra: {
        API_URL: process.env.API_URL,
      },
    },
  };
  