let employees = [];

$(document).ready(function(){
    $('#submit').on('click', function(){
        let newEmployee = new Employee($('#firstName').val(), $('#lastName').val(),
         $('#employeeId').val(), $('#employeeTitle').val(), $('#annualSalary').val(), );
         employees.push(newEmployee);
         updateEmployees();
    })
})

function updateEmployees(){
    let outputElement = $('#employeeList');
    outputElement.empty();
    for(employee of employees){
        outputElement.append('<li>' + employee.firstName + '</li>')
        console.log(employee)
    }
}

class Employee {
    constructor(firstName, lastName, employeeId, employeeTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.employeeTitle = employeeTitle;
        this.annualSalary = annualSalary;
    }
};

