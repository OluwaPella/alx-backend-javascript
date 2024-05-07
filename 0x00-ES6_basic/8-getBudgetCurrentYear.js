function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${year}`]: income,
    [`gdp-${year}`]: gdp,
    [`capita-${year}`]: capita,
  };
  return budget;
}
