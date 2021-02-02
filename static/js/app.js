// import the data from data.js
// using const because I don’t want the variable to be reassigned or reused at all in our program. 
const tableData = data;

// Reference the HTML table using d3 to tell javascript what kind of file will use this data
var tbody = d3.select("tbody");

// we have the start of a clean table,
function buildTable(data) {
    tbody.html("");
  }

// tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr)
// In the next two lines of code, we'll append each value of the object to a cell in the table. In our editor, the next few lines of code will go inside our new function.

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
        }
      );
    });
  }


/* ------------------------------------ Note Section -----------------------------
D3 - D3 is a JavaScript library that produces sophisticated and highly dynamic graphics 
in an HTML webpage. It is often used by data professionals to create dashboards, or a 
collection of visual data (such as graphs and maps), for presentation.




*/