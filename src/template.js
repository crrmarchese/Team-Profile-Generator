function teamGenerator(teamMembers) {
   return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <!-- Google fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
        <!-- Font Awesome -->
        <script src="https://kit.fontawesome.com/45e97f819a.js" crossorigin="anonymous"></script>
        <!-- MDB -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css" rel="stylesheet"/>
        <!-- Animate -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <!-- Custom Styles -->
        <link rel="stylesheet" href="assets/styles.css">
        <!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>       
    
    </head>
    <body>
        <div class="container-fluid d-flex w-100 h-100 mx-auto flex-column">
            <header class="text-white bg-red-600">
                <h1 class="display-3 text-center p-3">My Team</h1>
            </header>  
        </div>
        <div class="container mt-5">
            <main>
			    <div class="row">
                ${teamMembersGenerator(teamMembers)}
                </div>
            </main>
        </div>
        <!-- MDB -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.0.0/mdb.min.js"></script>  
</body>
</html>
                `
}

// Filter the array by role type and return the individual members
function teamMembersGenerator(teamMembers) {
    let output = [];
    let manager = teamMembers.filter(function(member) {
        if (member.getRole() === "Manager") {
            return member
        }
    });
    let engineer = teamMembers.filter(function(member) {
        if (member.getRole() === "Engineer") {
            return member
        }
    });
    let intern = teamMembers.filter(function(member) {
        if (member.getRole() === "Intern") {
            return member
        }
    });

    // Loop through array and push to output array

    manager.forEach((person) => {
        let managerData = managerTemplate(person);
        output.push(managerData);
    })

    engineer.forEach((person) => {
        let engineerData = engineerTemplate(person);
        output.push(engineerData);
    })

    intern.forEach((person) => {
        let internData = internTemplate(person);
        output.push(internData);
    })
    //for(let i=0;i<managers.length;i++){
    //let managerTemplate = generateManager(managers[i]);
    //output.push(managerTemplate)
    //}
}


// Template for manager answers
function managerTemplate(manager) {
return `
                    <div class="col col-lg-4 animate__animated animate__fadeIn">
                        <div class="card mb-4">
                            <div class="card-header bg-primary">
                                <h3 class="card-title fs-3 fw-bold mt-2 mb-4 text-white">${manager.getName()}</h3>
                                <h4 class="card-title fs-4 fw-bold text-white"><i class="fas fa-mug-hot me-2"></i>${manager.getRole()}</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${manager.getId()}</li>
                                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" target="_blank">${manager.getEmail()}</a></li>
                                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
`
}

// Template for Engineer answers
function engineerTemplate(engineer) {
 return `
                    <div class="col col-lg-4 animate__animated animate__fadeIn">
                        <div class="card mb-4">
                            <div class="card-header bg-primary">
                                <h3 class="card-title fs-3 fw-bold mt-2 mb-4 text-white">${engineer.getName()}</h3>
                                <h4 class="card-title fs-4 fw-bold text-white"><i class="fas fa-glasses me-2"></i>${engineer.getRole()}</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></li>
                                    <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}" target="_blank">GitHub: ${engineer.getGithub()}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
 `
}

// Template for Intern answers
function internTemplate(intern) {
 return `
                    <div class="col col-lg-4 animate__animated animate__fadeIn">
                        <div class="card mb-4">
                            <div class="card-header bg-primary">
                                <h3 class="card-title fs-3 fw-bold mt-2 mb-4 text-white">${intern.getName()}</h3>
                                <h4 class="card-title fs-4 fw-bold text-white"><i class="fas fa-user-graduate me-2"></i>${intern.getRole()}</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${intern.getId()}</li>
                                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></li>
                                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
 `


}

module.exports = teamGenerator