const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.find((element) => element.name === animal)
    .residents.every((element) => element.age >= age);
}
// console.log(getAnimalsOlderThan('bears', 4))

module.exports = getAnimalsOlderThan;
