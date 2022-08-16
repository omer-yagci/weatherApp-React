export const setBgChange = (temp) => {
  if (temp >= 0 && temp <= 10) {
    return "lightblue";
  } else if (temp > 10 && temp <= 20) {
    return "yellow";
  } else if (temp > 20 && temp <= 30) {
    return "orange";
  } else if (temp > 30) {
    return "red";
  } else {
    return "black";
  }
};
