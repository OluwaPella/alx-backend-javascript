export default function createReportObject(report) {
  return {
    allEmployees: {
      ...report,
    },
    getNumberOfDepartments(empList) {
      return Object.keys(empList).length;
    },
  };
}
