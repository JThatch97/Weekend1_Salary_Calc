$(document).ready(readyNow);

function readyNow(){
$('#submit').on('click', addEmployee)
};

function addEmployee(){
$('#employeeList').append();
};

class Employee {
    constructor(firstName, lastName, employeeId, employeeTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.employeeTitle = employeeTitle;
        this.annualSalary = annualSalary;
    }
};
