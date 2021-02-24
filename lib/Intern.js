// Import Employee object from Employee.js
const Employee = require('./Employee');

// Create new Intern class from Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
      // Calls the Employee constructor  
      super(name, id, email);
      this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}
// Export Intern object
module.exports = Intern;