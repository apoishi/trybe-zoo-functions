const data = require('../data/zoo_data');

const { species } = data;

const countBySpecies = (animal) => species
  .find((element) => element.name === (animal.specie)).residents;

const countByGender = (animal) => countBySpecies(animal)
  .filter((element) => element.sex === (animal.sex));

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return animal.sex ? countByGender(animal).length : countBySpecies(animal).length;
}
// console.log(countAnimals({ specie: 'giraffes' }));

module.exports = countAnimals;
