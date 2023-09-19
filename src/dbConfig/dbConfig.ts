import mongoose, { connection } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('Mongo Connection success');
        connection.on('error',(err)=>{
            console.log('Mongo Connection Error'+err);
            process.exit();
        })
        })
    } catch (error) {
        console.log('Something went wrong with db connection!');
        console.log(error);
    }
}