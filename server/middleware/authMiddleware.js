const jwt = require("jsonwebtoken");

const secret = process.env.JWT_KEY;

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ");
    console.log(token);
    if (token) {
      const decoded = jwt.verify(token, secret);
      console.log(decoded);
      req.body._id = decoded?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authMiddleware;
