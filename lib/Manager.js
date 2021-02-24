// Import Employee object from Employee.js
const Employee = require('./Employee');

// Create new Manager class from Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      // Calls the Employee constructor  
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}
// Export Manager object
module.exports = Manager;