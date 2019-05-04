---
title: "InsertMany with Loopback"
subTitle: "Inserting a large amount of data in MongoDb with Loopback"
date: "2018-04-09"
tags: ["loopbackJs", "nodejs"]
path: "/loopbackInsertMany/"
published: true
---

I recently faced a challenge of inserting many records with loopback.The use case involved insertion on more than `100000+`(one hundred thousand) records.
To do this we will use the MongoDb driver method `insertMany`.

To access this we need to use database connector.

```
module.exports = function(User){
  var DbConnector = User.app.dataSources.db.connector;
  DbConnector.connect(function(err, db) {
      db.collection('users').insertMany(user, function(err, docs) {
        console.log(docs.length)
      })
  })
}
```

> With this implementation the time taken was reduced significantly.