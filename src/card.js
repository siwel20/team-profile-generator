const generateCard = function (employee) {
    return `
    <div class="card m-3" style="width: 19rem;">
                <div class="bg-primary text-white card-body">
                    <h3 class="card-title">${employee.getName()}</h3>
                    <h4 class="card-text">
                        <i class="${employee.getRole() === "Manager" ? "fas fa-mug-hot" : employee.getRole() === "Engineer" ? "fas fa-glasses" : "fas fa-user-graduate"}"></i>
                        ${employee.getRole()}
                    </h4>
                </div>
                <div class="card-body">
                    <ul class="list-group border list-group-flush">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
                        <li class="list-group-item">
                            ${employee.getRole() === "Manager" ? "Office Number: " + employee.getOffice() : employee.getRole() === "Engineer" ? `Github: <a href='http://github.com/${employee.getGithub()}' target="_blank"> ${employee.getGithub()} </a>` :
                            "School: " + employee.getSchool()}</li>
                </div>
            </div>
    `
}

module.exports = generateCard;