// links to Intern class
const Intern = require("../lib/Intern");
// tests the intern object
test("creates an intern object", () => {
    const intern = new Intern("Paul", 1, "aaa@gmail.com", "school");

    expect(intern.name).toBe("Paul");
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe("aaa@gmail.com");
    expect(intern.school).toBe("school");
});