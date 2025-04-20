let form = document.getElementById("studentForm")
let table = document.getElementById("studentTable")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.querySelector('input[name="gender"]:checked').value
    let course = document.getElementById("course").value
    let email = document.getElementById("email").value

    let newRowData = table.insertRow()
    newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
`;
form.reset();
})  

function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
}
