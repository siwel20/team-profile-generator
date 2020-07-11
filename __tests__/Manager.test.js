// links to Manager class
const Manager = require("../lib/Manager");
const manager = new Manager("Paul", 1, "aaa@gmail.com", 15);
// tests the manager object
test("creates an manager object", () => {
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("gets manager name", () => {
    expect(manager.getName()).toEqual(expect.any(String));
})

test("gets manager id", () => {
    expect(manager.getId()).toEqual(expect.any(Number));
})

test("gets manager email", () => {
    expect(manager.getEmail()).toEqual(expect.any(String));
})

test("gets manager office number", () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test("gets manager role", () => {
    expect(manager.getRole()).toBe("Manager");
})