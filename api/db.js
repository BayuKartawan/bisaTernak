import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "BayuKarta.db_01",
    database: "bisaternak",
})