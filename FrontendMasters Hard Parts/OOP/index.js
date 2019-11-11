/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

/* 
Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
create an empty object
add a name property to the newly created object with its value being the 'name' argument passed into the function
add an age property to the newly created object with its value being the 'age' argument passed into the function
return the object
 */

function makePerson(name, age) {
    // add code here
    let person = {
        name,
        age
    };
    return person;
}

// var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

/* 
Inside personStore object, create a property greet where the value is a function that logs "hello".
*/

var personStore = {
    // add code here
    greet: function () {
        console.log("Hello");
    }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

/* 
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.
*/

function personFromPersonStore(name, age) {
    // add code here
    let person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

/* 
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
*/

// add code here
personStore.introduce = function () {
    console.log(`Hi, my name is ${this.name}`);
}

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'


/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

/* 
Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.
*/

function PersonConstructor() {
    // add code here

}

PersonConstructor.prototype.greet = function () {
    console.log("hello");
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

/* 
Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
*/

function personFromConstructor(name, age) {
    // add code here
    let person = new PersonConstructor;
    person.name = name;
    person.age = age;
    return person;
}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here

/* 
Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
*/

PersonConstructor.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name}`);
}


// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

/* 

EXTENSION: Subclassing
Challenge 1/5
Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.
Challenge 2/5
Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.
Challenge 3/5
Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.
Challenge 4/5
Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.
Challenge 5/5
Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function.

*/

var userFunctionStore = {
    sayType: function () {
        console.log("I am a " + this.type);
    }
}

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}


var adminFunctionStore = Object.create(userFunctionStore); /* Put code here */ ;

function adminFactory(name, score) {
    // Put code here
    let user = Object.create(adminFunctionStore);
    user.type = "Admin";
    user.name = name;
    user.score = score;
    return user;
}

var newAdmin = adminFactory("test", 5);
/* Put code here for a method called sharePublicMessage*/

adminFunctionStore.sharePublicMessage = function () {
    console.log("Welcome users!");
}


var adminFromFactory = adminFactory("Eva", 5);

var userFromFactory = userFactory("Time", 10);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
userFromFactory.sayType();
try {
    userFromFactory.sharePublicMessage();
} catch {
    console.log("error");
}