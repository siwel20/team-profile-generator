const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const data = {}


const managerPrompt = () => {
    inquirer.prompt([{
            type: "iput",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the manager's employee id number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        },
        {
            type: "number",
            name: "office",
            message: "What is the manager's office number?"
        }
    ]).then(function (managerRes) {
        let managerName = managerRes.managerName;
        let managerId = managerRes.managerId;
        let managerEmail = managerRes.managerEmail;
        let office = managerRes.office;
        const manager = new Manager (managerName, managerId, managerEmail, office)
        data.push(manager);
        menuPrompt();
    })
}

const engineerPrompt = () => {
    inquirer.prompt([{
            type: "iput",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "number",
            name: "engineerId",
            message: "What is the engineer's employee id number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?"
        },
    ]).then(function (engineerRes) {
        let engineerName = engineerRes.engineerName;
        let engineerId = engineerRes.engineerId;
        let engineerEmail = engineerRes.engineerEmail;
        let github = engineerRes.github;
        const engineer = new Engineer (engineerName, engineerId, engineerEmail, github)
        data.push(engineer);
        menuPrompt();
    })
}

const internPrompt = () => {
    inquirer.prompt([{
            type: "iput",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "number",
            name: "internId",
            message: "What is the intern's employee id number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of the school the intern is attending?"
        },
    ]).then(function (internRes) {
        let internName = internRes.internName;
        let internId = internRes.internId;
        let internEmail = internRes.internEmail;
        let school = intern.school;
        const intern = new Intern (internName, internId, internEmail, school)
        data.push(intern);
        menuPrompt();
    })
}

// this menu prompt will ask the user if any more engineer's or intern's need to be added. 
const menuPrompt = () => {
    inquirer.prompt([{
        type: "list",
        name: "member",
        message: "Do you need to add anyone else to the team?",
        choices: ["Engineer", "Intern", "This is the team"]

    }])
    .then(function (res) {
        if (res.member === "Engineer") {
            return engineerPrompt();
        }
        if (res.member === "Intern") {
            return internPrompt();
        }
        if (res.member === "This is the team") {

            let m = generateTemplate();
            //info from generateTemplate is added to the body
            let body = generateBody(m);

            // writes/overwrites the file at this location. 
            fs.writeFileSync('./dist/index.html', body, function (err) {
                if (err) {
                    return console.log(err)
                }
            })
        }
    })
}


const generateTemplate = function () {
    let cardHtml = ''
    teamData.forEach(employee => {
        cardHtml += generateCard(employee);
    })
    console.log("Congratulations! Your team is complete.")
    return cardHtml;
}

managerPrompt();