const API = "http://localhost:3000/api/students";

async function loadStudents() {
    const response = await fetch(API);
    const result = await response.json();

    const list = document.getElementById("studentList");
    list.innerHTML = "";

    const students = result.data || result;

    students.forEach(student => {
        list.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>
                    <button onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

document.getElementById("studentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    });

    document.getElementById("studentForm").reset();

    loadStudents();
});

async function deleteStudent(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    loadStudents();
}

loadStudents();