
let number1;
let number2;

function doMath(numb1, numb2){

  let add;
  let subtract;
  let divide;
  let multiply;

  add = numb1 + numb2;
  subtract = numb1 - numb2;
  divide = numb1 / numb2.toFixed(5);
  multiply = numb1 * numb2;

  content = `<h1>Math with numbers ${number1} & ${number2}</h1>
               <p>${number1} + ${number2} = ${add}</p>
               <p>${number1} - ${number2} = ${subtract}</p>
               <p>${number1} / ${number2} = ${divide}</p>
               <p>${number1} * ${number2} = ${multiply}</p>`;

  return document.getElementById("content").innerHTML = content;
}; 

alert("Let's do math!");

number1 = parseFloat(prompt("Enter a number: "));


if isNaN (number1) {
  alert("That is not number!")
}

number2 = parseFloat(prompt("Enter a second number: "));


