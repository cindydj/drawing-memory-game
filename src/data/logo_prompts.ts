import BMW_LOGO from "../images/prompts/automotive_logos/bmw.png";
import GENERAL_MOTORS_LOGO from "../images/prompts/automotive_logos/general_motors.png";
import HONDA_LOGO from "../images/prompts/automotive_logos/honda.png";
import MERCEDES_BENZ_LOGO from "../images/prompts/automotive_logos/mercedes_benz.png";
import PORSCHE_LOGO from "../images/prompts/automotive_logos/porsche.png";
import TOYOTA_LOGO from "../images/prompts/automotive_logos/toyota.png";
import VOLKSWAGEN_LOGO from "../images/prompts/automotive_logos/volkswagen.png";

// Update this value to add or update emoji prompts.
export const AUTOMOTIVE_LOGO_PROMPT_INFO: {
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
  "General Motors": {
    source: GENERAL_MOTORS_LOGO,
    colors: [
      "#0472CA", // blue
      "#FFFFFF", // white
    ],
  },
  Honda: {
    source: HONDA_LOGO,
    colors: [
      "#000000", // black
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
