import { convert } from "./utils.js";

export default function UnitConverter(root) {
  const inputEl = root.querySelector("[data-input]");
  const btnEl = root.querySelector("[data-btn]");

  const lengthEl = root.querySelector("[data-length]");
  const volumeEl = root.querySelector("[data-volume]");
  const massEl = root.querySelector("[data-mass]");

  btnEl.addEventListener("click", handleBtnClick);

  function handleBtnClick() {
    const amount = Number(inputEl.value);
    const result = convert(amount);

    renderConversion(amount, result);
  }

  function renderConversion(amount, result) {
    lengthEl.textContent = `${amount} meters = ${result.feet} feet | ${amount} feet = ${result.meters} meters`;
    volumeEl.textContent = `${amount} liters = ${result.gallons} gallons | ${amount} gallons = ${result.liters} liters`;
    massEl.textContent = `${amount} kilos = ${result.pounds} pounds | ${amount} pounds = ${result.kilos} kilos`;
  }
}
