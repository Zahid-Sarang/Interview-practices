//========================= Spread Operator ============================//
// example with array
const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1, 5, 6, 7];
console.log(arr2); // output: [1,2,3,4,5,6,7]

// example with object
const obj1 = { a: "apple", b: "ball" };
const obj2 = { ...obj1, c: "cat", d: "dog" };
console.log(obj2); // output: { a: "apple", b: "ball", c: "cat", d: "dog" }

// example with string
const str1 = "program";
const output = [...str1];
console.log(output); // output: ['p','r','o','g','r','a','m']

//========================= Rest Parameter ============================//

// basic example
function sum(...numbers) {
	return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // output : 10

// example with spread opreator

function addition(...num) {
	let result = 0;
	for (let n of num) {
		result += n;
	}
	return result;
}

const digits = [3, 4, 5, 6, 7, 12, 89];
console.log(sum(...digits)); // output: 126

// example with max function

const numberFromBackend = [2, 3, 4, 1, 5, 7, 12, 90, 754];
console.log(Math.max(numberFromBackend)); // output: NaN
console.log(Math.max(...numberFromBackend)); // output: 754

// example with Object Distructuring

const user = {
	name: "Zahid",
	city: "Navi Mumbai",
	street: "main street sector-10",
};

const { name, ...address } = user;
console.log(name, address); // output: Zahid {city:Navi Mumbai,street:"main street sector-10"}
