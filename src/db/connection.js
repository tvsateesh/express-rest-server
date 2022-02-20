const { MongoClient } = require('mongodb');

//const client = connect();; 
async function connect() {
     /*if ( client ) {
        console.log("Already connection is existed ");
	return client;
     } */
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const DB_URI = process.env.MONGODB_URI;
    console.log("Creating connection");
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(DB_URI);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        //await listDatabases(client);
	
        console.log("Created DB connection");
    } catch (e) {
        console.log("Error in DB connection");
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        //await client.close();
    }
        console.log("undefined DB connection");
    
    return client;	
}


exports.connectingDB = connect; 
