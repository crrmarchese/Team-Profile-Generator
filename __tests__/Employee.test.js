const Employee = require("../lib/Employee");

test("can set a employee name", () => {
    const name = "Rani";
    const employee = new Employee(name);

    expect(employee.name).toBe(name); //scale to compare

});

test("can set employee email", () => {
    const email = "joesmith@gmail.com";
    const employee = new Employee("Rani", 1, email);

    expect (employee.getEmail()).toBe("joesmith@gmail.com");
})