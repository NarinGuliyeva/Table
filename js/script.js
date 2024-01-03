let arr = [
    {
      firstName: "Jhon",
      lastName: "Doe",
      age: 40,
      mail: "jhon.doe@example.com",
      address: "NewYork",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Steve",
      lastName: "Jobs",
      age: 40,
      mail: "steve.jobs@example.com",
      address: "Florida",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },

    {
      firstName: "Smith",
      lastName: "Jhonson",
      age: 27,
      mail: "jhon.doe@example.com",
      address: "Washington",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },

    {
      firstName: "Chris",
      lastName: "Evans",
      age: 35,
      mail: "jhon.doe@example.com",
      address: "Hawaii",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Redd",
      lastName: "Kelly",
      age: 37,
      mail: "jhon.doe@example.com",
      address: "Texas",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Ortiz",
      lastName: "Morgan",
      age: 56,
      mail: "jhon.doe@example.com",
      address: "Califronia",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Murry",
      lastName: "Murphy",
      age: 34,
      mail: "jhon.doe@example.com",
      address: "Ohio",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Green",
      lastName: "Adams",
      age: 23,
      mail: "jhon.doe@example.com",
      address: "Alaska",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Turner",
      lastName: "Dias",
      age: 42,
      mail: "jhon.doe@example.com",
      address: "Ohio",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Nelson",
      lastName: "Rivera",
      age: 40,
      mail: "jhon.doe@example.com",
      address: "Virginia  ",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Miller",
      lastName: "Davis",
      age: 20,
      mail: "jhon.doe@example.com",
      address: "Texas",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Martinez",
      lastName: "Lopez",
      age: 41,
      mail: "jhon.doe@example.com",
      address: "NewYork",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Taylor",
      lastName: "Gonzales",
      age: 35,
      mail: "jhon.doe@example.com",
      address: "California",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Martin",
      lastName: "Perez",
      age: 47,
      mail: "jhon.doe@example.com",
      address: "California",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Young",
      lastName: "Walker",
      age: 27,
      mail: "jhon.doe@example.com",
      address: "Texas",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
    {
      firstName: "Hill",
      lastName: "Flores",
      age: 28,
      mail: "jhon.doe@example.com",
      address: "Washington",
      phone: "555-785-99-68",
      birthDate: "01.01.2000",
    },
  ];

  let root = document.getElementById("root");
  let div = document.createElement("div");
  div.setAttribute("class", "container");
  root.append(div);
  let table = document.createElement("table");
  div.appendChild(table);
  table.setAttribute(
    "class",
    "table table-hover table-bordered table-striped text-center  border-dark"
  );

  let thead = document.createElement("thead");
  thead.setAttribute("class", "table-dark");
  let tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);
  let tr = document.createElement("tr");
  thead.append(tr);

  // BIRINCI YOL
//   tr.innerHTML = `<th>Name</th>
//   <th>Surname</th>
//   <th>Age</th>
//   <th>Mail</th>
//   <th>Adress</th>
//   <th>Phone</th>
//   <th>Birthday</th>
//   `;

  //   IKINCI YOL
  for( let key in arr[0]) {
      let th = document.createElement("th")
      th.innerHTML=`${key}`
      tr.append(th)
  }

  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    for (let key in arr[i]) {
      let td = document.createElement("td");
      td.innerHTML = `${arr[i][key]}`;
      tr.append(td);
    }
    tbody.append(tr);
    // DIGER YOL
    // tr.innerHTML = `
    // <td>${arr[i].firstName}</td>
    // <td>${arr[i].lastName}</td>
    // <td>${arr[i].age}</td>
    // <td>${arr[i].mail}</td>
    // <td>${arr[i].address}</td>
    // <td>${arr[i].phone}</td>
    // <td>${arr[i].birthDate}</td>
    // `
 
  }

  // Diger yol
  //   let newArr = arr.map((item) => {
  //     return `<tr>
  //     <td>${item.firstName}</td>
  //     <td>${item.lastName}</td>
  //     <td>${item.age}</td>
  //     <td>${item.mail}</td>
  //     <td>${item.address}</td>
  //     <td>${item.phone}</td>
  //     <td>${item.birthDate}</td> </tr>`;
  //   });
  //   tbody.innerHTML = newArr.join("");

  // UCUNCU YOL
  //   let keys = Object.keys(arr[0])
  //   for(let i = 0 ;i<keys.length ; i++  ) {
  //     let th = document.createElement("th");
  //     th.append(keys[i]);
  //     thead.append(th);
  //   }

  // TEKRAR UCUN
  //   let values = Object.values(arr[0])
  //   let entries = Object.entries(arr[0])
  //   let obj = Object.assign({},arr[0])