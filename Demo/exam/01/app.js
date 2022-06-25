window.addEventListener("load", solve);

function solve() {

  let inputs = {
    make: document.getElementById("make"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    fuel: document.getElementById("fuel"),
    originalCost: document.getElementById("original-cost"),
    sellPrice: document.getElementById("selling-price")
  }

  let publishButton = document.getElementById("publish");
  let profitElemtnt = document.getElementById("profit")

  let totalProfit = 0;


  publishButton.addEventListener("click", publishCar);

  function publishCar(e) {
    e.preventDefault();

    let carMake = inputs.make.value;
    let carModel = inputs.model.value;
    let carYear = inputs.year.value;
    let carFuel = inputs.fuel.value;
    let carOriginalCost = Number(inputs.originalCost.value);
    let carSellPrice = Number(inputs.sellPrice.value);

    if (carOriginalCost >= carSellPrice) {
      return;
    }

    if (carMake == "" || carModel == "" || carYear == "" || carFuel == "" || carOriginalCost == "" || carSellPrice == "") {
      return;
    }

    let tableRowElement = document.createElement("tr");

    let tableBody = document.getElementById("table-body");

    tableRowElement.innerHTML = `
    <td>${carMake}</td>
    <td>${carModel}</td>
    <td>${carYear}</td>
    <td>${carFuel}</td>
    <td>${carOriginalCost}</td>
    <td>${carSellPrice}</td>
    <td>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn sell">Sell</button>
    </td>
    `
    tableBody.appendChild(tableRowElement)
    clearForNewCar()
    let editButton = tableRowElement.querySelector(".edit");
    let sellButton = tableRowElement.querySelector(".sell");

    editButton.addEventListener("click", () => {
      inputs.make.value = carMake;
      inputs.model.value = carModel;
      inputs.year.value = carYear;
      inputs.fuel.value = carFuel;
      inputs.originalCost.value = carOriginalCost;
      inputs.sellPrice.value = carSellPrice;

      tableBody.removeChild(tableRowElement);
    })

    sellButton.addEventListener("click", () => {
      let soldCars = document.getElementById("cars-list");
      let carPrice = carSellPrice - carOriginalCost;
      let soldCardList = document.createElement("li");

      soldCardList.innerHTML = `
      <span>${carMake} ${carModel}</span>
      <span>${carYear}</span>
      <span>${carPrice}</span>
      `
      totalProfit += carPrice;
      profitCalc()
      soldCardList.classList.add("each-list")
      tableBody.removeChild(tableRowElement);
      soldCars.appendChild(soldCardList);
      console.log(totalProfit);
    })


    function clearForNewCar() {
      inputs.make.value = "";
      inputs.model.value = "";
      inputs.year.value = "";
      inputs.fuel.value = "";
      inputs.originalCost.value = "";
      inputs.sellPrice.value = "";
    }


    function profitCalc() {
      profitElemtnt.innerText = `${totalProfit.toFixed(2)}`;
    }
  }

}
