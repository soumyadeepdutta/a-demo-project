const router = require("express").Router();
const data = require("../data");
/* GET home page. */
router.post("/details", function (req, res, next) {
  const record = data.find((details) => details.number == req.body.number);
  return res.json({ data: record });
});

module.exports = router;
