/**
 * @return {string} -- Current month name
 */
const getCurrentMonthName = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return months[new Date().getMonth()];
};

/**
 * @return {string} -- ISO format of current date
 */
const getFormattedDate = () => {
  return new Date().toISOString().split('T')[0];
};

module.exports = {
  getCurrentMonthName,
  getFormattedDate
}