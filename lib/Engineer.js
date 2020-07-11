const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // importing the child constructor - Employee in this case.
        super(name, id, email)
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}
// exports Engineer class
module.exports = Engineer;