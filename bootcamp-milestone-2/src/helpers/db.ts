// db.ts
import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
console.log(url + "is the url, sophia");
let connection: typeof mongoose;

if (!url) {
  console.log("URL is not defined.");
}

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    console.log("Trying to connect...");
    connection = await mongoose.connect(url);
    console.log("Database connected");
    return connection;
  }
};

export default connectDB;