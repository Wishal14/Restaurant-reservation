import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URL, {
            dbName: "RESTAURANT"
        })
        .then(() => {
            console.log("Connected to Database Successfully!")
        })
        .catch(err => {
            console.log(`Some Error Occured While Connecting to Database ${err}`);
        });
};