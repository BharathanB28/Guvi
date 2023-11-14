const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000; 

app.use(bodyParser.json());

// API endpoints will go here

app.get('/', (req, res) => {
    res.send('Hello, This is Bharathan, Welcome to your Node.js API!');
  });

// endpoint to create a txt file with current time stamp

app.post('/createFile', (req, res) => {
  const folderPath = 'D:/GUVI/roadMapTask/day37'; 

  const currentDate = new Date();
  const fileName = `${currentDate.toISOString().replace(/:/g, '-')}.txt`;
  const filePath = `${folderPath}/${fileName}`;

  const fileContent = currentDate.toString();

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('File created successfully');
    }
  });
});

// endppoint to view the current time stamp
app.get('/getAllFiles', (req, res) => {
  const folderPath = 'D:/GUVI/roadMapTask/day37'; 

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const textFiles = files.filter((file) => file.endsWith('.txt'));
      res.status(200).json({ files: textFiles });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
