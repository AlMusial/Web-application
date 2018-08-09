import {MongoClient, Db} from "mongodb";
import { resolve } from "dns";

class Database {
    public db: Db = null;
    public connect(): Promise<void> {
        return new Promise<void>((resolve, reject) =>{
            MongoClient.connect("mongodb://localhost:27017/TODO",(err, db: any) =>{
                if(err){
                    console.log(`[MongoDB] Enable to connect (${err})`);
                    reject();
                } else {
                    this.db = db;
                    console.log('[MongoDB] connected successfully');
                    resolve();
                }
            })
        })
    }
}
export = new Database();