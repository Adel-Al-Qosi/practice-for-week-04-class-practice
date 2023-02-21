// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }

  static introducePeople(input) {
    if (!Array.isArray(input)) {
      throw new Error("introducePeople only takes an array as an argument.");
    } else if (
      input.reduce((boolean, element) => {
        if (element instanceof Person) return boolean;
        return true;
      }, false)
    ) {
      throw new Error("All items in array must be Person class instances.");
    } else {
      input.map((element) => {
        element.introduce();
      });
    }
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
