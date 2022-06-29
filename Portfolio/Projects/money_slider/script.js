import * as calculate from './sliderCalculation.js'

const timeSlider = document.getElementById("time_slider");
const amountSlider = document.getElementById("loan_slider");

const timeForLoan = document.getElementById("time_length");
const loanAmount = document.getElementById("loan_amount");

const totalMonths = document.getElementById("loan_period");
const montlyPayment = document.getElementById("calculated_amount");
const totalMoneyOwed = document.getElementById("total_owed");


let months = calculate.timeSliderValue(timeSlider);
let amount = calculate.amountSliderValue(amountSlider) * 1000;

window.addEventListener("load", () => {
  totalMonths.textContent = calculate.timeSliderValue(timeSlider);
  calculate.moneyCalculator(months, amount);
});

timeSlider.addEventListener("input", () => {
  timeForLoan.textContent = calculate.timeSliderValue(timeSlider);
  totalMonths.textContent = calculate.timeSliderValue(timeSlider);
  months = calculate.timeSliderValue(timeSlider);
  calculate.moneyCalculator(months, amount);
});

amountSlider.addEventListener("input", () => {
  loanAmount.textContent = `${calculate.amountSliderValue(amountSlider)} 000`;
  amount = calculate.amountSliderValue(amountSlider) * 1000;
  calculate.moneyCalculator(months, amount);
});
