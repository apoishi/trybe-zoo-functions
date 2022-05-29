const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((element) => element.id === id).responsibleFor[0];
  const animal = species.find((element) => element.id === employee).residents;
  const oldestAnimal = animal.reduce((oldest, specie) =>
    (oldest > specie.age ? oldest : specie.age), 0);
  return Object.values(animal.find((specie) => specie.age === oldestAnimal));
}

// console.log(getOldestFromFirstSpecies('01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getOldestFromFirstSpecies;
