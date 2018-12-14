function addFirstName(){
    $('#employeeList').append('<li id="firstName"></li>')
    console.log(firstName);
}

function addLastName(){
    $('#employeeList').append('<li id="lastName"></li>')
    console.log(lastName);
}

function addEmployeeId(){
    $('#employeeList').append('<li id="employeeId"></li>')
    console.log(addEmployeeId);
}

function addEmployeeTitle(){
    $('#employeeList').append('<li id="employeeTitle"></li>')
    console.log(addEmployeeTitle);
}

function addAnnualSalary(){
    $('#employeeList').append('<li id="annualSalary"></li>')
    console.log(annualSalary);
}

function addEmployee(){
    $('#submit').on('click', addFirstName);
    $('#submit').on('click', addLastName);
    $('#submit').on('click', addEmployeeId);
    $('#submit').on('click', addEmployeeTitle);
    $('#submit').on('click', addAnnualSalary);
}