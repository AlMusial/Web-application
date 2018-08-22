"use strict";
const mongodb_1 = require("mongodb");
class Database {
    constructor() {
        this.db = null;
    }
    connect() {
        return new Promise((resolve, reject) => {
            mongodb_1.MongoClient.connect("mongodb://localhost:27017/TODO", (err, db) => {
                if (err) {
                    console.log(`[MongoDB] Enable to connect (${err})`);
                    reject();
                }
                else {
                    this.db = db;
                    console.log('[MongoDB] connected successfully');
                    resolve();
                }
            });
        });
    }
}
module.exports = new Database();
//# sourceMappingURL=Database.js.map