/**
 *Interface
 */

interface IEmpFullName {
    fullName: string;
}

interface IEmpInfo {
    empId: number;
    age: number;
}

/**
 *Generic Classes
 */

class Employee<T>{
    employeeDetails: Array<T>;
    constructor(){
        this.employeeDetails= [];
    }
}

/**
 *creating data
 */

let firstData: IEmpFullName = {fullName: "Ajay Kumar"};
let secondData: IEmpInfo = {empId: 11234, age: 28};

/**
 *creating instance of class
 */

let empName: Employee<IEmpFullName> = new Employee<IEmpFullName>();
let empInfo: Employee<IEmpInfo> = new Employee<IEmpInfo>();

/**
 *pushing the value to class
 */

empName.employeeDetails.push(firstData);

empInfo.employeeDetails.push(secondData);

/**
 *checking the value has passed to class or not
 */

console.log(empName.employeeDetails);

console.log(empInfo.employeeDetails);