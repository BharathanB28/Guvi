const dataForm = document.getElementById('form')
const dataTable = document.getElementById('dataTable')

dataForm.addEventListener('submit', function (element) {element.preventDefault()

    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const address = document.getElementById('address').value
    const pincodeRegex = /^\d{6}$/;
      const pincode = document.getElementById('pincode').value;

      if (!pincodeRegex.test(pincode)) {
        alert('Please enter a valid 6-digit pin code.');
        return;
      }
    const gender = document.querySelector('input[name="gender"]:checked').value
    const foodArray = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(checkbox => checkbox.value);

      if (foodArray.length < 2) {
        alert('Please select at least two food items.');
        return;
      }
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