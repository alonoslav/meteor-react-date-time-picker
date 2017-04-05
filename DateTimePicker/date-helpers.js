const addLeadingZero = value => (parseInt(value, 10) < 10 ? `0${value}` : `${value}`);

export const getFormattedDate = date => {
  const jsonDate = date.toJSON();

  return jsonDate.slice(0, 10);
};


export const getFormattedTime = (date) => {
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());

  return `${hours}:${minutes}`;
};
