const Person = require("./Person");

const p = new Person("Richard", "Roe", "male", ["reading"]);

p.sayHello();
p.tellHobbies();
console.log("");

const Teacher = require("./Teacher");

const t = new Teacher("Jane", "Doe", "female", [], "programming");
t.sayHello();
t.tellHobbies();
console.log("");

const Student = require("./Student");

const s = new Student("John", "Smith", "male", ["cooking", "swimming", "travelling"], "history");
s.sayHello();
s.tellHobbies();

