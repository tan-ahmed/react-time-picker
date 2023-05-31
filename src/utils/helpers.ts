export const createNumberArray = (length: number) => {
  return Array.from(Array(length), (_, i) => String(i + 1).padStart(2, "0"));
};
