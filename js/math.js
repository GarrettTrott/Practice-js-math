alert("Let's do math!");

let number1 = parseFloat(prompt("Enter a number: "));
let number2 = parseFloat(prompt("Enter a second number: "));

let add = number2 + number2;
let subtract = number1 - number2;
let divide = number1 / number2.toFixed(5);
let multiply = number1 * number2;

let content = `<h1>Math with numbers ${number1} & ${number2}</h1>
               <p>${number1} + ${number2} = ${add}</p>
               <p>${number1} - ${number2} = ${subtract}</p>
               <p>${number1} / ${number2} = ${divide}</p>
               <p>${number1} * ${number2} = ${multiply}</p>`;

document.getElementById("content").innerHTML = content;
