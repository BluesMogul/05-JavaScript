import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


// Comment
const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI)
async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: 'Cluster0',
        });
        console.log('Pinged Your Deployment + Connected to MongoDB Baby!');
    } catch (error) {
        console.log('DB connection unsuccessful!');
        throw error;
    }
}
export default dbConnect;