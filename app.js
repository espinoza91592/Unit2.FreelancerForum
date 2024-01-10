// starting state
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//Select the priceValue to update its value dynamically when we get the average
const priceValue = document.querySelector("#priceValue");

//Create Table header
function createTableHeader(table) {
  //create thead
  const thead = document.createElement("thead");
  //create the header rows for table
  const headerRow = documents.createElements("tr");
  // create an array that will store all the headings
  const headers = ["Name", "Occupation", "Starting Price"];

  // **loop over to get every element 3X for each header**
  for (const header of headers) {
    // create a new table heading th
    // add the header text in between tags <th>Name</th>
    const th = document.createElement("th");
    //take the text from our header array and add it between th tags
    th.innerText = header;
    // take th and add it to tr
    headerRow.appendChild(th);
  }
  //*****Adding these outside the loop****
  // add headerRow to Thead
  thead.appendChild(headerRow);
  //add thead to table
  table.appendChild(thead);
}

// ************ Table Body/ Table Row*********************************

function createTableBody(table, freelancers) {
  // create tbody
  const tbody = document.createElement("tbody");

  for (const freelance of freelancers) {
    // create tr to put inside of tbody
    const tableRpw = document.createElement("tr");

    // Add name, occupation, price to each cell
    for (const key in freelance) {
      // create the td ----> <td> Dr. Slice </td>
      const td = document.createElement("td");
      // add data to td
      td.innerText = freelance[key];
      // add td's to tableRow
      tableRow.appendChild(td);
    }
    tbody.appendChild(tableRow);
  }
  // Add tbody to our table
  table.appendChild(tbody);
}

// Calculate the average starting price
function calculateAverageStartingPrice(freelancers) {
  const totalPrice = freelancers.reduce((prev, curr) => {
    const price = prev + curr.price;
    return price;
  }, 0);

  // get the average
  const averagePrice = totalPrice / freelancers.length;
  priceValue.innerText = Math.floor(averagePrice);
}

// add everything to our table
function appendTableToContainer(table) {
  // get root element
  const root = document.querySelector("#root");
  const h2 = document.createElement("h2");
  h2.innerText = "Available Freelancers";
  root.appendChild(h2);
  root.appendChild(table);
}

// render our display
function render(initialState) {
  const table = document.createElementTable("table");
  createTableHeader("table");
  createTableBody(table, initialState);
  appendTableToContainer(table);
  calculateAverageStartingPrice(freelancers);
}

render(freelancers);
