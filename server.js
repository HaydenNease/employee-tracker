const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",
},
    console.log(`Connected to employee_db`)
);

const selectAll = async (table) => {
    return await db.promise().query('SELECT * FROM ' + table);
};

const insert = (table, data) => {
    db.query('INSERT INTO ?? SET ?', [table, data], (err) => {
        if (err) return console.error(err);
        console.log('\nSuccessfully Created!\n');
        init();
    });
};

const createEmployee = async () => {
    const [roleData] = await selectAll('role');
    const [employeeData] = await selectAll('employee');
    const roles = roleData.map(role => {
        return {
            name: role.title,
            value: role.id
        }
    });
    const managers = employeeData.map(employee => {
        return {
            name: employee.first_name + ' ' + employee.last_name,
            value: employee.id
        }
    });
    const answers = await prompt([
        {
            name: 'first_name',
            message: 'Welcome to Dunder Mifflin. What is you first name?'
        },
        {
            name: 'last_name',
            message: 'What is your last name?'
        },
        {
            type: 'rawlist',
            name: 'role_id',
            message: 'What is your role?',
            choices: roles,
        },
        {
            type: 'rawlist',
            name: 'manager_id',
            message: 'Who is your manager?',
            choices: managers,
        }
    ])
    insert('employee', answers);
};

const createRole = async () => {
  const [roleData] = await selectAll('role');
  const [departmentData] = await selectAll('department');
    const departments = departmentData.map(department => {
        return {
            name: department.name,
            value: department.id
        }
    });
    const answers = await prompt([
        {
            name: 'title',
            message: 'What is the new role`s title?'
        },
        {
            name: 'salary',
            message: 'What is the salary for the new role?'
        },
        {
            type: 'rawlist',
            name: 'department_id',
            message: 'What department does this new role belong to?',
            choices: departments,
        },
    ])
    insert('role', answers);
};

const createDepartment = async () => {
    const answers = await prompt([{
        name: 'name',
        message: 'What is the name of this new department?'
    }
    ])
    insert('department', answers);
}

const chooseOption = async (type) => {
    switch (type) {
        case 'View All Employees': {
            const [data] = await selectAll('employee');
            console.table(data);
            init();
            break;
        }
        case 'View All Departments': {
            const [data] = await selectAll('department');
            console.table(data);
            init();
            break;
        }
        case 'View All Roles': {
            const [data] = await selectAll('role');
            console.table(data);
            init();
            break;
        }
        case 'Create Employee': {
            await createEmployee();
            break;
        }
        case 'Create Department': {
            await createDepartment();
            break;
        }
        case 'Create Role': {
            await createRole();
            break;
        }
    }
}

const init = async () => {
    const answers = await prompt({
        type: 'rawlist',
        message: 'Why use many database when few do trick?',
        choices: [
            'View All Employees',
            'View All Roles',
            'View All Departments',
            'Add Employee',
            'Add Role',
            'Add Department',
        ],
        name: 'type',
    })
    chooseOption(answers.type)
}

init();