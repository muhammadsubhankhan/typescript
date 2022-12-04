/* Data Types */
/* primitive data type */
/* String , Numeber , Boolean , Null and undefined */
var fullName = "subhan khan";
// console.log('output :', fullName.toUpperCase())
var salary = 2000;
// console.log('number output :', salary)
var firstName;
firstName = "subhan";
// console.log(firstName.toUpperCase())
var nameMaybe = Math.random() > 0.5 ? "ali khan" : undefined;
/* Ternary operator */
// console.log('math rondom:', Math.random())
// console.log('typeof->', typeof nameMaybe)
if (typeof nameMaybe == "string") {
    console.log(nameMaybe.toUpperCase());
}
/* Boolean */
var isPakistani = false;
// if (isPakistani) {
//     console.log('Yes! we are pakistanis')
// } else {
//     console.log('No, we are not')
// }
var nameMaybe2 = Math.random() > 0.5 ? "ali khan" : undefined;
var person = {
    firstName: "Murtaza",
    lastName: "bhai",
    age: 3,
    phNumber: 123123123,
    email: "subhan@gmail.com"
};
console.log("person --->", person.firstName);
