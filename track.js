// Sample data
const data = [
    { Name: 'Alice', Age: 24, City: 'New York' },
    { Name: 'Bob', Age: 30, City: 'Los Angeles' },
    { Name: 'Charlie', Age: 22, City: 'Chicago' },
    { Name: 'David', Age: 35, City: 'Houston' }
];

// Function to generate table rows based on data
function generateTable() {
    const tableBody = document.getElementById('tableBody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// Initialize table on page load
window.onload = generateTable;
