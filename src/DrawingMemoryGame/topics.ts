export const TOPICS = {
  slackmojis: "Slackmoji",
  carLogos: "Car Logo",
};

export const convertTopicToPath = (topicName: string): string => {
  return `${topicName.toLowerCase().replace(" ", "-")}s`;
};
