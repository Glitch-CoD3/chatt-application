//404 not found error handler

import createHttpError from "http-errors";

export const notFoundHandler = (req, res, next)=>{
    next(
        createHttpError(404, "Content not found!")
    )
}


//default error handler
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;

  const errorResponse =
    process.env.NODE_ENV === "development"
      ? err
      : { message: err.message };

  res.status(statusCode);

  if (req.accepts("html")) {
    // HTML response
    res.render("notFoundError", {
      title: "Error Page",
      error: errorResponse,
      statusCode: statusCode
    });
  } else {
    // JSON response
    res
    .status(statusCode)
    .json(errorResponse);
  }
};
