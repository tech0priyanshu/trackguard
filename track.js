
// Delivery personnel data (India-based)
const deliveryData = [
    { Name: 'Ravi Kumar', WorkingHours: '40 hrs/week', Location: 'Mumbai', DeliveriesCompleted: 150 },
    { Name: 'Sita Sharma', WorkingHours: '35 hrs/week', Location: 'Delhi', DeliveriesCompleted: 120 },
    { Name: 'Rajesh Patel', WorkingHours: '45 hrs/week', Location: 'Ahmedabad', DeliveriesCompleted: 130 },
    { Name: 'Pooja Reddy', WorkingHours: '30 hrs/week', Location: 'Bengaluru', DeliveriesCompleted: 100 },
    { Name: 'Amit Gupta', WorkingHours: '50 hrs/week', Location: 'Kolkata', DeliveriesCompleted: 160 },
    { Name: 'Meena Singh', WorkingHours: '37 hrs/week', Location: 'Hyderabad', DeliveriesCompleted: 115 },
    { Name: 'Vikram Joshi', WorkingHours: '42 hrs/week', Location: 'Pune', DeliveriesCompleted: 135 },
    { Name: 'Anita Thakur', WorkingHours: '33 hrs/week', Location: 'Jaipur', DeliveriesCompleted: 110 }
];

// Function to generate table rows based on data
function generateTable() {
    const tableBody = document.getElementById('tableBody');
    deliveryData.forEach(person => {
        const tr = document.createElement('tr');
        Object.values(person).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);

// Sample data for the table
    

// Initialize the table on page load
document.addEventListener("DOMContentLoaded", populateTable);
    })}