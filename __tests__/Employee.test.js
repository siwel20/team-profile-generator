//links to Employee class
const Employee = require("../lib/Employee");
const employee = new Employee("Paul", 11, "aaa@gmail.com");
// tests employee object
test("creates an employee object", () => {

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee name", () => {
    expect(employee.getName()).toEqual(expect.any(String));
})

test("gets employee id", () => {
    expect(employee.getId()).toEqual(expect.any(Number));
})

test("gets employee email", () => {
    expect(employee.getEmail()).toEqual(expect.any(String));
})

test("gets employee role", () => {
    expect(employee.getRole()).toBe("Employee");
})