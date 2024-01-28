// Function Scope
var username = "zahidsarang";
function scope() {
	var username = "hello";
}
console.log(username); // output: zahidsarang
// var is function scope

// Block Scope
let name = "zahid"; // using let
if (true) {
	let name = "jhon";
}
console.log(name); // output: zahid

var user = "jhon"; // using var
if (true) {
	var user = "zahid"; // overwirte the previous user variable
}
console.log(user); // output: zahid
// let is block scope it can only accessble in block scope

// for (var i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 2000);
// }
// for (let i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 2000);
// }

for (var i = 0; i < 5; i++) {
	(function (i) {
		setTimeout(() => {
			console.log(i);
		}, 2000);
	})(i);
}
