const query = require("../database");
const { randomUUID } = require("crypto");
const bcryptjs = require("bcryptjs");

async function register(req, res) {
  const { name, email, phoneNumber, password, confPassword } = req.body;

  if (
    name === undefined ||
    name === "" ||
    email === undefined ||
    email === "" ||
    phoneNumber === undefined ||
    isNaN(+phoneNumber) ||
    password === undefined ||
    password === "" ||
    confPassword === undefined ||
    confPassword === ""
  )
    return res.status(400).json("Invalid data!");

  if (password !== confPassword) return res.status(400).json("Password not match!");

  try {
    // logic handling
    const isDuplicate = await query(
      `
        SELECT id FROM users WHERE phone_number = ? OR email = ? 
    `,
      [phoneNumber, email]
    );

    if (isDuplicate.length > 0) return res.status(400).json("User already exists!");

    const salt = await bcryptjs.genSalt(12);
    const hash = await bcryptjs.hash(password, salt);

    await query(
      `
        INSERT INTO users (
            uuid, name, email, phone_number, password
        ) VALUES (
            ?, ?, ?, ?, ?
        );
    `,
      [randomUUID(), name, email, phoneNumber, hash]
    );

    return res.status(200).json("Register success!");
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}

async function login(req, res) {
  const {} = req.body;
  try {
    // logic handling
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}

module.exports = {
  register,
  login,
};
