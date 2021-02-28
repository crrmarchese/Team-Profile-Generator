const Manager = require("../lib/Manager");

test("can set office number", () => {
    const officeNumber = "145";
    const employee = new Manager("Joe Smith", "1", "joesmith@gmail.com", officeNumber);

    expect(employee.officeNumber).toBe(officeNumber);

});


test("getRole() returns Manager", () => {
    const role = "Manager";
    const employee = new Manager("Joe Smith", "1", "joesmith@gmail.com");

    expect (employee.getRole()).toBe(role);
})
