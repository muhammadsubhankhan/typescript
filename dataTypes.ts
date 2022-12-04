/* Data Types */

/* primitive data type */
/* String , Numeber , Boolean , Null and undefined */

let fullName: String = "subhan khan";

// console.log('output :', fullName.toUpperCase())

let salary: number = 2000;

// console.log('number output :', salary)

let firstName: String | number;
firstName = "subhan";

// console.log(firstName.toUpperCase())

let nameMaybe = Math.random() > 0.5 ? "ali khan" : undefined;
/* Ternary operator */

// console.log('math rondom:', Math.random())

// console.log('typeof->', typeof nameMaybe)
if (typeof nameMaybe == "string") {
  console.log(nameMaybe.toUpperCase());
}
/* Boolean */

let isPakistani: boolean = false;

// if (isPakistani) {
//     console.log('Yes! we are pakistanis')
// } else {
//     console.log('No, we are not')
// }

let nameMaybe2 = Math.random() > 0.5 ? "ali khan" : undefined;
// if (Math.random() > 0.5) {
//     nameMaybe2 = 'Ali khan'
// } else {
//     nameMaybe2 = undefined
// }
// console.log('nameMaybe2->', nameMaybe2)

// type person = {
//     firstName: string
//     lastName: string
//     age: number
//     phNumber: number
//     email: string
// }

interface person {
  firstName: string;
  lastName: string;
  age: number;
  phNumber: number;
  email: string;
}

const person: person = {
  firstName: "Murtaza",
  lastName: "bhai",
  age: 3,
  phNumber: 123123123,
  email: "subhan@gmail.com",
};

console.log("person --->", person.firstName);
