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

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// Filter Button Feature to be consumed by HTML
// By adding this, we're linking our code directly to the filter button. 
// Also, by adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);



/* ------------------------------------ Note Section -----------------------------
D3 
- "What is D3": D3 is a JavaScript library that produces sophisticated and highly dynamic graphics 
in an HTML webpage. It is often used by data professionals to create dashboards, or a 
collection of visual data (such as graphs and maps), for presentation.
- "Listening for Activity on Webpage": Another aspect of D3.js is that it can listen for events that occur on a webpage, 
such as a button click. The next code we add will be tied to the filter button we'll build on our webpage.




*/