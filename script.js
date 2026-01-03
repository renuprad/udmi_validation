dataArray = myGlobalValue;
console.log('There correct devices list is 2nd time:', myGlobalValue);
createTable(dataArray);

function createTable(array) {
	
	// Get the container element from the HTML
	const container = document.getElementById('table-container');
	
	
	// Create table and tbody elements
	const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        
        // Create a new table row (tr)
        const row = document.createElement('tr');

        // Loop through the array and create table cells (td)
        Object.keys(array).forEach(key => {
        console.log(array[key]);
        const cell = document.createElement('td');
        cell.textContent = array[key]; // Set the cell text to the array item
        row.appendChild(cell); // Add the cell to the row
    });
        
         // Add the row to the tbody
         tbody.appendChild(row);
         // Add the tbody to the table
        table.appendChild(tbody);
         // Add the final table to the container in the HTML
       container.appendChild(table);
}
