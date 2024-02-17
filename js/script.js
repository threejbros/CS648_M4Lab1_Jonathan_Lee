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
    var newRow = window.document.createElement("tr");
    employeesTable.appendChild(newRow);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var idCell = window.document.createElement("td");
    newRow.appendChild(idCell);
    var nameCell = window.document.createElement("td");
    newRow.appendChild(nameCell);
    var extCell = window.document.createElement("td");
    newRow.appendChild(extCell);
    var emailCell = window.document.createElement("td");
    newRow.appendChild(emailCell);
    var deptCell = window.document.createElement("td");
    newRow.appendChild(deptCell);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(window.document.createTextNode(id));
    nameCell.appendChild(window.document.createTextNode(fullName));
    extCell.appendChild(window.document.createTextNode(ext));
    emailCell.appendChild(window.document.createTextNode(email));
    deptCell.appendChild(window.document.createTextNode(department));

    //-----------------ALT WAY of the previous 3 sections------------------
    // employeesTable = $("employees");
    // var newRow = `
    //             <tr>
    //                 <td>${id}</td>
    //                 <td>${fullName}</td>
    //                 <td>${ext}</td>
    //                 <td>${email}</td>
    //                 <td>${department}</td>
    //             </tr>
    //             `;
    // employeesTable.innerHTML += newRow;
    //---------------------------------------------------------------------

    // CREATE THE DELETE BUTTON
    var delButton = window.document.createElement("button");
    delButton.appendChild(window.document.createTextNode("X"));
    newRow.appendChild(delButton);

    // RESET THE FORM
    form.reset();
    // id = "";
    // fullName = "";
    // ext = "";
    // email = "";
    // department = "";

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    ++numberEmployees;
});

// DELETE EMPLOYEE