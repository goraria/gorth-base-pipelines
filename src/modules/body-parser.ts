import type { RequestHandler } from "express";
import bodyParser from "body-parser";

export const bodyParserConfig = (): RequestHandler[] => {
  return [
    bodyParser.json({ limit: "50mb" }),
    bodyParser.urlencoded({ extended: false, limit: "50mb" })
  ];

  // app.use(bodyParser.json())
  // app.use(
  //   bodyParser.urlencoded({
  //     extended: false,
  //   })
  // )
  // bodyParser({
  //   json: true,
  //   urlencoded: {
  //     extended: false,
  //   }
  // })
}