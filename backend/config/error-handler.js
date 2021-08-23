exports.handleError = (err, req, res, next) => {
  const message = err.reason
    ? err.reason.message
    : err.message
    ? err.message
    : "Something went wrong";
  console.error(err.stack);
  const status = err.status ? err.status : 500;
  res.status(status).json({ status: status, message: message });
};
