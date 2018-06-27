// A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.

// Build arrays of objects that represent Employees, Departments, and Computers.
// Assign every resource a unique id property.
// Assign each employee to a department using a foreign key.
// Assign each employee a computer using a foreign key.
// Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using

const Employees = [
    {
        "employeeId": 1,
        "name": "Brett"
    },
    {
        "employeeId": 2,
        "name": "Austin"
    },
    {
        "employeeId": 3,
        "name": "Jacob"
    },
    {
        "employeeId": 4,
        "name": "Jordan"
    },
    {
        "employeeId": 5,
        "name": "Jenn"
    }
]

const Departments = [
    {
        "departmentId": 1,
        "department": "Sales"
    },
    {
        "departmentId": 2,
        "department": "Development"
    },
    {
        "departmentId": 3,
        "department": "Accounting"
    },
    {
        "departmentId": 4,
        "department": "Gif Finder"
    },
    {
        "departmentId": 5,
        "department": "Asscar Racer"
    }
]

const Computers = [
    {
        "computerId": 1,
        "computer": "Apple II"
    },
    {
        "computerId": 2,
        "computer": "Apple III"
    },
    {
        "computerId": 3,
        "computer": "Macintosh Classic II"
    },
    {
        "computerId": 4,
        "computer": "Apple IIc Plus"
    }
]

const matchMadeInHeaven = [
    {
        "nameId": 1,
        "departmentId": 4,
        "computerId": 1
    },
    {
        "nameId": 2,
        "departmentId": 5,
        "computerId": 1
    },
    {
        "nameId": 3,
        "departmentId": 2,
        "computerId": 2
    },
    {
        "nameId": 4,
        "departmentId": 1,
        "computerId": 3
    },
    {
        "nameId": 5,
        "departmentId": 3,
        "computerId": 4
    },
]