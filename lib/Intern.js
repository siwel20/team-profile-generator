const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // importing the child constructor - Employee in this case.
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}
// exports Intern class
module.exports = Intern;