const express = require("express");
const router = express.Router();
const movies_json = require("../feed/sample.json");
function compareStrings(a, b) {
  // Assuming you want case-insensitive comparison
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a < b ? -1 : a > b ? 1 : 0;
}
router.route("/").get((req, res) => {
  var limit = 21;
  const movies = movies_json.entries.filter(function(movie) {
    if (movie.programType === "movie" && movie.releaseYear >= 2010)
      return movie;
  });

  movies.sort((a, b) => compareStrings(a.title, b.title));
  res.send(movies.slice(0, limit));
});

module.exports = router;
