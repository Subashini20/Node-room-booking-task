const {MongoClient} = require("mongodb");

module.exports = {
    db: {},
    async connect() {
        try{
            //const client = await MongoClient.connect("mongodb://localhost:27017/?appname=MongoDB%20Compass%20Community");
            const client = await MongoClient.connect(process.env.Mongo_URI);
            //this.db = client.db("room_booking");
            this.db = client.db(process.env.Mongo_db);
            //console.log(this.db);
        } catch(err) {
            console.log(err)
        }
    }
}