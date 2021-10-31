const mysql = require("mysql");
const inquirer = require("inquirer");
const { connect } = require("http2");
const { allowedNodeEnvironmentFlags } = require("process");
require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',

    password: 'acidpops',
    database: 'employeeDB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connect.threadId);
    console.log("Employee Tracker")
    firstPrompt();
});

function firstPrompt() {

    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles","View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
    })
    .then(function ({ task }) {
        switch (task) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add All Employees":
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
        }
    });
}

function viewAllDepartments() {
    console.log("Viewing All Departments\n");

    var query =
}

