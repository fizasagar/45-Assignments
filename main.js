// ASSINMENT SOLUTIONS
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// TASK 1
// console.log("Hello World")
// TASK 2
// let personName : string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);  
// TASK 3
// let personName : string = "Eric"
// in lowerCase
// console.log("lowercase:", personName.toLowerCase());
// in upperCase
// console.log("uppercase:", personName.toUpperCase());
// title Case
// console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
// TASK 4
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string= "Albert Einstein";
// console.log(`${author} once said,"${quote}"`);
// TASK 5
// let famous_person: string = "Albert Einstein";
// let message: string = `${famous_person} once said,"${quote}"`;
// console.log(message);
// TASK 6
// let personName: string = "\t\n  John Doe  \n\t";
// console.log("Original:", personName);
// console.log("Stripped:", personName.trim());
// TASK 7 , 8
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4*2);
// console.log(16/2);
// TASK 9
// let favoriteNumber: number = 2;
// console.log(`My favorite number is ${favoriteNumber}.`);
// TASK 10
// author: [Fiza Sagar]
// date: [Sunday , February 18 , 2024]
// Task 9: printing my favorite number.
// let favoriteNumber: number = 2;
// reveling my favorite number in a message formate.
// console.log (`My favorite number is ${favoriteNumber}.`);
// TASK 11
// let names : string [] = ["Ali","Haseeb","Wajahat","Muzamil"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// TASK 12
// let names : string [] = ["Ali","Haseeb","Wajahat","Muzamil"];
// let message : string = "Do you like to play football?"
// console.log(names[0] + " "+ message )
// console.log(names[1] + " "+ message )
// console.log(names[2] + " "+ message )
// console.log(names[3] + " "+ message )
// TASK 13
//  let transportation : string [] = ["Honda City", "Audi","Civic"];
//  transportation.map((items) => console.log(`I would like to own a ${items}`));
// TASK 14
// let guestArr : string [] = ["Ali","Haseeb","Wajahat"];
// guestArr.map((items) => (console.log(`Dear ${items}, You are invited to the dinner.`)));
// TASK 15
// let guestArr : string[] = ["Ali","Haseeb","Wajahat"];
// let canNotAttend : string = "Wajahat"
// console.log(canNotAttend + " " +"can not attend the dinner.")
// let newGuest : string = "Kaif"
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, You are invited to the dinner.`))
// TASK 16
// let guestArr : string[] = ["Ali","Haseeb","Kaif"];
// let canNotAttend : string = "Haseeb"
// let newGuest : string = "Huzaifa"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) => 
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`));
// // Part2
// let guestBeg = "Moizz"
// guestArr.unshift(guestBeg);
// console.log(guestArr)
// // Part3
// let middleGuest : string = "Fatima"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr)
// // part4
// guestArr.push("Zeeshan")
// console.log(guestArr)
// // part5 
// guestArr.map((items) =>
// console.log(`Dear ${items}, You are invited with many more people on dinner.`))
// // TASK 17
// // Initial list of guests
// let guests : string[] = ["Ali", "Bilal", "Harry", "Dawood", "Hamza"];
// console.log("Due to limited space, only two people can be invited for dinner.");
// while (guests.length > 2) {
//     const removedGuest = guests.pop(); 
//     console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);}
// //Printing invitation to the remaining two guests
// let guests : string[] = ["Ali", "Bilal"];
// guests.forEach((guest) => {
//     console.log(`Dear ${guest}, You're still invited to dinner.`);
// });
// //Removing the last two names from the list
// guests.pop();
// guests.pop();
// console.log("Final guests list:", guests);
// // TASK 18
// let placesToVist: string[] = ["Saudia", "Canada", "Iceland", "Turkey", "China"];
// //printing the array in Orignal order
// console.log("Orignal order:", placesToVist);
// //Alphabetical Order
// console.log("Alphabetical order:", [...placesToVist].sort());
// //Reverse alphabetic order
// console.log("Reverse alphabetical order:", [...placesToVist].sort().reverse());
// //Reverse Order
// placesToVist.reverse();
// console.log("Reversed order:", placesToVist);
// // Orignal order 
// placesToVist.reverse();
// console.log("Original order:", placesToVist);
// placesToVist.sort();
// console.log("Alphabetical order:", placesToVist);
// placesToVist.reverse();
// console.log("Reverse alphabetical order:", placesToVist);
// //TASK 19
// let invitations: string[] = ["Ali","Bilal"]
// let countInvitations: number = invitations.length; // Counting number of invitation
// console.log(`${countInvitations} people will come to the dinner`)
// TASK 20
// let pakLanguages: string[] =  ["Urdu", "Punjabi", "Sindhi", "Balochi", "Pashto",];
//     console.log("List of Pakistani Languages");
//     console.log(pakLanguages);
// //  TASK 21
// let infoType ={
//     passenger_Name : "string",
//     age : "number",
//     seat :"string",
//     single : "boolean",
//     cinic :"number",
//     flight : {
//             to : "string",
//             from :"string"
//     }
// }
// let ticketInfo = {
//     passenger_Name: "Fiza",
//     age: 23,
//     seat: "26B",
//     single : "Yes",
//     cnic: 42401_23452_1,
//     flight: {
//         from: "Pakistan",
//         to: "Saudia"
//     }
// }
// console.log(`here is my Ticket Information`,ticketInfo);
// // TASK 22
// const days : string [] = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
// //  console.log(days,{7}) // Making Error in Array
// console.log (days[6]);
//  TASK 23
var car = "subaru";
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("toyota", "corola", { color: "silver", year: "2024" });
console.log(mycar);
