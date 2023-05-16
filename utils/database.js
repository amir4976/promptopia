import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectToDb = async () => {
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('mongo db is connected already')
        return;
    }
} 