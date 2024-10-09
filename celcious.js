function cel() {
  var far = 240;
  var cel;
  cel = (far * 9) / 5 + 32;
  console.log(cel);
  return `Ferenhite ${far} convertd celsious is : ${cel}`;
}

module.exports = {cel};
