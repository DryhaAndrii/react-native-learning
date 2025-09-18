const express = require("express");
const authRouter = require("./routes/auth");
const protectedRouter = require("./routes/protected");

const app = express();
const PORT = 3000;

const cors = require("cors");

const allowedOrigins = ["http://localhost:8081", "https://your-app.com"];

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

app.use(express.json());

app.use("/auth", authRouter);
app.use("/protected", protectedRouter);

app.listen(PORT, () => {
  console.log(`Server launched on http://localhost:${PORT}`);
});
