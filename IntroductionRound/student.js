const Person = require("./Person");

function Student(firstName, lastName, gender, hobbies, subject){
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
    if(this.gender == "female"){
        console.log("Hi. My name is " + this.name.first + " and I study " + this.subject + ".");
    }

    if(this.gender == "male"){
        console.log("Hi. My name is " + this.name.first + " and I study " + this.subject + ".");
    }
};

module.exports = Student;