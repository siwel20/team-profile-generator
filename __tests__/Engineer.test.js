// links to Engineer class
const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Paul", 12, "aaa@gmail.com", "github");
// tests the Engineer object
test("creates an Engineer object", () => {

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
})

test("gets engineer name", () => {
    expect(engineer.getName()).toEqual(expect.any(String));
})

test("gets engineer id", () => {
    expect(engineer.getId()).toEqual(expect.any(Number));
})

test("gets engineer email", () => {
    expect(engineer.getEmail()).toEqual(expect.any(String));
})

test("gets engineer github username", () => {
    expect(engineer.getGitHub()).toEqual(expect.any(String));
})

test("gets engineer role", () => {
    expect(engineer.getRole()).toBe("Engineer");
})