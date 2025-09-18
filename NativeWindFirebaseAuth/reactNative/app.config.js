

import "dotenv/config";

export default {
    expo: {
      name: "firebase-auth",
      slug: "firebase-auth",
      version: "1.0.0",
      extra: {
        API_URL: process.env.API_URL,
      },
    },
  };
  