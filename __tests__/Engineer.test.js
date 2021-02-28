const Engineer = require("../lib/Engineer");

test("can set GitHub account", () => {
    const github = "githubuseraccount";
    const employee = new Engineer("Joe Smith", "1", "joesmith@gmail.com", github);

    expect(employee.github).toBe(github);

});

test("can get Github account with getGithub()", () => {
    const github = "githubuseraccount";
    const employee = new Engineer("Joe Smith", "1", "joesmith@gmail.com", github);

    expect(employee.getGithub()).toBe(github);

});

test("getRole() returns Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Joe Smith", "1", "joesmith@gmail.com");

    expect (employee.getRole()).toBe(role);
})
