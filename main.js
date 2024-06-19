let students = [
    { name: "John", age: "20", major: "Math" },
    { name: "Alice", age: "23", major: "Physics" },
    { name: "Bob", age: "25", major: "Chemistry" }
]

function renderShowTable(arr) {
    let newstudents = "";
    let tbody = document.querySelector("tbody")
    for (let i = 0; i < arr.length; i++) {
        newstudents += ` 
        <tr>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].major}</td>
            </tr>`
    }
    tbody.innerHTML = newstudents
}
document.querySelector(".showTablebtn").addEventListener("click", function () {
    renderShowTable(students)
})