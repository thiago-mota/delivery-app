module.exports = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({
    // error: {
    //   message: 'Internal Server Error',
    // },
    err,
  });
};
