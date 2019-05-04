---
title: "Upload CSV file using node"
subTitle: "Nodejs express app to upload a .csv file.Use of script to post the file"
date: "2018-03-18"
tags: ["nodejs","express"]
path: "/nodeUploadCsv/"
published: true
---

This blog makes uses a script file to upload a csv file data from a node expressjs application.

Start by creating a node app with express. This is what our index.js file would look like.

```
"use strict"

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

We will use the [fast-csv](http://c2fo.github.io/fast-csv) library
>```npm install fast-csv –-save```

After this let us add a new route to our index.js file.

```
//other requires
const csv = require("fast-csv")

app.post('/readCSV', (req, res) => {
    var csvData = {};
    var CSV_STRING = req.body;
    csv
    .fromString(CSV_STRING, {
        headers: ["count", "value"],
        ignoreEmpty: true
    })
    .on("data", function(data){
        csvData[data.value] = data
    })
    .on("end", function(){
        console.log(csvData);
        //make call to database
        res.send('Done');
    })
});
```
 

To get csv data in req.body we will use the [body-parser](https://github.com/expressjs/body-parser) package 

> ```npm install body-parser –save```

Now to use body parser add the text body parser.

```
const express = require('express')
const bodyParser = require('body-parser')
const csv = require("fast-csv")

const app = express()
app.use(bodyParser.text())  

```
 
Now to make the import faster lets create a script that will post the csv file to the server. Create a file name importCSV.sh. This is how the shell script will look like.

![image](https://user-images.githubusercontent.com/17777371/38450796-a74a445a-3a41-11e8-8246-53e233b95efd.png)

 
Now since the script and the csv file belong in the same directory, I did not have to alter path. But you can provide your own path to the csv file in the –data-binary property.
To run this
-	Start the server with node index.js
-	Open the git bash terminal and run importCSV.sh
This is how the request and response will look like

![image](https://user-images.githubusercontent.com/17777371/38450798-bc461014-3a41-11e8-9bf5-4368dee9fb5c.png)

![image](https://user-images.githubusercontent.com/17777371/38450810-d6f90f7e-3a41-11e8-8dcd-3d6bb10f832d.png)

You can find the code [here](https://github.com/dhruv004/nodeUploadCsv)