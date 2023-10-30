// Fetch data from the REST Countries API to populate the country cards
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const countryCards = document.getElementById('country-cards')

    data.forEach(country => {
        const card = document.createElement('div')
        card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12')
        card.innerHTML = `
            <div class="card">
                <div class="card-header text-white bg-black">
                        <h5>${country.name.common}</h5>
                    </div>
                <div class="card-body bg-info" ; color: white;">
                    <img div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card img.card-img-top src="${country.flags.png}" style="width: 100%; height: 180px;">                               
                    <p class="card-text">Capital: ${country.capital}</p>
                    <p class="card-text">Region: ${country.region}</p>
                    <p class="card-text">Country Code: ${country.cca3}</p>
                </div>
            </div>
        `
        countryCards.appendChild(card)
    })
})
