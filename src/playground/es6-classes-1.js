class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, home) {
    super(name);
    this.home = home;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.home) {
      greeting += ` I'm visiting from ${this.home}.`;
    }
    return greeting;
  }
}

const me = new Student("Allan Pereira", 27, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const traveler = new Traveler("Allan Pereira", "Santos");
console.log(traveler.getGreeting());
