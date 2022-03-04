const isTodayMonday = (timeZoneOffset = 0) => {
  const date = new Date();
  date.setUTCHours(timeZoneOffset);
  return date.getDay() === 1;
};

export default isTodayMonday;
