const celsiusEl = document.getElementById("celsius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")


function computeTemp(event) {
  const currentValue = +event.target.value
  switch (event.target.name) {
    case "celsius":
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(1)
      kelvinEl.value = (currentValue + 273.32).toFixed(1)
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(1)
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(1)
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(1)
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(1)
      break;
    default:
      break;
  }
}