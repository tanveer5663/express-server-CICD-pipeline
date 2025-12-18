import express from "express";
import cluster from "cluster";
import winston from "winston";
import morgan from "morgan";
import os from "os";
setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));
process.nextTick(() => console.log("nextTick"));

// const express = require('express');

// const app = express();

// const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({ filename: "error.log", level: "error" }),
//     new winston.transports.File({ filename: "combined.log" }),
//   ],
// });

// app.use(
//   morgan("combined", {
//     stream: {
//       write: (message) => logger.info(message.trim()),
//     },
//   })
// );

// app.get("/", (req, res) => {
//   logger.info("Home route accessed");
//   res.send("Hello Logging!");
// });
// app.listen(3000, () => console.log("Server running"));

// ✅ Non-blocking
