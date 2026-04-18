import { ResponseError } from "../error/response-error.js";
import { logger } from "../application/logging.js";

const errorMiddleware = (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    const status =
      typeof err.status === "number" && err.status >= 400 && err.status <= 599
        ? err.status
        : 400;
    return res.status(status).json({
      errors: err.message,
    });
  }

  logger.error(err);
  return res.status(500).json({
    errors: "Internal Server Error",
  });
};

export { errorMiddleware };
