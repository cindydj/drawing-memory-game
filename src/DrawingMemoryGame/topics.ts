export const TOPICS = {
  slackmojis: "Slackmoji",
  carCompanyLogos: "Car Company Logo",
};

export const convertTopicToPath = (topicName: string): string => {
  return `/drawing-memory-game/build/${topicName
    .toLowerCase()
    .replace(" ", "-")}s`;
};
