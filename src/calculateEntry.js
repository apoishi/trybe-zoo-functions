const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;

  return ({
    adult,
    child,
    senior,
  });
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) {
    return 0;
  }

  const countEntrantsByAge = countEntrants(entrants);
  return Object.keys(countEntrantsByAge)
    .map((element) => (countEntrantsByAge[element] * prices[element]))
    .reduce((acc, curr) => acc + curr);
}

module.exports = { calculateEntry, countEntrants };
