// if (myGlobalValue){
//         console.log("script 2: accessing global array");
//         myGlobalValue.forEach(item{ 
//         console.log(item);
//       });
//       } else {
//       console.log("Script 2: Global array not found.");
//       }

const container = document.getElementById('data-container');
console.log(container);

const dataArray = container.getAttribute('data-array-values');
console.log(dataArray);

if (dataArray){
	const myArray = JSON.parse(dataArray);
	console.log("External Script: Accessing array via data attribute:", myArray);
} else {
	console.log("External Script: Data attribute not found.");
}
	

createTable(myGlobalValue);

const leng = myGlobalValue.length;
console.log(leng);

function createTable(dataArray) {
	const table = document.getElementById('dataTable');
 	
 	const headerRow = table.insertRow();
 	const headerCell = headerRow.insertCell();
 	headerCell.textContent = "Correct Devices"; // Give a meaningful header name
 	headerCell.style.fontWeight = "bold";
	
	dataArray.forEach(item => {
		const row = table.insertRow(); // Insert a new row at the end of the table
		const cell = row.insertCell(); // Insert a cell into the new row
		cell.textContent = item; // Set the cell's text content to the array item
	});
}


