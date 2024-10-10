function add(n1, n2) {
  //   console.log("Sum is:", n1 + n2);
  return "Sum is:" + (Number(n1) + Number(n2));
}

function sub(n1, n2) {
  //   console.log("Sub is:", n1 - n2);
  return "\nsub is:" + (n1 - n2);
}

function multi(n1, n2) {
  // console.log("Multiplication is:", n1 * n2);
  return "\nMultiplication is:" + n1 * n2;
}

function div(n1, n2) {
  // console.log("Division is:", n1 / n2);
  return "\nDivision is:" + n1 / n2;
}

module.exports = {add, sub, multi, div};