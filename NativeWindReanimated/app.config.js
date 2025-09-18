

import "dotenv/config";

export default {
    expo: {
      name: "native-wind-reanimated",
      slug: "native-wind-reanimated",
      version: "1.0.0",
      extra: {
        API_URL: process.env.API_URL,
      },
    },
  };
  