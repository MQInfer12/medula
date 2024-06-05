const COLORS = ["#7768ae", "#e15554", "#e1bc29", "#3bb273", "#009ee3"];
const TEXTS = [
  "text-first",
  "text-second",
  "text-third",
  "text-fourth",
  "text-fifth",
];
const BGS = [
  "bg-first",
  "bg-second",
  "bg-third",
  "bg-fourth",
  "bg-fifth",
];

export const getRandomText = () => {
  const random = Math.floor(Math.random() * 5);
  return TEXTS[random];
};

export const getRandomBg = () => {
  const random = Math.floor(Math.random() * 5);
  return BGS[random];
};

export const getRandomColor = () => {
  const random = Math.floor(Math.random() * 5);
  return COLORS[random];
};
