/*eslint-env browser*/

var $ = (id) => {
    return document.getElementById(id);
};


// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var form = $("addForm");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var numberEmployees = 0;



// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    "use strict";
    var id, fullName, ext, email, department, employeesTable;

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    id = $("id").value;
    fullName = $("name").value;
    ext = $("extension").value;
    email = $("email").value;
    department = $("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    employeesTable = $("employees");

    var newRow = employeesTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var idCell = newRow.insertCell();
    var nameCell = newRow.insertCell();
    var extCell = newRow.insertCell();
    var emailCell = newRow.insertCell();
    var deptCell = newRow.insertCell();
    var delBtnCell = newRow.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(window.document.createTextNode(id));
    nameCell.appendChild(window.document.createTextNode(fullName));
    extCell.appendChild(window.document.createTextNode(ext));
    emailCell.appendChild(window.document.createTextNode(email));
    deptCell.appendChild(window.document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    var delButton = window.document.createElement("button");
    delButton.appendChild(window.document.createTextNode("X"));
    delBtnCell.appendChild(delButton);
    delButton.addEventListener("click", deleteEmployee);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    ++numberEmployees;

    $("empCount").textContent = "(# Employees: " + numberEmployees + ")";
});

// DELETE EMPLOYEE
var deleteEmployee = (e) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
        var index = e.target.parentNode.parentNode.rowIndex;
        $("employees").deleteRow(index);
        --numberEmployees;
        $("empCount").textContent = "(# Employees: " + numberEmployees + ")";
    }

};