// links to Manager class
const Manager = require("../lib/Manager");
// tests the manager object
test("creates an manager object", () => {
    const manager = new Manager("Paul", 1, "aaa@gmail.com", 15);

    expect(manager.name).toBe("Paul");
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe("aaa@gmail.com");
    expect(manager.officeNumber).toBe(15);
});