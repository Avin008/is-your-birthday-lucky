const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

checkBtn.addEventListener("click", checkBirthDayLucky);

//calculateSum
function calculateSum() {
  let birthDay = birthDate.value;
  let dob = birthDay.replaceAll("-", "");
  let sum = 0;
  for (let x = 0; x < dob.length; x++) {
    sum += Number(dob[x]);
  }
  return sum;
}

function checkBirthDayLucky() {
  let lucky_Num = Number(luckyNum.value);
  let sum = calculateSum();
  if (lucky_Num && sum) {
    if (sum % lucky_Num === 0) {
      outputBox.innerText = "BirthDay Lucky";
    } else {
      outputBox.innerText = "BirthDay not Lucky";
    }
  } else {
    outputBox.innerText = "both birthday and lucky No field should be filled";
  }
}
