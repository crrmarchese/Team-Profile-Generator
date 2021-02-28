const Employee = require("../lib/Employee");

test("can set an employee name", () => {
    const name = "Rani";
    const employee = new Employee(name);

    expect(employee.name).toBe(name); //scale to compare

});

test("can set an employee ID", () => {
    const id = "100";
    const employee = new Employee("Joe Smith", id, "joesmith@gmail.com");

    expect(employee.id).toBe(id);

});

test("can set an employee email", () => {
    const email = "joesmith@gmail.com";
    const employee = new Employee("Joe Smith", "12", email);

    expect(employee.email).toBe(email);

});

test("can get employee Name with getName()", () => {
    const name = "Joe Smith";
    const employee = new Employee(name, "12", "joesmith@gmail.com");

    expect(employee.getName()).toBe(name);

});

test("can get employee Id with getId()", () => {
    const id = "100";
    const employee = new Employee("Joe Smith", id, "joesmith@gmail.com");

    expect(employee.getId()).toBe(id);

});


test("can get employee email with getEmail()", () => {
    const email = "joesmith@gmail.com";
    const employee = new Employee("Joe Smith", "1", email);

    expect (employee.getEmail()).toBe(email);
})

test("getRole() returns Employee", () => {
    const role = "Employee";
    const employee = new Employee("Joe Smith", "1", "joesmith@gmail.com");

    expect (employee.getRole()).toBe(role);
})
