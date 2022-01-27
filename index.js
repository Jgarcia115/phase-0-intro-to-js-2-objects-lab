const employee = {
    name: "Jon",
    streetAddress: "1234 Farm Ave"
};

function updateEmployeeWithKeyAndValue(employee, name, value) {
    return {
        ...employee,
    [name]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}