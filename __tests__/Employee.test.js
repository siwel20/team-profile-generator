//links to Employee class
const Employee = require("../lib/Employee");
// tests employee object
test("creates an employee object", () => {
    const employee = new Employee("Paul", 1, "aaa@gmail.com");

    expect(employee.name).toBe("Paul");
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe("aaa@gmail.com");
});