const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

// Array for team members
const teamMembers = [];


function askManagerQuestions() {

inquirer
    .prompt([
      { // Manager name
        name: "manager_name",
        type: "input",
        message: "Who is the manager of this team?",
      },
      { // Manager ID
        name: "manager_id",
        type: "input",
        message: "What is the manager's ID number?",
      },
      { // Manager email
        name: "manager_email",
        type: "input",
        message: "What is the manager's email?",
      },
      { // Manager office number
        name: "manager_officeNumber",
        type: "input",
        message: "What is the manager's office number?",
      },
    ])
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.manager_name, managerAnswers.manager_id, managerAnswers.manager_email, managerAnswers.manager_officeNumber);
   
        teamMembers.push(manager);

       // addNewMember();

    })
    .catch(err => console.log(err));  
 }


    // Engineer Questions

    function askEngineerQuestions() {
    inquirer
        .prompt([
        { // Engineer role
            name: "engineer_name",
            type: "input",
            message: "What is the engineer's name?",
        },
        { // Engineer ID
            name: "engineer_id",
            type: "input",
            message: "What is the engineer's ID number?",
        },
        { // Engineer email
            name: "engineer_email",
            type: "input",
            message: "What is the engineer's email?",
        },
        { // Engineer - GitHub
            name: "engineer_github",
            type: "input",
            message: "What is the engineer's GitHub?",
        },
        ])
        .then((engineerAnswers) => {
         const engineer = new Engineer(engineerAnswers.engineer_name, engineerAnswers.engineer_id, engineerAnswers.engineer_email, engineerAnswers.engineer_github);
         
            teamMembers.push(engineer);
        
           // addNewMember();
        });  

    }

    // Intern Questions
    function askInternQuestions() {
        inquirer
            .prompt([
            { // Intern role
                name: "intern_name",
                type: "input",
                message: "What is the intern's name?",
            },
            { // Intern ID
                name: "intern_id",
                type: "input",
                message: "What is the intern's ID number?",
            },
            { // Intern email
                name: "intern_email",
                type: "input",
                message: "What is the intern's email?",
            },
            { // Intern - School
                name: "intern_school",
                type: "input",
                message: "What is the intern's school?",
            },
            ])
            .then((internAnswers) => {
             const intern = new Intern(internAnswers.intern_name, internAnswers.intern_id, internAnswers.intern_email, internAnswers.intern_school);
             console.log(intern);
               teamMembers.push(intern);
            
                //addNewMember();
            });  
    
        }




    
    