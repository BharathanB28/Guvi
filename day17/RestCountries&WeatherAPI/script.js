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
                <div class="card-body" style="background: linear-gradient(to right,#D0C09D,#4E5D59); color: white;">
                    <img div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card img.card-img-top src="${country.flags.png}" style="width: 100%; height: 180px;">                               
                    <p class="card-text">Capital: ${country.capital}</p>
                    <p class="card-text">Region: ${country.region}</p>
                    <p class="card-text">Country Code: ${country.cca3}</p>                                
                    <button class="btn btn-primary bg-transparent border-white" onclick="fetchWeather('${country.capital}')">Click for Weather</button>
                    <div id="${country.capital}-weather"></div>
                </div>
            </div>
        `
        countryCards.appendChild(card)
    })
})

// Function to fetch and display weather data for a specific city
function fetchWeather(city) {
// Replace with your OpenWeatherMap API key
const apiKey = '9b3abd72af5e8ee4c215adb53b59b0e5'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(weatherData => {
        const temperature = (weatherData.main.temp - 273.15).toFixed(2) // Convert from Kelvin to Celsius
        const weatherDescription = weatherData.weather[0].description

        const weatherInfo = `
            <h3>Weather in ${city}</h3>
            <p>Temperature: ${temperature}°C</p>
            <p>Weather: ${weatherDescription}</p>
        `;

        const weatherContainer = document.getElementById(`${city}-weather`)
        weatherContainer.innerHTML = weatherInfo
    })
    .catch(error => {
        console.error('Failed to fetch weather data:', error)
    });
}
