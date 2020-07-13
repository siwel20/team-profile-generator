// links to Intern class
const Intern = require("../lib/Intern");
const intern = new Intern("Paul", 12, "aaa@gmail.com", "HighSchool");
// tests the intern object
test("creates an intern object", () => {

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test("gets intern name", () => {
    expect(intern.getName()).toEqual(expect.any(String));
})

test("gets intern id", () => {
    expect(intern.getId()).toEqual(expect.any(Number));
})

test("gets intern email", () => {
    expect(intern.getEmail()).toEqual(expect.any(String));
})

test("gets intern school info", () => {
    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("gets intern role", () => {
    expect(intern.getRole()).toBe("Intern");
})