// The 1D array data
// const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"];
// Function to create the table
function createTable(dataArray) {
	const table = document.getElementById('dataTable');
 	// Create header row
 	const headerRow = table.insertRow();
 	const headerCell = headerRow.insertCell();
 	headerCell.textContent = "Item Name"; // Give a meaningful header name
 	headerCell.style.fontWeight = "bold";
	// Iterate through the array and create a new row for each item
	dataArray.forEach(item => {
		const row = table.insertRow(); // Insert a new row at the end of the table
		const cell = row.insertCell(); // Insert a cell into the new row
		cell.textContent = item; // Set the cell's text content to the array item
	});
}

// Call the function when the page loads
createTable(correct_devices);
