import type { RequestHandler } from "express";
import cookieParser, { CookieParseOptions } from "cookie-parser";
import session from "express-session";

export const cookieParserConfig = (): RequestHandler => {
  const cookieParserOptions: CookieParseOptions = {

  };
  return cookieParser();
};

// export const sessionConfig = (secret?: string, secure?: boolean) => {
//   const sessionOptions = {
//     secret: process.env.EXPRESS_JWT_SECRET!,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: process.env.EXPRESS_ENV === "production",
//       httpOnly: true,
//       maxAge: 30 * 60 * 60 * 24,
//       sameSite: "lax",
//       // expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // Thời gian hết hạn cookie
//       // domain: process.env.EXPRESS_CLIENT_URL!, // Tùy chọn: tên miền cookie
//       // secure: true, // Chỉ gửi cookie qua HTTPS
//       // sameSite: 'Lax' // Hoặc 'Strict'. 'None' cần secure: true
//       // path: '/', // Phạm vi cookie (thường là gốc)
//     },
//   }
//
//   return session(sessionOptions)
// }