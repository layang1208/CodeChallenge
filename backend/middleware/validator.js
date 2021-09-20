module.exports = function validate(schema) {
  return (req, res, next) => {
    const options = {
      // to include all errors
      abortEarly: false,
    };
    const { error } = schema.validate(req.body, options);
    if (error) return res.status(400).send(error.details[0].message);
    next();
  };
};
