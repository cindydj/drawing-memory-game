import APPLIED_SLACKMOJI from "../images/prompts/slackmojis/applied.svg";
import CHEEMS_HMM_SLACKMOJI from "../images/prompts/slackmojis/cheems_hmm.png";
import NERVOUS_LOOK_SLACKMOJI from "../images/prompts/slackmojis/nervous_look.png";
import PITCHFORK_SLACKMOJI from "../images/prompts/slackmojis/pitchfork.png";
import THONKING_SLACKMOJI from "../images/prompts/slackmojis/thonking.png";

// Update this value to add or update slackmoji prompts.
export const SLACKMOJI_PROMPT_INFO: {
  [promptName: string]: { source: string; colors: string[] };
} = {
  ":pitchforks:": {
    source: PITCHFORK_SLACKMOJI,
    colors: [
      "#000000", // black
      "#5B0000", // brown
      "#FFFFFF", // white
    ],
  },
  ":thonking:": {
    source: THONKING_SLACKMOJI,
    colors: [
      "#FFCC4D", // yellow-ish
      "#F4900B", // orange
      "#664500", // dark brown
    ],
  },
  ":cheems_hmm:": {
    source: CHEEMS_HMM_SLACKMOJI,
    colors: [
      "#B97B2C", // dark tan
      "#DEC098", // tan
      "#000000", // black
    ],
  },
  ":nervous_look:": {
    source: NERVOUS_LOOK_SLACKMOJI,
    colors: [
      "#8F1201", // brownish-red
      "#D3781B", // tan
      "#000000", // black
      "#FFFFFF", // white
    ],
  },
};
