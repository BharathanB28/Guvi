const dataForm = document.getElementById('form')
const dataTable = document.getElementById('dataTable')

dataForm.addEventListener('submit', function (element) {element.preventDefault()

    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const address = document.getElementById('address').value
    const pincode = document.getElementById('pincode').value
    const gender = document.querySelector('input[name="gender"]:checked').value
    const foodArray = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(checkbox => checkbox.value)
    const state = document.getElementById('state').value
    const country = document.getElementById('country').value

    const newRow = dataTable.insertRow(1)
    newRow.insertCell(0).textContent = firstName
    newRow.insertCell(1).textContent = lastName
    newRow.insertCell(2).textContent = address
    newRow.insertCell(3).textContent = pincode
    newRow.insertCell(4).textContent = gender
    newRow.insertCell(5).textContent = foodArray.join(', ')
    newRow.insertCell(6).textContent = state
    newRow.insertCell(7).textContent = country

    // Clear form fields
    dataForm.reset()
});