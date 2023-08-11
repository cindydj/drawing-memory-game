import BMW_LOGO from "../images/prompts/car_logos/bmw.png";
import GATIK_LOGO from "../images/prompts/car_logos/gatik.png";
import GENERAL_MOTORS_LOGO from "../images/prompts/car_logos/general_motors.png";
import KODIAK_LOGO from "../images/prompts/car_logos/kodiak.png";
import MERCEDES_BENZ_LOGO from "../images/prompts/car_logos/mercedes_benz.png";
import MOTIONAL_LOGO from "../images/prompts/car_logos/motional.png";
import PORSCHE_LOGO from "../images/prompts/car_logos/porsche.png";
import TESLA_LOGO from "../images/prompts/car_logos/tesla.png";
import TOYOTA_LOGO from "../images/prompts/car_logos/toyota.png";
import VOLKSWAGEN_LOGO from "../images/prompts/car_logos/volkswagen.png";

// Update this value to add or update automotive logo prompts.
export const CAR_LOGO_PROMPT_INFO: {
  [promptName: string]: { source: string; colors: string[] };
} = {
  BMW: {
    source: BMW_LOGO,
    colors: [
      "#000000", // black
      "#FFFFFF", // white
      "#038DD6", // blue
    ],
  },
  Gatik: {
    source: GATIK_LOGO,
    colors: [
      "#6236CC", // indigo
      "#FFFFFF", // white
    ],
  },
  "General Motors": {
    source: GENERAL_MOTORS_LOGO,
    colors: [
      "#0472CA", // blue
      "#FFFFFF", // white
    ],
  },
  Kodiak: {
    source: KODIAK_LOGO,
    colors: [
      "#D01F2B", // red
      "#FFFFFF", // white
    ],
  },
  "Mercedes-Benz": {
    source: MERCEDES_BENZ_LOGO,
    colors: [
      "#000000", // black
      "#FFFFFF", // white
    ],
  },
  Motional: {
    source: MOTIONAL_LOGO,
    colors: [
      "#5D49F4", // indigo
      "#FFFFFF", // white
    ],
  },
  Tesla: {
    source: TESLA_LOGO,
    colors: [
      "#E82026", // red
      "#FFFFFF", // white
    ],
  },
  Toyota: {
    source: TOYOTA_LOGO,
    colors: [
      "#D1010F", // red
      "#FFFFFF", // white
    ],
  },
  Volkswagen: {
    source: VOLKSWAGEN_LOGO,
    colors: [
      "#2759A2", // blue,
      "#FFFFFF", // white
    ],
  },
  "Extra credit: Porsche (good luck lol)": {
    source: PORSCHE_LOGO,
    colors: [
      "#E5C35B", // yellow,
      "#000000", // black
      "#9B062C", // dark red,
      "#F7EAB2", // lighter yellow
    ],
  },
};
