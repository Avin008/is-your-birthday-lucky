const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

checkBtn.addEventListener("click", checkBirthDayLucky);

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
      outputBox.innerText = "Hurray!! Your BirthDay is Lucky 🎉";
    } else {
      outputBox.innerText = "Sorry!! Your Birthday is not so Lucky 😔";
    }
  } else {
    outputBox.innerText = "Birth Date and Lucky Number fields cannot be empty";
  }
}
