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

export const textVerificator = (text) => {
  let flag = true;
  let quantityOfLetters = 0;
  const quantityOfLettersPerWord = [];
  for (let i = 0; i <= text.length; i += 1) {
    if (i === text.length) quantityOfLettersPerWord.push(quantityOfLetters);
    if (text[i] !== ' ') {
      quantityOfLetters += 1;
    } else {
      quantityOfLettersPerWord.push(quantityOfLetters);
      quantityOfLetters = 0;
      if (text[i] === ' ') flag = true;
    }
  }
  quantityOfLettersPerWord.filter((number) =>
    number > 15 ? (flag = false) : null
  );
  return flag;
};
