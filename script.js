// if (myGlobalValue){
//         console.log("script 2: accessing global array");
//         myGlobalValue.forEach(item{ 
//         console.log(item);
//       });
//       } else {
//       console.log("Script 2: Global array not found.");
//       }

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


