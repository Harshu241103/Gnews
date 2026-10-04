// Put your GNews API key here (get free ones at https://gnews.io)
// You can also add backup keys in this array so if one key reaches 100 reqs/day, it switches automatically!
export const API_KEYS = [
  process.env.REACT_APP_GNEWS_API_KEY,
  "f48d5fd5f338809cfd0cd8c90263139d", // Key 1
  // Add more keys here if you create additional free accounts:
  // "your_second_gnews_api_key",
  // "your_third_gnews_api_key",
].filter(Boolean);

export const API_KEY = API_KEYS[0];
