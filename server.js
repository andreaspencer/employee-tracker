const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',

    password: 'acidpops',
    database: 'employeeDB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId + "\n");
    firstPrompt();
});

function firstPrompt() {
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles","View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
    })
    .then(answers => {
        console.log(answers.task);
        switch (answers.task) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            default:
                connection.end()
                break;
        }
    });
}

function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        firstPrompt();
    })
}

function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, data) {
        console.table(data);
        firstPrompt();
    })
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        firstPrompt();
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What is the department that you want to add?"
        },
    ])
    .then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Successfully Added!");
            firstPrompt();
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "enter title:"
        },
        {
            type: "number",
            name: "salary",
            message: "enter salary:"
        },
        {
            type: "number",
            name: "department_id",
            message: "enter department ID:"
        }
    ])
    .then(function (res) {
        connection.query("INSERT INTO role (title, salary, department_id) values (?, ?, ?)", [res.title, res.salary, res.department_id], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted!");
        })
        firstPrompt();
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "role_id",
            message: "What is the employees role ID?",
        },
        {
            type: "number",
            name: "manager_id",
            message: "What is the employee's manager's ID?"
        }
    ])
    .then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.first_name, res.last_name, res.role_id, res.manager_id], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            firstPrompt();
        })
    })
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: "input",
            name:'name',
            message: "Which employee would you like to update? (use first name only)"
        },
        {
            type: "number",
            name: "role_id",
            message: "Enter the new role ID:"
        }
    ])
    .then(function (res) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [res.role_id, res.name], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted!");
        })
        firstPrompt();
    })
}

function updateEmployeeManager() {
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: "Which employee would you like to update? (first name only)",
        },
        {
            type: "number",
            name: "manager_id",
            message: "Enter new manager ID:"
        }
    ])
    .then(function (res) {
        connection.query("UPDATE employee SET manager_id = ? Where first_name = ?", [res.manager_id, res.name], function(err,data) {
            if (err) throw err;
            console.table("Successfully Inserted!");
        })
        firstPrompt();
    })
}