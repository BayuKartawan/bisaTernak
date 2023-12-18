import { db } from "../db.js";

export const getDataUser = (req, res) => {
  const q = "SELECT * FROM users WHERE uuid = ?";

  db.query(q, [req.body.uuid], (err, data) => {
    res.json(data)
  })

}