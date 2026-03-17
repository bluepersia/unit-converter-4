import { CONVERSIONS } from "./consts.js";

function convert(amount) {
  const footInMeters = 1 / CONVERSIONS.meterInFeet;
  const gallonInLiters = 1 / CONVERSIONS.literInGallons;
  const poundInKilos = 1 / CONVERSIONS.kilosInPounds;

  const feet = Math.round(amount * CONVERSIONS.meterInFeet * 1000) / 1000;
  const meters = Math.round(amount * footInMeters * 1000) / 1000;

  const gallons = Math.round(amount * CONVERSIONS.literInGallons * 1000) / 1000;
  const liters = Math.round(amount * gallonInLiters * 1000) / 1000;

  const pounds = Math.round(amount * CONVERSIONS.kilosInPounds * 1000) / 1000;
  const kilos = Math.round(amount * poundInKilos * 1000) / 1000;

  return {
    feet,
    meters,
    gallons,
    liters,
    pounds,
    kilos,
  };
}

export { convert };
