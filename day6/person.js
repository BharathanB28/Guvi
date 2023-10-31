/* Person class */
class Person {
    constructor(name, age, gender, address) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
    }
  
    // Getters and setters
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get age() {
      return this._age;
    }
  
    set age(age) {
      this._age = age;
    }
  
    get gender() {
      return this._gender;
    }
  
    set gender(gender) {
      this._gender = gender;
    }
  
    get address() {
      return this._address;
    }
  
    set address(address) {
      this._address = address;
    }
  
    // Methods
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, I'm ${this.age} years old and I live in ${this.address}.`);
    }
  }
  
  // Create a new Person object
  const person1 = new Person('Bharathan', 28, 'male', 'Chennai');
  
  // Call the introduceSelf() method
  person1.introduceSelf();
  