export const getDateString = (dateString) => {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const finalDate = day + "/" + month + "/" + year;
  return finalDate;
};