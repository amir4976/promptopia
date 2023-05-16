import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectToDb = async () => {
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('mongo db is connected already')
        return;
    }


    try {
        await mongoose.connect(process.env.MONGODB_URI , {
            dbName:'Share_prompt',
            useNewUrlParser:true,
            useUnifiedTopology:true

        })
        isConnected=true
        console.log('mongodb connected')
    } catch (error) {
        console.log(error);
    }

} 