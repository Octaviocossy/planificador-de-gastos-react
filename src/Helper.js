export const quantityFormatter = (value) => {
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

export const dateGenerator = () => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return date.toLocaleDateString('es-ES', options);
};
