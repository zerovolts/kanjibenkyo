const trueFalseNull = (condition, truePath, falsePath, nullPath) => {
  if (condition === true) {
    return truePath;
  } else if (condition === false) {
    return falsePath;
  } else if (condition === null) {
    return nullPath;
  }
};

export { trueFalseNull };
