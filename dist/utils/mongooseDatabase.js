import { connect } from "mongoose";
const mongooseConnect = async () => {
    try {
        await connect(`mongodb+srv://db_user1:${encodeURIComponent("Test@123")}@cluster1.tho3ycr.mongodb.net/?appName=Cluster1`, {
            dbName: "feed",
        });
        return "Connected to MongoDB via Mongoose";
    }
    catch (err) {
        throw new Error('Failed to connect to MongoDB via Mongoose: ' + err);
    }
};
export { mongooseConnect };
//# sourceMappingURL=mongooseDatabase.js.map