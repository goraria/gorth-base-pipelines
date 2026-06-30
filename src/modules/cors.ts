import cors, { CorsOptions } from "cors";

export const corsConfig = (options?: CorsOptions) => {
  const corsOptions: CorsOptions = {
    ...options,
    // origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    exposedHeaders: ["Set-Cookie", "Authorization"],
    maxAge: 86400,
    optionsSuccessStatus: 200,
  }
  return cors(corsOptions)
}