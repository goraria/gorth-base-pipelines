import { Request, Response } from "express";
import morgan from "morgan";
import pc from "picocolors"

export const morganMiddleware = (req: Request, res: Response) => {
  morgan.token("response-time-ms", (req: Request, res: Response) => {
    const time = (morgan as any)["response-time"](req, res)
    if (!time) return "-"

    const num = parseFloat(time)
    return num >= 2000 ? `${(num / 1000).toFixed(1)}s` : `${Math.round(num)}ms`
  })
  morgan.token("status-color", (req: Request, res: Response) => {
    const s = res.statusCode
    switch (true) {
      case s >= 500:
        return pc.red(s)
      case s >= 400:
        return pc.yellow(s)
      case s >= 300:
        return pc.cyan(s)
      default:
        return pc.green(s)
    }
  })
  // app.use(morgan(` :method :url :status-color in :response-time-ms ${`(HTTP/:http-version, [:date[clf]], content-length: :res[content-length])`}`));
  return morgan(` :method :url :status-color in :response-time-ms ${pc.dim(`(HTTP/:http-version, [:date[clf]], content-length: :res[content-length])`)}`)
}