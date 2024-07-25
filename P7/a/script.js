function add() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let res = a + b;
  console.log(res);
  document.getElementById("res").innerHTML = "Result: " + res;
}

function sub() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let res = a - b;
  console.log(res);
  document.getElementById("res").innerHTML = "Result: " + res;
}

function mul() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let res = a * b;
  console.log(res);
  document.getElementById("res").innerHTML = "Result: " + res;
}

function divi() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let res = a / b;
  console.log(res);
  document.getElementById("res").innerHTML = "Result: " + res;
}
