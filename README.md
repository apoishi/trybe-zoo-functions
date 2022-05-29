## About the project

This repository contains the zoo functions project developed while studying at Trybe. This projects put into practice the skills with `ES6`, `Higher Order Functions` and tests.

The city hall gave you an important mission: organize the zoo's information! 🐘

You will be responsible for developing functions that search information about the zoo animals such as: species and location. In addition, you will also get data about the people who collaborate with the maintenance and care of the zoo. 🧑‍🌾

It does not stop there! 🤩

You've already learned about the importance of having a test-driven mindset, haven't you? And you also already know how the implementation of tests contributes to the writing of more reliable code with good performance.

The sequence of requirements for this project has been arranged in such a way as to provide you with the experience of understanding in practice how test-driven development helps ensure quality code. For this, you will implement tests for existing functions, understanding the use cases of your application and ensuring that it is working correctly! 🚀

## Mandatory requirements

### 1. Implement the `getSpeciesByIds` function

<details>
  <summary>
  Fetch the species of animals through an <code>id</code> and return an array containing all animals of that species.
  </summary> <br />

- Make the `getSpeciesByIds` function receive several parameters;

- Return an empty array if the function does not receive an `id`;

- Return the following information from the `data` file:

  - If the function receives only one `id`, return the species of the animal referring to this `id`;

  - If the function receives several `ids`, return all species referring to these `ids`.

**What will be tested:**

- If no parameters are received, it is necessary to return an empty array;

- When receiving as a parameter a single `id`, returns an array with the species referring to this `id`;

- When receiving more than one `id`, returns an array with the species referring to the `ids`.

</details>


### 2. Implement the `getAnimalsOlderThan` function

<details>
  <summary>
  When receiving a species and an age as a parameter, return if all the animals of that species have this age or are older.
  </summary> <br />

- Check that all animals of the species passed as a parameter have the minimum age:
  - Animals must be this age or older.

- Return a boolean value.

**What will be tested:**

- When passing the name of a species and an age, it tests if all the animals of this species have the specified minimum age.

</details>


### 3. Implement the `getEmployeeByName` function

<details>
  <summary>
    Search for employees by their first or last name
  </summary> <br />

- Return an empty object if the function does not receive parameters;

- Return the information of the employee if the parameter is equal to the name **or** equal to the last name in the following format:

```javascript
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
    responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
  }
```

**What will be tested:**

- Without parameters, it must return an empty object;

- When the first name of the employee is informed, the object of this employee must be returned;

- When the last name of the employee is informed, the object of this employee must be returned;


</details>


### 4. Implement the `getRelatedEmployees` function

<details>
  <summary>
    Check if a person is a manager and which people they manage.
  </summary> <br />

Considering the good practice of breaking the code into smaller parts, the file will have two functions:

1. `isManager` which will be responsible for checking if the person is a manager:
    - Return `true` if the `id` passed is a manager;
    - Return `false` if the `id` passed is not a manager.

2. `getRelatedEmployees` which returns the people managed by the manager:
      - Use the `isManager` function to check if the person is a manager or not and do the following checks:

        - If the person is a manager, return an array containing the first and last names of the people managed by this person.

        Output example:

        ```javascript

        [ 'Burl Bethea', 'Hello Orloff', 'Emery Elser' ];

        ```

        - If the person is not a manager, trigger an error with the message: **O id inserido não é de uma pessoa colaboradora gerente!**.

        To throw the error, you will use the **Error** constructor function from the JavaScript standard library.

        Example:

        ```javascript

        throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

        ```

  **What will be tested:**

  - Returns `true` if the `id` passed is a manager;

  - Returns `false` if the `id` passed is not a manager;

  - If the `id` passed is the manager, returns an array containing the name and surname of the people he is responsible for;

  - If the `id` passed is **not** the manager , it triggers an error with the message: `'O id inserido não é de uma pessoa colaboradora gerente!'`.
</details>


### 5. Implement the `countAnimals` function

<details>
  <summary>
    Count the number of animal species residing in the zoo
  </summary> <br />

The `countAnimals` function is responsible for counting the number of animals residing in the zoo.

- Return the number of resident animals per species, if the function does not receive a parameter. The return must be an object whose name of each species is the key and the total number of animals (residents) of that species is the value. For example:

```javascript
  {
    lions: 4,
    // [...]
  }
```

- Return the amount of animals residing in the zoo of the passed species by parameter. For example:

  - when receiving the argument `{ specie: 'penguins' }`, it returns only the amount (number) of penguins residing in the zoo;

  - passing the argument `{ specie: 'giraffes', sex: 'female' }`, returns only the amount (number) of female giraffes residing in the zoo.

**What will be tested:**

- Without parameters, returns all species and the number of residents of each one;

- Taking as a parameter an object with the key `specie`, it returns the number of animals of that species;

- Taking as a parameter an object with the key `specie` and `sex`, it returns the number of animals of that species, in the selected sex.

</details>


### 6. Get at least 80% test coverage in the `handlerElephants` function

<details>
  <summary>
    Implement tests of the <code>handlerElephants</code> function to get at least 80% coverage
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument | Information |
| --------- | ---------- |
| `count` | returns the amount of elephants |
| `names` | returns an array listing the names of all elephants |
| `averageAge` | returns the average age of elephants |
| `location` | returns the location of elephants inside the Zoo |
| `popularity` | the popularity of elephants returns |
| `availability` | returns an array with the number of days when it is possible to visit the elephants |

> **Looking at the tip 👀:** Before starting to write the tests, read the `handlerElephants` function and try to understand it line by line

- Implement the tests in the files in the `test` folder that is at the root of the project;

- The `handlerElephants` function is already implemented, it is only necessary to create the tests;

- The function is case sensitive;

- Use the `npm test handlerElephants` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage.

**Cover will only check the highlighted features and not the entire application!**

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test whatever you think is necessary as long as the feature coverage reaches at least 80%

- For the `count` argument must return the integer `4`;

- For the `names` argument it must return an array of names which has the name `Jefferson`;

- For the `averageAge` argument it should return a number close to `10.5`;

</details>

</details>


### 7. Get at least 90% test coverage in the `handlerElephants` function

<details>
  <summary>
    Implement tests of the <code>handlerElephants</code> function to get at least 90% coverage
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument | Information |
| --------- | ---------- |
| `count` | returns the amount of elephants |
| `names` | returns an array listing the names of all elephants |
| `averageAge` | returns the average age of elephants |
| `location` | returns the location of elephants inside the Zoo |
| `popularity` | the popularity of elephants returns |
| `availability` | returns an array with the number of days when it is possible to visit the elephants |

- The function is case sensitive;

- Use the `npm test handlerElephants` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage.

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are suggestions only, feel free to test whatever you feel is necessary as long as the feature coverage reaches at least 90%.

- For the `count` argument must return the integer `4`;

- For the `names` argument it must return an array of names which has the name `Jefferson`;

- For the `averageAge` argument it should return a number close to `10.5`;

- For the `location` argument it must return the string `NW`;

- The `popularity` argument must return a number equal to or greater than 5;

- For the `availability` argument it must return an array of days of the week that does not contain `Monday`;

- Not passing arguments the function must return `undefined`;

</details>

</details>


### 8. Implement the `calculateEntry` function

<details>
  <summary>
    Calculate the <strong>total</strong> value of the zoo's visitor entry
  </summary> <br />

The value of zoo tickets is calculated from the age group, where:

  - `child`: are people **under** 18 years old;

  - `adult`: people aged **greater than or equal** to 18 years old **and less** than 50 years old;

  - `senior`: are people aged **greater than or equal to** 50 years old.

Considering the good practice of breaking the code into smaller parts, the file will have two functions, called `countEntrants` and `calculateEntry`.

Both functions receive an array in the following format:

```javascript
const entrants = [
{ name: 'Lara Carvalho', age: 5 },
{ name: 'Frederico Moreira', age: 5 },
{ name: 'Pedro Henrique Carvalho', age: 5 },
{ name: 'Maria Costa', age: 18 },
{ name: 'Núbia Souza', age: 18 },
{ name: 'Carlos Nogueira', age: 50 },
];
```

1. `countEntrants` will be responsible for calculating the number of visitors by age group:

  It takes an array and should return an **object**. For that:

  - Perform the sum of the number of visitors by age group;

  - Return an object in a format like this: `{ child: 3, adult: 2, senior: 1 }`.

2. `calculateEntry` will be responsible for summing the entry value of people in the zoo:

  It takes an array and should return the **total** sum of the ticket values. For that:

  - Return `0` if no parameter is passed or is an empty array;

  - Use the `countEntrants` function to have the total number of people per age group;

  - Perform the sum of the ticket values ​​by age group. Your return should look something like this: `187.94`.

> **Keep an eye on the tip 👀:** The amount to be charged for the age range is also included in the data file.

**Example using the `calculateEntry` function:**

```javascript
calculateEntry(entrants);
```

**Exit:**

```javascript
187.94
```

**What will be tested:**

In the `countEntrants` function:

  - When receiving an array of visitors, returns an object with the count.

In the `calculateEntry` function:

  - Returns 0 if no arguments are passed;

  - Returns 0 if an empty object is passed;

  - When receiving an array of people with 3 children, 2 adults and 1 older person, it returns the correct value;

  - When receiving an array with 1 adult person returns the correct value;

  - When receiving an array with 1 older person returns the correct value;

  - When receiving an array with 1 child returns the correct value;

  - When receiving an array with 1 child and 1 older person returns the correct value.

</details>

</details>


### 9. Implement the `getSchedule` function

<details>
  <summary>
    Create a schedule with available visiting times for each animal species
  </summary> <br />

Animal schedule information should be made available in a query to people visiting the zoo, who may want access to the schedule for a week, a day or a specific animal.

- Return an array with the days of the week when an animal is available for visitation if the function parameter is an animal. For example: `[ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]`;

- Return all available times for each day of the week if the function:

  - do not receive parameter;

  - the parameter passed to the function is not an animal or a day;

  For that:

  - Create an object and add every day of the week as a key;

  - The values ​​of each day of the week must be an object, having the keys `officeHour` and `exhibition`:

    - `officeHour` must have the text with the time that the zoo opens and closes on that day of the week;

    - `exhibition` must have an array with the name of all the animals available for visitation on that day of the week.

<details>
  <summary>
    The return should look like this:
  </summary> <br />

  ```javascript
  {
    Tuesday: { // Day of the week
      officeHour: 'Open from 8am until 6pm', // n
      exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
    },
    Wednesday: {
      officeHour: 'Open from 8am until 6pm',
      exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
    },
    // [...]
  }
  ```

</details>

- Return the animals available on the day, if the function parameter is only one day of the week;

> **Keep an eye on the tip 👀:** Break the problem down into smaller roles so it's easier to manage the responsibility of each one.

**What will be tested:**

- If the name of an animal is passed, it must return an array with the days it will be on display;

- Without parameters, returns the times for each day and which animals will be available;

- With parameters that are neither an animal nor a day, returns the times for each day and which animals will be available;

- If a single day is passed, returns the times for that day and which animals will be available.


</details>

</details>

### 10. Implement the `getOldestFromFirstSpecies` function

<details>
  <summary>
    Find the oldest animal of a species that is managed by a collaborating person
  </summary> <br />

The function receives an `id` parameter referring to the collaborating person and from that `id`:

- Find the collaborating person who has the `id` passed by parameter;

- Find the **first** animal species that the collaborating person is responsible for;

- Find the oldest animal of that species;

- Return an array with the information of the oldest animal of that species.

**What will be tested:**

- Passing the id of a collaborating person, it finds the first species of animal managed by that person, and returns an array with the name, sex and age of the oldest animal of that species.

</details>

</details>

### 11. Get at least 85% test coverage in the `getOpeningHours` function

<details>
  <summary>
    Implement <code>getOpeningHours</code> function tests to get at least 85% coverage
  </summary> <br />

This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

> **Looking at the tip 👀:** Before starting to write the tests, read the `getOpeningHours` function and try to understand it line by line.

- Implement the tests in the files in the `test` folder that is at the root of the project;

- The `getOpeningHours` function is already implemented, it is only necessary to create the tests;

- Use the `npm test getOpeningHours` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage;

- The name of the day of the week passed as an argument must be in English;

- The time must have the following formatting `'XX:XX-XM'`;

- The hours will be validated in the `'AM'` and `'PM'` nomenclature;

- The function is not case sensitive;

**Cover will only check the highlighted features and not the entire application!**

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test whatever you think is necessary as long as the feature coverage reaches at least 85%.

- Test not passing arguments. It should return the object:

```javascript
{
Tuesday: { open: 8, close: 6 },
Wednesday: { open: 8, close: 6 },
Thursday: { open: 10, close: 8 },
Friday: { open: 10, close: 8 },
Saturday: { open: 8, close: 10 },
Sunday: { open: 8, close: 8 },
Monday: { open: 0, close: 0 },
}
```

- For the arguments `Monday` and `09:00-AM` must return the string `'The zoo is closed'` (Since the Zoo is always closed on Monday);

- For the arguments `Tuesday` and `09:00-AM` must return the string `'The zoo is open'`;

- For the arguments `Wednesday` and `09:00-PM` must return the string `'The zoo is closed'`;

</details>

</details>


### 12. Get at least 95% test coverage in the `getOpeningHours` function

<details>
  <summary>
    Implement <code>getOpeningHours</code> function tests to get 95% coverage
  </summary> <br />

  This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

- Use the `npm test getOpeningHours` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage;

- The name of the day of the week passed as an argument must be in English;

- The time must have the following formatting `'XX:XX-XM'`;

- The hours will be validated in the `'AM'` and `'PM'` nomenclature;

- The function is not case sensitive.

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test whatever you think is necessary as long as the feature coverage reaches at least 95%.

- Test not passing arguments. It should return the object:

```javascript
{
Tuesday: { open: 8, close: 6 },
Wednesday: { open: 8, close: 6 },
Thursday: { open: 10, close: 8 },
Friday: { open: 10, close: 8 },
Saturday: { open: 8, close: 10 },
Sunday: { open: 8, close: 8 },
Monday: { open: 0, close: 0 },
}
```

- For the arguments `Monday` and `09:00-AM` must return the string `'The zoo is closed'` (Since the Zoo is always closed on Monday);

- For the arguments `Tuesday` and `09:00-AM` must return the string `'The zoo is open'`;

- For the arguments `Wednesday` and `09:00-PM` must return the string `'The zoo is closed'`;

- For the arguments `Thu` and `09:00-AM` should throw an exception with the message: `'The day must be valid. Example: Monday'`

- For the arguments `Friday` and `09:00-ZM` you should throw an exception with the message: `'The abbreviation must be \'AM\' or \'PM\''`;

- For the arguments `Saturday` and `C9:00-AM` should throw an exception with the message: `'The hour should represent a number'`;

- For the `Sunday` and `09:c0-AM` arguments should throw an exception with the message: `'The minutes should represent a number'`;

</details>

</details>


## Bonus requirements

### 13. Get 100% test coverage in the `handlerElephants` function

<details>
  <summary>
    Implement <code>handlerElephants</code> function tests to get 100% coverage
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument | Information |
| --------- | ---------- |
| `count` | returns the amount of elephants |
| `names` | returns an array listing the names of all elephants |
| `averageAge` | returns the average age of elephants |
| `location` | returns the location of elephants inside the Zoo |
| `popularity` | the popularity of elephants returns |
| `availability` | returns an array with the number of days when it is possible to visit the elephants |

- The function is case sensitive;

- Use the `npm test handlerElephants` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage.

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test whatever you feel necessary as long as the function coverage reaches 100%.

- For the `count` argument must return the integer `4`;

- For the `names` argument it must return an array of names which has the name `Jefferson`;

- For the `averageAge` argument it should return a number close to `10.5`;

- For the `location` argument it must return the string `NW`;

- The `popularity` argument must return a number equal to or greater than 5;

- For the `availability` argument it must return an array of days of the week that does not contain `Monday`;

- Not passing arguments the function must return `undefined`;

- Passing an empty object as an argument (`{}`) must return the string `'Invalid parameter, a string is required'`;

- Passed a string that does not include a functionality, it must return `null`.

</details>

</details>

### 14. Get at least 100% test coverage in the `getOpeningHours` function

<details>
  <summary>
    Implement <code>getOpeningHours</code> function tests to get 100% coverage
  </summary> <br />

  This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

- Use the `npm test getOpeningHours` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage;

- The name of the day of the week passed as an argument must be in English;

- The time must have the following formatting `'XX:XX-XM'`;

- The hours will be validated in the `'AM'` and `'PM'` nomenclature;

- The function is not case sensitive.

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.


  <details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test what you think is necessary as long as the function coverage reaches at least 100%.

- Test not passing arguments. It should return the object:

```javascript
{
Tuesday: { open: 8, close: 6 },
Wednesday: { open: 8, close: 6 },
Thursday: { open: 10, close: 8 },
Friday: { open: 10, close: 8 },
Saturday: { open: 8, close: 10 },
Sunday: { open: 8, close: 8 },
Monday: { open: 0, close: 0 },
}
```

- For the arguments `Monday` and `09:00-AM` must return the string `'The zoo is closed'` (Since the Zoo is always closed on Monday);

- For the arguments `Tuesday` and `09:00-AM` must return the string `'The zoo is open'`;

- For the arguments `Wednesday` and `09:00-PM` must return the string `'The zoo is closed'`;

- For the arguments `Thu` and `09:00-AM` should throw an exception with the message: `'The day must be valid. Example: Monday'`

- For the arguments `Friday` and `09:00-ZM` you should throw an exception with the message: `'The abbreviation must be \'AM\' or \'PM\''`;

- For the arguments `Saturday` and `C9:00-AM` should throw an exception with the message: `'The hour should represent a number'`;

- For the `Sunday` and `09:c0-AM` arguments should throw an exception with the message: `'The minutes should represent a number'`;

- For the `Monday` and `13:00-AM` arguments should throw an exception with the message: `'The hour must be between 0 and 12'`;

- For the `Tuesday` and `09:60-AM` arguments you should throw an exception with the message: `'The minutes must be between 0 and 59'`.
