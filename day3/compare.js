let obj1 = {
    name:"Person 1",
    age:5
};

let obj2 = {
    name:"Person 1",
    age:5
};

var flag="Equal";

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag="not equal";
            break;
        }
    }
}
else {
    flag="not equal";
}
console.log("is object "+flag);