function Person(firstName, lastName, gender, hobbies){
    this.name = {
        first: firstName,
        last: lastName
    };
    this.gender = gender;
    this.hobbies = hobbies;
}

Person.prototype.sayHello = function(){
    console.log("Hello. My name is " + this.name.first + " " + this.name.last + ".");
};

Person.prototype.tellHobbies = function(){
    if (this.hobbies.length == 1){
        console.log("My only hobby is " + this.hobbies + ".");
    }

    if (this.hobbies.length == 0){
        console.log("I have no hobbies.");
    }

    if (this.hobbies.length > 1){
        console.log("My hobbies are: ");
        for(i of this.hobbies){
            console.log("-" + i);
        }
    }
};

module.exports = Person;