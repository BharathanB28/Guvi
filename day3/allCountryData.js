let XMLHttpRequest = require('xhr2');
let xhr=new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload=function(){
    let allCountry =JSON.parse(xhr.responseText);

    let datas=[];

    for (let data of allCountry){
        datas.push(data['name']);
        datas.push(data['region']);
        datas.push(data['subregion']);
        datas.push(data['population']);
    }
    console.log(datas);

};

xhr.send();