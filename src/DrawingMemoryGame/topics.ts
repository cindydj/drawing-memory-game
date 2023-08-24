import { BASE_URL } from "./router";

export const TOPICS = {
  slackmojis: "Slackmoji",
  carCompanyLogos: "Car Company Logo",
};

export const convertTopicToPath = (topicName: string): string => {
  return `${BASE_URL}/${topicName.toLowerCase().replace(" ", "-")}s`;
};
