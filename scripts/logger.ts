import { default as pLog } from "pino";
import { default as pretty } from "pino-pretty";

export const logger = pLog(
  {
    level: "trace",
  },
  pretty({
    sync: true,
    colorize: true,
    levelFirst: true,
    translateTime: true,
    ignore: "pid,hostname",
    singleLine: true,
  })
);
