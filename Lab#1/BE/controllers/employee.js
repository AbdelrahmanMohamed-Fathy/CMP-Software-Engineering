const employee = [
  { id: '1', name: 'Mohamed Sayed' },
  { id: '2', name: 'Abdelrahman Fathy' },
  { id: '3', name: 'test' }
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  let employeeToDelete = employee.findIndex(e => e.id == req.params.id)
  console.log("Deleted:", employee.splice(employeeToDelete, 1))
  res.status(200).json({ message: "successful" })
};

// TODO
exports.createEmployee = async (req, res, next) => {
  employee.push(req.body)
  console.log("Added:", req.body)
  res.status(200).json({ message: "successful" })
};
