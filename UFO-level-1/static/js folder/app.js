// from data.js
var tableData = data;

console.log('tableData:', tableData);

// Target the table body
var tableBody = d3.select('tbody');

console.log('tableBody:', tableBody);

function buildTable(someData){
  // clear the table
  tableBody.html("");
  // Append rows to the table body
  someData.forEach(row => {

    // Add a row to the table body
    var tableRow = tableBody.append('tr');

    // loop through the row (dictionary) and grab all of the values
    var rowValues = Object.values(row);

    // console.log('rowValues:', rowValues);

    rowValues.forEach(value => {
      var tableCell = tableRow.append('td');
      tableCell.text(value);
    });
  });
}
buildTable(tableData);

function rebuildTable(){
  buildTable(tableData);
}

var filter_button = d3.select("#filter-btn");
var reset_button = d3.select("#reset-btn");

function handleClick(){

    let date_filter = d3.select("#datetime").property('value');

    let city_filter = d3.select("#city").property('value');
    let state_filter = d3.select("#state").property('value');
    let country_filter = d3.select("#country").property('value');
    let shape_filter = d3.select("#shape").property('value');
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";
  

  var filtered = tableData.filter(item =>{

    return (!date_filter || (item.datetime === date_filter))&&
           (!city_filter || (item.city === city_filter)) &&
           (!state_filter || (item.state === state_filter)) &&
           (!country_filter || (item.country === country_filter)) &&
           (!shape_filter || (item.shape === shape_filter));
  });

  buildTable(filtered);
}

filter_button.on("click", handleClick);
reset_button.on("click", rebuildTable);