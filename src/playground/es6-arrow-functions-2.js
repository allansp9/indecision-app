const add = (a, b) => {
  return a + b;
};

// console.log(add(5, 1, 1001));

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map(city => `${this.name} has lived in ${city}`);
  }
};

// console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
