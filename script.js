const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

// ES5 CODE
// *********************************************************************

// checkBtn.addEventListener("click", isBirthdayLucky);

// function calculateSum() {
//   let birthDay = birthDate.value;
//   let dob = birthDay.replaceAll("-", "");
//   let sum = 0;
//   for (let x = 0; x < dob.length; x++) {
//     sum += Number(dob[x]);
//   }
//   return sum;
// }

// function checkBirthDayLucky() {
//   let lucky_Num = Number(luckyNum.value);
//   let sum = calculateSum();
//   if (lucky_Num && sum) {
//     if (sum % lucky_Num === 0) {
//       outputBox.innerText = "Hurray!! Your BirthDay is Lucky 🎉";
//     } else {
//       outputBox.innerText = "Sorry!! Your Birthday is not so Lucky 😔";
//     }
//   } else {
//     outputBox.innerText = "Birth Date and Lucky Number fields cannot be empty";
//   }
// }

// *********************************************************************

//ES6+ CODE

const calculateSum = () => {
  let dob = birthDate.value.replaceAll("-", "");
  let sum = 0;
  for (let x of dob) {
    sum += Number(x);
  }
  return sum;
};

const isBirthdayLucky = () => {
  let lucky_Num = Number(luckyNum.value);
  !(lucky_Num && calculateSum())
    ? (outputBox.innerText =
        "Birth Date and Lucky Number fields cannot be empty")
    : calculateSum() % lucky_Num === 0
    ? (outputBox.innerText = "Hurray!! Your BirthDay is Lucky 🎉")
    : (outputBox.innerText = "Sorry!! Your Birthday is not so Lucky 😔");
};

checkBtn.addEventListener("click", isBirthdayLucky);
