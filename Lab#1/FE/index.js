function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm')
        // TODO
        // add event listener to delete button
        deleteCell.addEventListener("click", () => { deleteEmployee(item.id) })
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
document.getElementById("submitbtn").addEventListener("click", createEmployee)



// TODO
function createEmployee(event) {
  // get data from input field
  // send data to BE
  // call fetchEmployees

  // this is for firefox
  // for some reason it doesnt work on firefox without this
  event.preventDefault()

  let name = document.getElementById("name").value
  let id = document.getElementById("id").value
  console.log(id, name)
  if (name == "" || id == "")
    return
  fetch("http://localhost:3000/api/v1/employee/",
    {
      method: "POST",
      body: JSON.stringify({
        id: id,
        name: name
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  ).then(response => response.json())
    .then(fetchEmployees)
}

// TODO
function deleteEmployee(id) {
  // get id
  // send id to BE
  // call fetchEmployees
  fetch("http://localhost:3000/api/v1/employee/" + id,
    {
      method: "DELETE"
    }
  ).then(response => response.json())
    .then(fetchEmployees)

}

fetchEmployees()
