import * as mongoose from 'mongoose';

export class myDB {

    public static async initDB() {
        return mongoose.connect('mongodb+srv://aashishthakur3069:aldebaran@cluster0.lry3sxh.mongodb.net/');
    }
    
    public static async closeCon() {
        return mongoose.connection.close(true);
    }
}