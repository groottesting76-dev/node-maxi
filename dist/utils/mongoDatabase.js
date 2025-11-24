import { MongoClient, Db } from 'mongodb';
let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(`mongodb+srv://db_user1:${encodeURIComponent("Test@123")}@cluster1.tho3ycr.mongodb.net/?appName=Cluster1`).then((client) => {
        _db = client.db("feed");
        callback();
    }).catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });
};
const getDb = () => _db;
export { mongoConnect, getDb };
//# sourceMappingURL=mongoDatabase.js.map