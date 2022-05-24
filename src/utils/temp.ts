export const fahToCel = (fal: number) => {
  const cel = ((fal - 32) * (5 / 9)).toFixed(2);
  return cel;
};
