require("dotenv").config();

const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const api = require("./routes/api");

const app = express();
const PORT = 3000;

const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS?.split(",") || [];

console.log(`Allowed origins: ${allowedOrigins}`);

app.use((req, res, next) => {
  console.log(`[INCOMING REQUEST] ${req.method} from ${req.headers.origin}`);
  next();
});

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`[CORS BLOCKED] Origin not allowed: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const serviceAccount = require("./firebase-admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use("/", api);

app.listen(PORT, () => {
  console.log(`🚀 Server launched on http://localhost:${PORT}`);
});
