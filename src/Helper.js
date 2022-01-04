export const quantityFormatting = (value) => {
  const format = value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return format;
};

export const randomID = () => {
  const value =
    Math.random().toString(36).substring(2) + Date.now().toString(36);
  return value;
};
