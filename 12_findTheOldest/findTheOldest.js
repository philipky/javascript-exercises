const findTheOldest = function(people) {
    //Create a array with the age of each person
    //Find the largest value
    //return the respective person
    for (const person of people) {
        if (person.yearOfDeath === undefined) {
            let d = new Date();
            person.yearOfDeath = d.getFullYear(); 
        }
    }
    const ages = [];
    people.forEach(x => ages.push(x.yearOfDeath - x.yearOfBirth));
    let maxAge = Math.max(...ages);
    let ind = ages.indexOf(maxAge);
    return people[ind]; 
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
