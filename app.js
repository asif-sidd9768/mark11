const dateInput = document.querySelector("#datePicker");
const luckyNumber = document.querySelector("#luckyNumber");
const submitButton = document.querySelector("#submitButton");
const result = document.querySelector("#result");

const handleClick = () => {
  let dates = dateInput.value.split("-");
  let sumOfDate = 0;
  for (let date of dates) {
    sumOfDate += parseInt(date);
  }
  let isBdLucky = sumOfDate % parseInt(luckyNumber.value);
  if (!luckyNumber.value || luckyNumber.value == 0 || !dateInput.value) {
    result.innerHTML = `Enter a valid Data`;
  } else {
    if (isBdLucky === 0) {
      result.innerHTML = `${dates[2]} is lucky mate`;
      luckyNumber.value = ''
      dateInput.value = ''
      result.value = ''
    } else {
      result.innerHTML = `${dates[2]} is no lucky for you`;
      luckyNumber.value = ''
      dateInput.value = ''
      result.value = ''
    }
  }
};

submitButton.addEventListener("click", handleClick);
