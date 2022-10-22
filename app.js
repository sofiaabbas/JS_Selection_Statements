console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// let favNum = 4;

// let guessNum = window.prompt("input a number");

// if (guessNum < favNum) {
//   console.log("too low");
// }
// else if(guessNum > favNum) {
//   console.log("too high");
// }
// else {
//   console.log("Congratulations!!!");
// }

// let birthMonth = window.prompt("What is your birth month?");

// switch (birthMonth) {
//   case "dec" :
//   case "jan" :
//   case "feb" :
//     console.log("Born in Winter"); 
//     break;
//   case "mar" :
//   case "apr" :
//   case "may" :
//     console.log("Born in Spring");
//     break;
//   case "jun" :
//   case "jul" :
//   case "aug" :
//     console.log("Born in Summer");
//     break;
//   case "sep" :
//   case "oct" :
//   case "nov" :
//     console.log("Born in Autumn")
//     break;
//   default: 
//   console.log("Invalid month");
// }


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

// let type = "";
// let color = "";
// let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

// let typeId = "01";
// let colorId = "PU";
// let sizeId = "L";

// let type = "";
// let color = "";
// let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }

switch (colorId) {
  case "BL":
    color = "Black";
  break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color ="White";
}

// if (colorId == "BL") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }


switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

console.log(`Product: ${size} ${color} ${type}`);