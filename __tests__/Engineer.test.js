// links to Engineer class
const Engineer = require("../lib/Engineer");
// tests the Engineer object
test("creates an Engineer object", () => {
    const engineer = new Engineer("Paul", 1, "aaa@gmail.com", "github");

    expect(engineer.name).toBe("Paul");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe("aaa@gmail.com");
    expect(engineer.gitHub).toBe("github");
});