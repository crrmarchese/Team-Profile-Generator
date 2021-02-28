const Intern = require("../lib/Intern");

test("can set school", () => {
    const school = "UMass";
    const employee = new Intern("Joe Smith", "1", "joesmith@gmail.com", school);

    expect(employee.school).toBe(school);

});

test("can get school name with getSchool()", () => {
    const school = "UMass";
    const employee = new Intern("Joe Smith", "1", "joesmith@gmail.com", school);

    expect(employee.school).toBe(school);

});

test("getRole() returns Intern", () => {
    const role = "Intern";
    const employee = new Intern("Joe Smith", "1", "joesmith@gmail.com");

    expect (employee.getRole()).toBe(role);
})
