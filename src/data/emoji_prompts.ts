import CHEEMS_HMM_EMOJI from "../images/prompts/emojis/cheems_hmm.png";
import NERVOUS_LOOK_EMOJI from "../images/prompts/emojis/nervous_look.png";
import PITCHFORK_EMOJI from "../images/prompts/emojis/pitchfork.png";
import THONKING_EMOJI from "../images/prompts/emojis/thonking.png";

// Update this value to add or update emoji prompts.
export const EMOJI_PROMPT_INFO: {
  [promptName: string]: { source: string; colors: string[] };
} = {
  ":pitchforks:": {
    source: PITCHFORK_EMOJI,
    colors: [
      "#000000", // black
      "#5B0000", // brown
      "#FFFFFF", // white
    ],
  },
  ":thonking:": {
    source: THONKING_EMOJI,
    colors: [
      "#FFCC4D", // yellow-ish
      "#F4900B", // orange
      "#664500", // dark brown
    ],
  },
  ":cheems_hmm:": {
    source: CHEEMS_HMM_EMOJI,
    colors: [
      "#B97B2C", // dark tan
      "#DEC098", // tan
      "#000000", // black
    ],
  },
  ":nervous_look:": {
    source: NERVOUS_LOOK_EMOJI,
    colors: [
      "#8F1201", // brownish-red
      "#D3781B", // tan
      "#000000", // black
      "#FFFFFF", // white
    ],
  },
};
