const montlyPayment = document.getElementById("calculated_amount");
const totalMoneyOwed = document.getElementById("total_owed");

function moneyCalculator(months, amount) {
  months = Number(months);
  amount = Number(amount);

  let percentage = percentageCalculator(amount, months);

  let totalOwed = amount * percentage;
  let montly = totalOwed / months;

  totalMoneyOwed.textContent = totalOwed.toFixed(2);
  montlyPayment.textContent = montly.toFixed(2);

  return {
    totalOwed,
    montlyPayment,
    percentage,
  };
}

function percentageCalculator(amount, months) {
  let percentage;

  //   try {
  //     if(amount < 30000 && months > 20) {
  //         timeSlider.value = 33.28;
  //         throw Error("Lenght too long for the amount");
  //     }
  //     if(amount > 150000 && months < 20) {
  //         timeSlider.value = 33.28;
  //         throw Error("Lenght too short for the amount");
  //     }
  //   } catch(e) {
  //     console.log(e.message);
  //   }

  if (months <= 16) {
    if (amount < 50000) {
      percentage = 1.44;
    } else if (amount < 150000) {
      percentage = 1.46;
    } else {
      percentage = 1.47;
    }
  }
  if (months > 16 && months <= 24) {
    if (amount < 50000) {
      percentage = 1.45;
    } else if (amount < 150000) {
      percentage = 1.47;
    } else {
      percentage = 1.49;
    }
  }
  if (months > 24 && months <= 30) {
    if (amount < 50000) {
      percentage = 1.46;
    } else if (amount < 150000) {
      percentage = 1.48;
    } else {
      percentage = 1.5;
    }
  }
  if (months > 30) {
    percentage = 1.51;
  }

  return percentage;
}

function amountSliderValue(slider) {
  let value = Math.round(slider.value / 8.33);
  let amount = 0;
  let increment;
  let steps = value - 11;

  if (value == 0) {
    return (amount = 5);
  }
  if (steps < -1 || steps == undefined) {
    steps += 12;

    increment = 5;

    amount = increment * steps;
    steps = value - 11 || 0;
  }

  if (steps >= -1) {
    if (steps == 1) {
      steps += 2;
    }
    if (steps == -1) {
      steps += 2;
    }
    if (steps == 0) {
      steps += 2;
    }
    steps += 1;

    increment = 50;
    amount = steps * increment;
  }

  return amount;
}

function timeSliderValue(slider) {
  let currentValue = Math.floor(slider.value / 4.16);

  return currentValue + 12;
}

export {
    moneyCalculator,
    percentageCalculator,
    amountSliderValue,
    timeSliderValue
}