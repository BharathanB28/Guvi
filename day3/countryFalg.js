let XMLHttpRequest = require('xhr2');
let xhr=new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload=function(){
    let allCountry =JSON.parse(xhr.responseText);

    let flags=[];

    for (let flag of allCountry){
        flags.push(flag['flag']);
    }
    console.log(flags);
};

xhr.send();