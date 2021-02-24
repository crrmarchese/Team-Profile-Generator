// Import Employee object from Employee.js
const Employee = require('./Employee');

// Create new Engineer class from Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
      // Calls the Employee constructor  
      super(name, id, email);
      this.github = github;
    }

    getGitHub() {
       return this.github; 
    }

    getRole() {
        return "Engineer";
    }
}

// Export Engineer object
module.exports = Engineer;