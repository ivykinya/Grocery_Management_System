let categories = [];

function addCategory() {

    let categoryInput = document.getElementById("categoryName");
    let category = categoryInput.value.trim();

    if (category === "") {
        alert("Please enter a category name.");
        return;
    }

    categories.push(category);

    categoryInput.value = "";

    displayCategories();
}

function displayCategories() {

    let table = document.getElementById("categoryTable");

    table.innerHTML = "";

    for (let i = 0; i < categories.length; i++) {

        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${categories[i]}</td>
                <td>
                    <button onclick="editCategory(${i})">Edit</button>
                    <button onclick="deleteCategory(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
}

function deleteCategory(index) {

    categories.splice(index, 1);

    displayCategories();
}

function editCategory(index) {

    let newCategory = prompt("Edit Category:", categories[index]);

    if (newCategory !== null && newCategory.trim() !== "") {

        categories[index] = newCategory.trim();

        displayCategories();
    }
}

function searchCategory() {

    let input = document.getElementById("searchCategory").value.toLowerCase();

    let rows = document.querySelectorAll("#categoryTable tr");

    rows.forEach(row => {

        let category = row.cells[1].textContent.toLowerCase();

        if (category.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}