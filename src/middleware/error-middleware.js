import { ResponseError } from "../error/response-error.js";

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(400)
      .json({
        errors: err.status,
      })
      .end();
  } else {
    res
      .status(400)
      .json({
        errors: err.status,
      })
      .end();
  }
};

export { errorMiddleware };
