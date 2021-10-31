USE employeeDB;

INSERT INTO department (name)
VALUES ("Disbatch");
INSERT INTO department (name)
VALUES ("Production");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Dispatcher", 50000, 1);
INSERT INTO role (title salary, department_id)
VALUES ("Head of Production", 60000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 70000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Project Leader", 100000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Project Manager", 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrea", "Spencer", 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Vanessa", "Gonzalez", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Johanna", "Rodriguez", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bryan", "Mora", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marjorie", "Joys", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Deanna", "Winter", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Smith", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joey", "Raf", 1, null);
