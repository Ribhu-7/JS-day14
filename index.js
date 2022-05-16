let student1 = {
    fname : "Ribhu",
    lname : "Ghosh",
    age: 23,
}

let student2 = {
    fname: "Raj"
}

student2.__proto__ = student1;

console.log(student2);
console.log(student2.lname);


let employee1 = {

    name : "Rahul",
    designation : "CSE",
    id : 111,
//    showDetails : function(){
//        console.log(this.name,this.designation, this.id);
//    }
}

function showDetails(age , gender){
   
        console.log(this.name,this.designation, this.id , age , gender);
    
}

let employee2 = {

    name : "Karan",
    designation : "IT",
    id : 112,

}

let employee3 = {

    name : "Raju",
    designation : "ECE",
    id : 113,

}




// employee1.showDetails.call(employee2);
// employee1.showDetails.apply(employee2);

// let res1= employee1.showDetails.bind(employee3);

// res1();

showDetails.call(employee1, 23 , "M");
showDetails.call(employee2);
showDetails.call(employee3);

showDetails.apply(employee1, [23 , "M"]);
showDetails.apply(employee2);
showDetails.apply(employee3);

showDetails.bind(employee1)(23,"M");

let arr = [1,2,3,4,5];
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

// let student1 = {
//     fname: "Sidhant",
//     lname: "Gupta",
//     age : 23,
// }

// let student2 = {
//     fname : "Raju",
// }

student2.__proto__ = student1;
console.log(student2);

console.log(arr1.__proto__);
console.log(arr1.__proto__.__proto__);
console.log(arr1.__proto__.__proto__.__proto__);


// console.log(employee2.id);


// let arr1 = [2,3,4];

// console

const StudentPrototype = {
    calcAge(){
        console.log(2022 - this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname=fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const ramesh = Object.create(StudentPrototype);

ramesh.fname = "Ramesh" ;
ramesh.lname = "Thakur" ;
ramesh.bYear = 1990 ;

ramesh.calcAge();
 console.log(ramesh);


 const kirsten = Object.create(StudentPrototype);
 console.log(kirsten);

 kirsten.initialise("Kirsten","Stewart",1986);
 kirsten.calcAge();

 console.log(kirsten);


 const ClassPrototype = class{
     constructor(fname,lname,bYear){
        this.fname=fname;
        this.lname = lname;
        this.bYear = bYear;
     }
     calcAge(){
         console.log(2022-this.bYear);
     }
 }

 const jarvis = new ClassPrototype("Jarvis" , "Valley" , 1992);
 console.log(jarvis);
 jarvis.calcAge();

console.log(jarvis.__proto__);

 ClassPrototype.prototype.greet = function(){
     console.log("Hi I am someone");
 }

 jarvis.greet();
 console.log(jarvis.__proto__);

 console.log("22" -22);
 console.log(2022 - "1980");