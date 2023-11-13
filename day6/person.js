class Person {
  constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
  }

  // Method to get the details of the person
  getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

// Create an instance of the Person class
const person1 = new Person("John Doe", 25, "Male");

// Print details of the person
console.log(person1.getDetails());
