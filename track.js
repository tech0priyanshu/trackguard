// Sample data for the table
const data = [
    { name: "Alice Johnson", age: 25, city: "New York" },
    { name: "Bob Smith", age: 30, city: "Los Angeles" },
    { name: "Catherine Lee", age: 22, city: "Chicago" },
    { name: "David Brown", age: 28, city: "Houston" },
    { name: "Eva Green", age: 26, city: "Phoenix" }
];

// Function to populate the table with data
function populateTable() {
    const tableBody = document.getElementById("tableBody");
    
    data.forEach(item => {
        const row = document.createElement("tr");
        
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
        
        const ageCell = document.createElement("td");
        ageCell.textContent = item.age;
        row.appendChild(ageCell);
        
        const cityCell = document.createElement("td");
        cityCell.textContent = item.city;
        row.appendChild(cityCell);
        
        tableBody.appendChild(row);
    });
}

// Initialize the table on page load
document.addEventListener("DOMContentLoaded", populateTable);
