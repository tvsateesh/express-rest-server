const db = require('./../db/connection.js');
/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function getUserDetails( email, callback ) {
	var client ;
	try {   
		client = await db.connectingDB();
		console.log("DB Connection Success ");
		//throw 'working';
		const result = await client.db("stock-db").collection("users").findOne({ email: email });
		if (result) {
			console.log(`Found a listing in the collection with the name ${email}`);
			console.log(result);
		} else {
			console.log(`No listings found with the name ${email }'`);
		}
		console.log("Able to connect DB");
		callback(null, result);
	}catch(e){
		console.error("DB Connection error");
		console.error(e);
		console.log("===============");
	}finally{
        }
};
async function init(){
	return client;
}

exports.getUser = getUserDetails;
