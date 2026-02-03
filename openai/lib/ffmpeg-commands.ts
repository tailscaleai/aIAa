export const getVerticalCrop = (width: number, height: number) => {
  const targetWidth = height * (9 / 16);
  const x = (width - targetWidth) / 2;
  return `crop=${targetWidth}:${height}:${x}:0`;
};