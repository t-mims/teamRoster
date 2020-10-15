const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please provide the employee's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please provide an id number."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter employee's email address."
        },
        {
            type: "list",
            name: "role",
            message: "Please provide employee role or type.",
            choices: ["Employee", "Manager", "Intern", "Engineer"]
        }]);
}
let employees = [];
promptUser().then(function (answers) {
    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let officeNumber = "";
    let school = "";
    let github = "";
    if (answers.role === "Manager") {
        officeNumber = inquirer.prompt({
            type: "input",
            name: "officeNumber",
            message: "Please enter manager's office number"
        }).val()
        employees.push(new Manager(name, id, email, officeNumber));
    }
    else if (answers.role === "Intern") {
        school = inquirer.prompt({
            type: "input",
            name: "school",
            message: "Please enter intern's school name"
        }).val()
        employees.push( new Intern(name, id, email, school));
    }
    else if (answers.role === "Engineer") {
        github = inquirer.prompt({
            type: "input",
            name: "github",
            message: "Please enter Engineer's github username"
        }).val()
        employees.push(new Engineer(name, id, email, github));

    }
    else {
      employees.push(new Employee(name, id, email));
    }
});
const newHTML = render(employees)
fs.writeFile("team.html", newHTML, function (err) {
    if (err) {
        throw new Error("Sorry, ran into a problem.")
    }
    else {
        console.log("New team page successfully created.")
    }
});