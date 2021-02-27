const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const templateGenerator = require("./src/template");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const teamGenerator = require("./src/template");

const requiredQuestion = async (input) => {
    if (input === "") {
       return 'This question is required';
    }
    return true;
  };

// Array for team members
const teamMembers = [];


function askManagerQuestions() {

inquirer
    .prompt([
      { // Manager name
        name: "manager_name",
        type: "input",
        message: "Who is the manager of this team?",
        validate: requiredQuestion,
      },
      { // Manager ID
        name: "manager_id",
        type: "input",
        message: "What is the manager's ID number?",
        validate: requiredQuestion,
      },
      { // Manager email
        name: "manager_email",
        type: "input",
        message: "What is the manager's email?",
        validate: requiredQuestion,
      },
      { // Manager office number
        name: "manager_officeNumber",
        type: "input",
        message: "What is the manager's office number?",
        validate: requiredQuestion,
      },
    ])
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.manager_name, managerAnswers.manager_id, managerAnswers.manager_email, managerAnswers.manager_officeNumber);
   
        teamMembers.push(manager);

        addNewMember();

    })
    .catch(err => console.log(err));  
 }

 // Call askManager function to start questions
 askManagerQuestions();


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
        
            addNewMember();
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
             
                teamMembers.push(intern);
            
                addNewMember();
            });  
    
        }

    // Menu to ask Intern or Engineer questions
    function addNewMember() {
        inquirer
            .prompt([
            { // Choose the role to add
                name: "new_role",
                type: "list",
                message: "What new role do you want to add?",
                choices: ["Engineer", "Intern", "I'm done"],
            },
        ])
        .then((newMemberAnswers) => {
            if (newMemberAnswers.new_role ==="Engineer") {
                askEngineerQuestions();
            } else if (newMemberAnswers.new_role === "Intern") {
                askInternQuestions();
            } else {
                buildHTML();
            }
        });
    }

    // Build HTML file
    function buildHTML() {
        try {
            fs.writeFileSync(path.join(__dirname, '/dist','sample.html'),teamGenerator(teamMembers), 'utf-8');
        } catch(err) {
            console.log(err);
        }
    
    }




    
    