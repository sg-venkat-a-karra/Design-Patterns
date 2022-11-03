class Person {
  constructor(name = "Anonymous", age = 0) {
    this.age = age;
    this.name = name;
  }
  getGreeting() {
    return `Hi I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {}
  getDescription = () => {
    const description = super.getDescription();
    console.log(description);
    return description;
  };
}

// Traveller -> Person
// Add support for homeLocation
// Override get greeting method and the expected output on log/- {1: "Hi I am Venkat Avinash Karra. I'm visiting from Hyderabad", 2: "Hi I am Andrew Mead"}
class Traveller extends Person {
  constructor(name, age, location = "free bird") {
    super(name, age, location);
    this.location = location;
  }
  hasHomeLocation = () => {
    return !!this.location;
  };
  getHomeLocation = () => {
    if (this.hasHomeLocation()) {
      return this.location;
    }
  };
}

const p1 = new Student("Avinash", 30, "Electronics And Communications");
const p2 = new Student();
const p3 = new Traveller("Andrew Mead", 28);
const location = p3.hasHomeLocation();
const p4 = new Traveller("Indra", "7 months", "Madhapur");

console.log(p1.getDescription());
console.log(p2.getDescription());
console.log(p3.getDescription());
console.log(location);
console.log(p4.getHomeLocation());
console.log(p3.getHomeLocation());
