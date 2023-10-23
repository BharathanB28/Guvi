
//Get all the countries from Asia continent /region using Filter function

let XMLHttpRequest = require('xhr2')
let xhr=new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload = function () {        
    var countryData = JSON.parse(this.response)
    const asia = countryData.filter((element) => {
    return element.region === 'Asia'})
    console.log(asia)
}
xhr.send()

    
//Get all the countries with population of less than 2 lacs using Filter function

let XMLHttpRequest = require('xhr2')
let xhr=new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload=function (){
    var countryData=JSON.parse(this.response)
    const population=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(population)
}
xhr.send()


//Print the following details name, capital, flag using forEach function.

let XMLHttpRequest = require('xhr2')
let xhr=new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload=function (){
    var countryData=JSON.parse(this.response)
    countryData.forEach((element)=>{
        console.log(element.name.common,element.capital,element.flag)
    })
}
xhr.send()


//Print the total population of countries using reduce function 

let XMLHttpRequest = require('xhr2')
let xhr=new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload=function (){
    var allCountry=JSON.parse(this.response)
    const population=allCountry.reduce((acc,element)=>{
    return acc+element.population
    },0)
    console.log(population)
}
xhr.send()


//Print the country which uses US Dollars as currency.

let XMLHttpRequest = require('xhr2')
let xhr=new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload = function () {       
    const allCountry = JSON.parse(xhr.response)
    const usDollarCountries = allCountry.filter(country => {
    return country.currencies && country.currencies.USD
    })    
    usDollarCountries.forEach(country => {
    console.log(country.name.common)
    })      
}    
xhr.send()
    
        
   