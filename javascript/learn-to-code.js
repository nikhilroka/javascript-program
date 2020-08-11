//var name = "Jack";
//var age = 23;
//var message = "Hi, my name is " + name + " and I am " + age + " years old ";
//console.log(message);

//var firstName = "John";
//var lastName = "Maverick";
//var dateOfBirth = "10-09-96";
//var age = 23;
//var profileImgUrl = "https://coolpicks.com/johnmaverick.jpg";
//var welcomeLoginMessage = " Welcome, " + firstName + " .Happy " + age + "rd birthday! ";
//
//console.log(welcomeLoginMessage);

//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//
//var msg = "10 / 3 = 3 with a remainder of " + mod;
//
//var result = 10 * ((5 + 3) - 4);
//
//console.log(result);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;
//
//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes!");
//    console.log("Account Balance: " + myAccountBalance);
//} else if (nikeSBShoes - coupon <= myAccountBalance) {
//     console.log("We just bought some dope shoes with a coupon !");
//     myAccountBalance -= nikeSBShoes - coupon;
//     console.log("Account Balance: " + myAccountBalance);
//} else { 
//    console.log("You too broke for shoes bra!");
//}

//var val1 = 23;
//var val2 = "23";
//
//if (val1 === val2) {
//    console.log(" They are same! ");
//} else {
//    console.log(" One of these is not like the other! ");
//}

//if (1 === 1 && 2 === 2 || "joe" === "joe") {
//    console.log( " They are both true !");
//}
//
//if (true && true) {
//    console.log(" They are same!");
//}
//
//if (1 === 3 || "joe" === "joe") {
//    console.log(" One of these is true!");
//}
//
//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicaped = true;
//
//if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicaped) {
//    console.log(" Cat 1 is the cutest!");
//} else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicaped) {
//    console.log(" Cat 2 is the cutest!");
//} else if ((cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicaped) {
//    console.log(" Cat 3 is the cutest!");
//}

//var student1 = "Timmy";
//var student2 = "Vanessa";
//var student3 = "Arun";
//
//var balances = ["50.45, 4000.12, -300"];
//var studentNames = ["Timmy","Vanessa","Arun"];
//
//var naughtyList = [];
//naughtyList.push(studentNames[0]);
//
//var index = naughtyList.indexOf("Timmy");
//
//console.log(naughtyList);
//if (index > -1) {
//    naughtyList.splice(index, 1);
//} 
//console.log(naughtyList);

//var total = 10;
//for (var x = 0; x < total; x++) {
//    console.log(x);
//}
//var students = ["jacob", "Jennie", "John", "Jingle", "Smith"]
//for (index = 0; index < students.length; index++) {
//    console.log(students[index]);
//}

//function area(length, width) {
//    return length * width;
//}

//var rectangleAreas = []
//rectangleAreas.push(area(10,15));
//rectangleAreas.push(area(14,2));
//rectangleAreas.push(area(4,5));
//
//console.log(rectangleAreas);

var bankBalance = 500;

//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
//    console.log(bankBalance);
//    makeTransaction(79.00);
//    
//    console.log(bankBalance);
//    makeTransaction(2.32);
//    
//    console.log(bankBalance);
//    makeTransaction(10.45);
//    
//    console.log(bankBalance);
//     makeTransaction(450);
//
//var transaction = function(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//        
//    }
//}
//
//var printCustomerName = function(first,last) {
//    console.log("First Name: " + first +"Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore,Soul) {
//    //call some functions to process application
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);

//var student0 = {
//    firstName : "John",
//    lastName : "Parker",
//    age : 7
//}
//
////console.log(student.firstName);
////console.log(student.lastName);
////console.log(student["firstName"]);
////console.log(student["lastName"]);
//
////Creates a new object 
//var student1 = new Object();
//student1.firstName = "Jannie";
//student1.lastName = "Loo";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;
//
//
//students.push(student0);
//students.push(student1);
//students.push(student2);
//


//var students = [];
//
//function Student(first, last, age) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function() {
//        return "Hi,I'm " + this.firstName + " and I m " + this.age + "years old.";
//    };
//    
//}
//
//students.push(new Student("Jenyy","Laga",5));
//students.push(new Student("Timmy","Turner",8));
//students.push(new Student("Carl","Jr",4));
//
//for (var index = 0; index < students.length; index++) {
//   var student = students[index];
//    console.log(student.greeting());
//}

////Alex Brown's
//this.car = "Honda civic";
//
//var marksGarage = {
//  car: "Aston Martin",
//  getCar: function() {
//    return this.car;
//  } 
//  
//};
//
//console.log(marksGarage.getCar());
//var storeGetCarForLater = marksGarage.getCar;
//
////Now work is over and mark wants his car
//
//console.log(storeGetCarForLater()); //WTF
//
//var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
//console.log(theRealGetCarFunction());

