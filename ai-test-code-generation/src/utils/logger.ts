import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  format: format.combine(format.timestamp(), format.simple()),
  transports: [
    new transports.Console({ level: "info" }),
    new transports.File({
      dirname: "logs",
      filename: "tests.log",
      maxsize: 500000,
      maxFiles: 5,
      level: "debug",
    }),
  ],
});
