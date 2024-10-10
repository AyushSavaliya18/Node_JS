
function add(n1, n2) {
    //   console.log("Sum is:", n1 + n2);
    return "Sum is: " + (Number(n1) + Number(n2));
  
}
function sub(n1, n2) {
    //   console.log("Sum is:", n1 + n2);
    return "Sub is: " + (Number(n1) - Number(n2));
  
}
function multi(n1, n2) {
    //   console.log("Sum is:", n1 + n2);
    return "multiplication is: " + (Number(n1) * Number(n2));
  
}
function div(n1, n2) {
    //   console.log("Sum is:", n1 + n2);
    return "division is: " + (Number(n1) / Number(n2));
  
}
module.exports = {add,sub,multi,div};