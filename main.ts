                                       // // 45 ASSINMENTS SOLUTION // //

// TASK 1
// Installation Completed

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

// let car = "subaru";

// console.log( "is car == 'subaru'? predict true")   //TRUE
// console.log(car == 'subaru')

// console.log("is car != 'honda city'? predict true")  //TRUE
// console.log(car != 'honda city')

// console.log("is car == 'Subaru'? predict true")         // false
// console.log(car == 'Subaru')


// console.log("is car == 'SUBARU'? predict false")        //false
// console.log(car == 'SUBARU')

// console.log("is car.length == 6? predict true")        //TRUE
// console.log(car.length == 6)

// console.log("is car.length == 10? predict true")        //false
// console.log(car.length == 10)

// console.log("is 10 > 45 ? predict false")        //false
// console.log(10  > 45)

// console.log("is 10 <= 45 ? predict false")        //TRUE
// console.log(10 <= 45)

// console.log("is 5 < 15 ? predict false")        //TRUE
// console.log( 5 < 15 )


// console.log("is 72 >= 83 ? predict false")        //False
// console.log( 72 >= 83 )

// //  TASK 24
// let name_1 : string = "fiza"
// let name_2 : string = "fiza sagar"
// let name_3 : string = "miss fiza sagar"

// if (name_1 == name_3){
//     console.log("names are equal")
// }
//     else{
//         console.log("names are not equal")
    // }

//     if (name_1 != name_2){
//     console.log("names are equal")
// }


//  if (name_1 != name_3){
//     console.log("names are equal")
// }

// let age_1 : number = 18
// let age_2 : number = 25
// let age_3 : number = 23

// if (age_1 == 18){
//     console.log("Eligibal for vote")
// }

// if (age_1 != 25){
//     console.log("Eligible for vote in older category")
// }

// if (age_1 <= age_3){
//     console.log("Younger")
// }

// if (age_2 >= age_3){
//     console.log("Older")
// }

// if (age_1 == 18 && age_2 == 25) {
//     console.log("Person is eligible for vote")
// }

// if (age_1 == 18 || age_2 != 25) {
//     console.log("Person is not eligible for vote")
// }

// let country : string [] = ["Pakistan", "China", "India", "Canada"];

// if  (country.includes("Pakistan")){                                  
//     console.log("Pakistan is included in country list")
// }
    
// if (!country.includes ("Japan")){
//     console.log("Japan is not include in an array")
// }
    
//  // TASK 25 

// let alienColour = "green";

// if ( alienColour == "green" )
//    console.log("you earn 5 points.")

// let alienColour : string = "red";

// if (alienColour == "green")
//     console.log("no output")

//  // TASK 26

// let alienColour = "green";

// if ( alienColour == "green" ) {
//    console.log("player just earned 5 points for shooting the alien.")
// } else {
//     console.log("player just earned 10 points")
// }

// let alienColour = "red";

// if ( alienColour == "green" ) {
//    console.log("player just earned 5 points for shooting the alien.")
// } else {
//     console.log("player just earned 10 points")
// }

// // TASK 27

// let alienColour : string = "green";

// if ( alienColour == "green" ) {
//    console.log("player just earned 5 points for shooting the alien.")
//  }
//   else if (alienColour == "yellow"){
//     console.log("player just earned 10 points")
// }
//   else{
//     console.log("player just earned 15 points")
//   }

// //TASK 28

// let age :number = 18;

// if (age < 2){
//     console.log("you are a baby")
// }
// else if(age < 4) {
//     console.log("you are a toddler")
// }
// else if(age < 13) {
//     console.log("you are a kid")
// }
// else if(age < 20) {
//     console.log("you are a teenager")
// }
// else if(age < 65) {
//     console.log("you are adult")
// }
// else {
//     console.log("you are older")
// }

//  // TASK 29

// let favFruits : string [] = ["kivi","apple","orange","berry","peach"]

// if(favFruits.includes("kivi")) {
//     console.log("kivi")
// }
// if(favFruits.includes("peach")) {
//     console.log("you really like bananas")
// }
// if(favFruits.includes("orange")) {
//     console.log("orange")
// }
// if(favFruits.includes("berry")) {
//     console.log("you really like bananas")
// }
// if(favFruits.includes("apple")) {
//     console.log("apple")
// }

// // TASK 30

// let users : string [] = ["admin", "eric", "haseeb", "ali", "fatima"]

// for (let user of users) {
//     if(user === "admin"){
//         console.log("Hello admin, would you like to see a status report?")
// } else {
//     console.log(`Hello ${user}, thank you for logging in again.`)
//      }
//  }

 // // TASK 31

// let users : string [] = ["admin", "eric", "haseeb", "ali", "fatima"]

// if(users.length === 0) {
//     console.log("No need to find users!")
// } else {
//     for(let user of users) {
//         if (user === "admin") {
//             console.log(`Hello ${user}, would you like to see a status report?`)
//         } else {
//             console.log(`Hello ${user}, thank you for logging in again`)
//         }
//     }
// }
// users = []
// if (users.length === 0) {
//     console.log("we need to find some users!")
// }

// // TASK 32

// let currentUser : string [] = ["admin", "Eric", "Ali", "Hamza", "fatima"]
// let newUsers : string [] = ["admin", "fatima", "Aliza", "Haseeb", "Noor"]

// let current_user_lower : string [] = currentUser.map(user=> user.toLowerCase())

// for (let newUser of newUsers) {
//     if (current_user_lower.includes(newUser.toLowerCase())) {
//         console.log(`Sorry ${newUser}, that name is taken`)
// } else {
//     console.log(`Yes ${newUser}, is still in available list`)
// } 
//     }

// TASK 33

// let numbers : number [] = [1,2,3,4,5,6,7,8,9]

// for (let number of numbers){
// if (number === 1) {
//     console.log(`${number}st`) // 1st
// } else if (number === 2) {
//     console.log(`${number}nd`) // 2nd
// } else if (number === 3) {
//     console.log(`${number}rd`)
// } else {
//     console.log(`${number}th`) //4th , 5th, 6th
// }
//     }

// TASK 34

// let fav_pizza : string[] = ["Chicken", "Pepperoni", "Superemo"]

// for (let pizza of fav_pizza) {      
//     console.log(pizza)           // name print
// }
// console.log("\n")

// for (let pizza of fav_pizza){
//     console.log(` I really like ${pizza} pizza!`) // statement
// }
// console.log("\nI really love pizza!")

// TASK 35

// let animals: string [] = ["cat", "lion", "dog"]

// for (let animal of animals) {
//     console.log(animal)
// }
// console.log("\n")

// for (let animal of animals) {
//     console.log(`A ${animal} has a tail`)
// }
// console.log("\nAll of these are great pets! but i love cats more")

    // TASK 36

 // function makeShirt (size : string, text : string): void {
   //   console.log(`You order a ${size} shirt that says ${text}`)
   // }
   // makeShirt('large', '"I Love Typescript"')
   // makeShirt('medium', '"I need a big shirt"' )

      // TASK 37

// function makeShirt(size: string = 'large', text: string = 'I love Typescript'): void{
//  console.log(`you have order a ${size} shirt, that says ${text}`)
//      }
// makeShirt();
// makeShirt('medium')

// // Different message 
// makeShirt('small', 'I need a big shirt to wear')


    // TASK 38

// function describe_city(city: string, country: string = 'pakistan') : void {
//     console.log(`${city} is in ${country}`)
// }
// describe_city('Karachi') // default sentence
// describe_city('France', 'europe')
// describe_city('Islamabad', 'pakistan')

    // TASK 39

// function cityCountry(city : string, country: string) : string{
//     return `${city}, ${country}`
// }

// let c1 = cityCountry('lahore', 'pakistan')
// let c2 = cityCountry('tokyo', 'japan')
// let c3 = cityCountry('paris', 'france')

// console.log(c1)
// console.log(c2)
// console.log(c3)

  // TASK 40

//   function makeAlbum(artist: string, title : string) : {artist: string; title : string} {
//     const dictionaries = {
//         artist :artist.charAt(0).toUpperCase() + artist.slice(1),
//         title :title.charAt(0).toUpperCase() + title.slice(1)
//     };
//     return dictionaries;
//   }
// let album = makeAlbum("Ali", "Light")
// console.log(album)

// album = makeAlbum("Bilal", "Red wave")
// console.log(album)

// album = makeAlbum("Hamza", "Seenbreez")
// console.log(album)

    // TASK 41

// function show_magicians(magicians : string[]): void {
//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
// }

// const magician: string[] = ["kaif", "huzaifa", "bilal"]
// show_magicians(magician)

//     // TASK 42
    
// function make_great(magicians : string[]) : void{
//     for(let i = 0; i < magicians.length; i++ ) {      // i stand for index string
//         magicians[i] = magicians[i] + ' the great'
//     }     
// }

// const magician2: string[] = ["kaif", "huzaifa", "bilal"]
// make_great(magician2)
// show_magicians(magician2)

    // TASK 43

    // function make_great2(magicians : string[]) : string[] {
    //     const greatMagicians: string[] = [];
    //     for(let i = 0; i < magicians.length; i++ ) {      // i stand for index string
    //         greatMagicians.push(magicians[i] + ' the Great')
    //     }     
    //     return greatMagicians;
    // }
    
    // const magicians3: string[] = ["kaif", "huzaifa", "bilal"];
    // const greatMagicians2: string[] = make_great2(magicians3);
    // show_magicians(magicians3);
    // show_magicians(greatMagicians2);

    // TASK 44

    // function sandwich(...items: string[]): void{
    //     console.log(" Sandwich order:")

    //     for (let i=0; i < items.length; i ++) {
    //         console.log(`- ${items[i]}`)
    //     }
    // }
    // console.log("Enjoy your sandwich dear")

    // sandwich('capsicum', 'tomato', 'chicken')
    // sandwich('beef', 'cheese')
    // sandwich('garlic beef', 'mayo sauce')

  // TASK 45

// type car = {
//     manufacture : string
//     model : string
//     [key : string] : any
// }
// function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }

// const mycar: car = createCar("toyota", "corola",{color: "silver", year:"2024"})
// console.log(mycar)