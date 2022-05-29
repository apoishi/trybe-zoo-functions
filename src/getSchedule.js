const data = require('../data/zoo_data');

const { species, hours } = data;
// Essa função quando chamada exibe o objeto Monday com os dados do dia.
const getMonday = () => {
  const obj = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return obj;
};

// Essa função vai exibir os dias disponíveis para visitas, tem como parâmetro
// schedule e o scheduleTarget. Ela será utilizada no retorno da função
//  getSchedule.
const getDay = (schedule, scheduleTarget) => {
  const dayObj = {};
  dayObj[scheduleTarget] = schedule[scheduleTarget];
  return dayObj;
};
// Essa função exibe a disponibilidade dos dias da semana do animal.
const getAnimal = (animal) => species
  .find((specie) => specie.name === animal).availability;

const arrayOfSpecies = species.map((specie) => specie.name);
const arrayOfDays = Object.keys(hours);

// Exibe um objeto com todos os dias da semana com toda programação de dias e
// animais disponíveis.
const schedule = arrayOfDays.reduce((acc, curr) => {
  acc[curr] = {
    officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
    exhibition: species
      .filter((specie) => specie.availability.includes(curr))
      .map((specie) => specie.name),
  };
  return acc;
}, {});

function getSchedule(scheduleTarget) {
// Se o parâmetro for Monday, retorna a função getMonday.
  if (scheduleTarget === 'Monday') return getMonday();
  // Se no arrayOfDays incluir o dia passado como parâmetro, retorna a função getDay().
  if (arrayOfDays.includes(scheduleTarget)) return getDay(schedule, scheduleTarget);
  // Se no arrayOfSpecies incluir o animal passado como parâmetro, retorna a função
  // getAnimal().
  if (arrayOfSpecies.includes(scheduleTarget)) return getAnimal(scheduleTarget);
  // Se nenhum parâmetro for passado retorna o objeto com todos os dias da semana
  // e animais disponíveis. O assign, vai enviar para schedule(target) a função
  // getMonday() (source), para que todas as opções sejam retornadas.
  return Object.assign(schedule, getMonday());
}

module.exports = getSchedule;
