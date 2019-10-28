let number1;
let number2;

function doMath(numb1, numb2) {
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

  return (document.getElementById("content").innerHTML = content);
}

alert("Let's do math!");

number1 = parseFloat(prompt("Enter a number: "));
number2 = parseFloat(prompt("Enter a second number: "));

if (isNaN(number1) || isNaN(number2)) {
  alert("One of the the two inputs is not a number, reload to start again.");
} else if (number2 === 0) {
  alert("0 is not divisible please reload and enter a number other than 0.");
} else {
  doMath(number1, number2);
}
