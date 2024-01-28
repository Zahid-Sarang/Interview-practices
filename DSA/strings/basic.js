//======================== Basic Nature of Strings ================ //
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

let greeting = "Hello";
console.log(greeting.length); // Output: 5
console.log(greeting[0]); // Output: H

let text = "Hello, world!";
console.log(text.toLowerCase()); // Output: hello, world!
console.log(text.indexOf("world")); // Output: 7
console.log(text.length);
console.log(text.charAt(1));

let string = new String(fullName);
console.log(typeof string); // Output: Object

const a = "a";
const b = "Z";

if (a < b) {
	console.log(`${a} is less than ${b}`);
} else if (a > b) {
	console.log(`${a} is greater then ${b}`);
} else {
	console.log(`${a} and ${b} are equal.`);
}

const strprim = String(1);
console.log(typeof strprim); // Output: string

const s1 = 2 + +"2";
console.log(s1);

// ============================ Immutable Nature ========================= //
console.log("====================== Immutable Nature =================");
let strs = "hello";
strs[0] = "we";
let result = strs[0];
console.log(result); // Output: h

// spread operator

let name = "Zahid";
let email = "zahid@gmail.com";
let rollno = [1, 3, 5, 6];
let info = [...name, ...email, ...[rollno]];
console.log(info);

// reference semantics:
let value1 = 12;
let value2 = value1;
value1 = 10;
console.log(value1); // Output:10
console.log(value2); // Output:10

let amount = "25k";
let totalAmount = amount;

amount = "18k";
console.log(amount); // Output:18k
console.log(totalAmount); // Output:25K
