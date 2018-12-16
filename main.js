$(document).ready(readyNow);
let val = $('#textbox').val();
function readyNow(){
    $('#employeeList').append('<li>'+val+'</li>');
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

