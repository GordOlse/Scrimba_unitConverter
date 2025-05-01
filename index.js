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
  console.log(convertNum);
});
