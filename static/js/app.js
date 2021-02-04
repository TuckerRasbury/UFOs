// ------------------------------- ESTABLISH THE ORIGINAL DATA ------------------------------------
// from data.js
const tableData = data;

// ------------------------------- CODE TO BUILD/MODIFY A TABLE ------------------------------------
// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// ------------------------------- DELIVERABLE #1 ------------------------------------
// 1. Create a variable to keep track of all the filters as an object.
// Rationale - let allows the block to be updated, but not altered using let again. This will be good since filters are repeatedly updated.
// citation: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
let filters = {};

// 3. Use this function to update the filters.
// will replace your handleClick() function and update the "filters" variable from step 1. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this).select("input"); //input fills let filters={};

    // 4b. Save the value that was changed as a variable, from 4a.
    let elementValue = changedElement.property("value");

    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  // will filter the table data by the value that is entered for the "id" that has changed  
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
  // Line reac
  d3.selectAll(".filter").on("change", updateFilters)
  
  // Build the table when the page loads
  buildTable(tableData);
