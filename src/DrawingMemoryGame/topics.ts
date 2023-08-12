export const TOPICS = {
  slackmojis: "Slackmoji",
  carCompanyLogos: "Car Company Logo",
};

export const convertTopicToPath = (topicName: string): string => {
  return `${topicName.toLowerCase().replace(" ", "-")}s`;
};
