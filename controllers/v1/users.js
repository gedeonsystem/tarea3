const router = require("express").Router();
const { query, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const basicAuth = require("../../middlewares/basicAuth");
router.use(basicAuth);
router.get("/token", (req, res) => {
  jwt.sign(
    { user: req.user },
    "ricardolaica2025",
    { expiresIn: "8h" },
    (err, token) => {
      if (err) {
        return res
          .status(500)
          .json({ code: "ER", message: "Error al generar el token!" });
      }
      return res.json({
        code: "OK",
        message: "Token generado!",
        data: { token },
      });
    }
  );
});

module.exports = router;
