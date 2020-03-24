// from data.js
var tableData = data;
var tableData = data;
var tbody = d3.select("tbody");
function buildTable(data_to_build_table_with) {
  tbody.html("");
  data_to_build_table_with.forEach(sighting => {
    var row = tbody.append("tr");
    // console.log(sighting);
    Object.values(sighting).forEach(value => {
      row.append("td").text(value);
      //   console.log(value);
    });
  });
}
d3.select("#filter-btn").on("click", () => {
  var userinput = d3.select("#datetime").node().value;
  //   console.log(userinput);
  var filteredData = tableData.filter(
    ufoObject => ufoObject.datetime == userinput
  );
  buildTable(filteredData);
});
buildTable(tableData);

// YOUR CODE HERE!
