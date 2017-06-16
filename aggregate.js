
var mongo = require('mongodb').MongoClient

   mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    
	if(err)
		throw err;
	var parrots =db.collection('prices');
   parrots.aggregate([{ $match:{size: process.argv[2]}},{$group:{_id:'aver',aver:{$avg: '$price'}}}]).toArray(function(err,results){
	   var a = results[0].aver;
	   console.log(Number(a).toFixed(2))
	   db.close();
   })
	});

	