export const quantityFormatting = (value) => {
  const format = value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return format;
};
