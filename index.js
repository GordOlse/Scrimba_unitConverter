/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById('convert-btn');
let lengthVal = document.getElementById('length-val');
let volumeVal = document.getElementById('volume-val');
let weightVal = document.getElementById('weight-val');

convertBtn.addEventListener('click', function () {
  //lengthVal.textContent = 'Changed';
  let convertNum = document.getElementById('convert-num').value;

  lengthVal.innerHTML = `${convertNum} Meters = ${convertLength(
    convertNum
  ).toFixed(3)} feet | ${convertNum} Feet = ${convertLengthimp(
    convertNum
  ).toFixed(3)} meters`;

  volumeVal.innerHTML = `${convertNum} Liters = ${convertVolume(
    convertNum
  ).toFixed(3)} gallons | ${convertNum} Gallons = ${convertVolumeimp(
    convertNum
  ).toFixed(3)} liters`;

  weightVal.innerHTML = `${convertNum} Kilograms = ${convertMass(
    convertNum
  ).toFixed(3)} pounds | ${convertNum} Pounds = ${convertMassimp(
    convertNum
  ).toFixed(3)} kilograms`;
});

function convertLength(val) {
  return val * 3.281;
}

function convertVolume(val) {
  return val * 0.264;
}

function convertMass(val) {
  return val * 2.204;
}

function convertLengthimp(val) {
  return val / 3.281;
}

function convertVolumeimp(val) {
  return val / 0.264;
}

function convertMassimp(val) {
  return val / 2.204;
}
