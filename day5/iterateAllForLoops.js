const data = {
    "basics": {
      "name": "Bharathan",
      "label": "Programmer",
      "email": "bharathan655@gmail.com",
      "phone": "8248849911",
      "location": {
        "address": "No.95/2, Porchuguese Church 1st street",
        "postalCode": "600001",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "countryCode": "IND"
      }
    },
    "education": [
      {
        "institution": "Saveetha University",
        "url": "https://saveethauniversity.com/",
        "area": "Computer Science",
        "studyType": "Bachelor",
        "startDate": "01-May-2012",
        "endDate": "31-Jun-2016",
        "score": "7.0",
        "courses": ["Frontend Development"]
      }
    ],
    "skills": [
      {
        "name": "Web Development",
        "level": "Master",
        "keywords": ["HTML", "CSS", "JavaScript"]
      }
    ],
    "languages": [
      {
        "language": "Tamil, English",
        "fluency": "Native speaker"
      }
    ]
  }
  
  



// Using for...in loop to iterate over object properties
console.log("Using for...in loop:");
for (let key in data) {
  console.log(key, ":", data[key]);
}

// Using forEach to iterate over education array
console.log("\nUsing forEach:");
data.education.forEach(edu => {
  console.log("Institution:", edu.institution);
  console.log("Area:", edu.area);
});

// Using for...of loop to iterate over skills array
console.log("\nUsing for...of loop:");
for (let skill of data.skills) {
  console.log("Skill:", skill.name);
  console.log("Level:", skill.level);
}

// Using for loop to iterate over languages array
console.log("\nUsing for loop:");
for (let i = 0; i < data.languages.length; i++) {
  console.log("Language:", data.languages[i].language);
  console.log("Fluency:", data.languages[i].fluency);
}