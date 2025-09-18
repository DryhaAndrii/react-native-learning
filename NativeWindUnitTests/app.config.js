

import "dotenv/config";

export default {
    expo: {
      name: "empty-project",
      slug: "empty-project",
      version: "1.0.0",
      extra: {
        API_URL: process.env.API_URL,
      },
    },
  };
  