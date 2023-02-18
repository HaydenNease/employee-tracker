USE employee_db;
INSERT INTO department (name)
VALUES
('Sales'), -- 1
('Accounting'), -- 2
('Human Resources'), -- 3
('Warehouse'), -- 4
('Quality Assurance'), -- 5
('Reception'), -- 6 
('Temp'); -- 7


INSERT INTO role (title, salary, department_id)
VALUES
('Branch Manager', 100000, 1), -- 1 --
('CFO', 215000, 1), -- 2 --
('Vice President', 180000, 1), -- 3 -- 
('Sales Manager', 130000, 1), -- 4 --
('Salesperson', 120000, 1), -- 5 -- 
('Head Accountant', 100000, 2), -- 6 -- 
('Accountant', 800000, 2), -- 7 --
('A to the BM', 12000, 1), -- 8 --
('Foreman', 70000, 4), -- 9 --
('H.R. Director', 150000, 3), -- 10 --
('Customer Relations', 90000, 5), -- 11 -- 
('Quality Assurance', 65000, 5), -- 12 --
('Receptionist', 40000, 6), -- 13 --
('Temp', 35000, 7); -- 14 --

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Michael', 'Scott', 1, 3),
('David', 'Wallace', 2, null),
('Dwight', 'Schrute', 8, 1),
('Jim', 'Halpert', 5, 1),
('Pam', 'Beasley', 6, 1),
('Andy', 'Bernard', 5, 1),
('Stanley', 'Hudson', 5, 1),
('Phyllis', 'Vance', 5, 1),
('Ryan', 'Howard', 14, 1),
('Creed', 'Bratton', 12, 1),
('Meridith', 'Palmer', 12, 1),
('Oscar', 'Nuñez', 7, 6),
('Kevin', 'Malone', 7, 6),
('Kelly', 'Kapoor', 11, 1),
('Toby', 'Flenderson', 11, 2),
('Jan', 'Levinson-Gould', 3, 2),
('Darryl', 'Philbin', 9, 3),
('Angela', 'Martin', 6, 1)