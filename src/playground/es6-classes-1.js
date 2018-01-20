class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  get Gretting() {
    return `Hi. I am ${this.name}!`;
  }

  get Description() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person("Allan Pereira", 27);
console.log(me.Gretting);
console.log(me.Description);

const other = new Person();
console.log(other.Gretting);
console.log(other.Description);
