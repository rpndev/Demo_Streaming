const express = require("express");
const series_json = require("../feed/sample.json");
const router = express.Router();
function compareStrings(a, b) {
  // Assuming you want case-insensitive comparison
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a < b ? -1 : a > b ? 1 : 0;
}
router.route("/").get((req, res) => {
  const series = series_json.entries.filter(function(serie) {
    if (serie.programType === "series" && serie.releaseYear >= 2010)
      return serie;
  });
  series.sort(function(a, b) {
    return compareStrings(b.title, a.title);
  });
  var limit = 21;
  res.send(series.slice(0, limit));
});

module.exports = router;
