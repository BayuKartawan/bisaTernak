const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Ganti dengan username MySQL Anda
    password: 'password', // Ganti dengan password MySQL Anda
    database: 'bisaTernak', // Ganti dengan nama database Anda
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
    } else {
        console.log('Terhubung ke database!');
    }
});

// Endpoint untuk menambahkan pengguna baru
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    const addUserQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';

    db.query(addUserQuery, [email, password], (err, result) => {
        if (err) {
            console.error('Error menambahkan pengguna:', err);
            res.status(500).json({ message: 'Gagal menambahkan pengguna' });
        } else {
            console.log('Pengguna berhasil ditambahkan:', result);
            res.status(200).json({ message: 'Pengguna berhasil ditambahkan' });
        }
    });
});

// Endpoint untuk otentikasi pengguna
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const checkUserQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';

    db.query(checkUserQuery, [email, password], (err, result) => {
        if (err) {
            console.error('Error saat mengotentikasi pengguna:', err);
            res.status(500).json({ message: 'Gagal mengotentikasi pengguna' });
        } else {
            if (result.length > 0) {
                console.log('Pengguna berhasil diotentikasi:', result);
                res.status(200).json({ message: 'Pengguna berhasil diotentikasi' });
            } else {
                console.log('Pengguna tidak ditemukan');
                res.status(401).json({ message: 'Email atau kata sandi tidak valid' });
            }
        }
    });
});

const PORT = 5173;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
