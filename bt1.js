
// Bài 2:
// Bài tập: Tạo Form Nhập Thông Tin Student và Hiển Thị Ra Bảng
// Mô tả:
// Tạo một form HTML với các trường nhập liệu: Name, Age, Major, và một nút Submit.
// Khi người dùng nhấn vào nút Submit, thông tin sẽ lưu vào 1  mảng student và  hiển thị một bảng HTML ngay bên dưới form.
// Mỗi lần gửi form, một dòng mới sẽ được thêm vào bảng.
// Hướng dẫn chi tiết:
// Form HTML:
// Đặt các input fields (name, age, major) và một nút Submit bên trong một thẻ <form>. Đảm bảo các trường input có thuộc tính name phù hợp để dễ dàng truy cập thông qua JavaScript.
// Bảng HTML:
// Sử dụng thẻ <table> để tạo bảng. Sử dụng các thẻ <thead> và <tbody> để định dạng và quản lý các hàng và cột. Các cột của bảng sẽ được xác định trong <thead> (ví dụ: Name, Age, Major), và <tbody> sẽ chứa các hàng dữ liệu của sinh viên.
// JavaScript:
// Khởi tạo một mảng để lưu trữ các đối tượng sinh viên.
// Viết một hàm để lấy giá trị từ form sau khi người dùng nhấn nút Submit.
// Tạo một đối tượng mới từ các giá trị nhập và thêm vào mảng.
// Viết một hàm để cập nhật bảng HTML (<tbody>) dựa trên mảng đã được cập nhật.
// ※Chức năng bổ sung nếu còn thời gian:

// Chức năng Edit và Delete: Mỗi hàng trong bảng có các nút "Edit" và "Delete" để cho phép sửa đổi hoặc xóa thông tin của sinh viên.

// Tìm kiếm: Có thể tìm kiếm sinh viên theo tên để lọc dữ liệu trong bảng.

// let studentList = [{
//     name: "Le Van Nghia",
//     age: "23",
//     major: "PKL",

// }]
// function inputValue() {
//     let addStudents = new Object()
//     addStudents.name = document.querySelector(".inputName").value
//     addStudents.age = document.querySelector(".inputAge").value
//     addStudents.major = document.querySelector(".inputMajor").value
//     studentList.push(addStudents)
//     renderData(studentList)

// }
// inputValue.push(student)
// document.getElementById("btn").addEventListener("click", function () {
//     function renderData(arr) {
//         let tbody = document.querySelector("tbody")
//         let newStudents = " ";
//         for (let i in arr) {
//             newStudents += `
//         <tr>
//                 <th>${arr[i]}name</th>
//                 <th>${arr[i]}age</th>
//                 <th>${arr[i]}major</th>
//             </tr>`
//         }
//         tbody.innerHTML = newstudents
//     }
//     renderData(studentList)
// })

let studentList = [{
    name: "Le Van Nghia",
    age: "23",
    major: "PKL",
}];

function inputValue() {
    let addStudents = new Object();
    addStudents.name = document.querySelector(".inputName").value;
    addStudents.age = document.querySelector(".inputAge").value;
    addStudents.major = document.querySelector(".inputMajor").value;
    studentList.push(addStudents);
    renderData(studentList);
}
function renderData(arr) {
    let tbody = document.querySelector("tbody");
    let newStudents = "";
    for (let i in arr) {
        newStudents += `
                <tr>
                    <th>${arr[i].name}</th>
                    <th>${arr[i].age}</th>
                    <th>${arr[i].major}</th>
                </tr>`;
    }
    tbody.innerHTML = newStudents;
}
renderData(studentList);
