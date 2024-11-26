import express from "express";
import { config } from 'dotenv';
import path from 'path';
import morgan from "morgan";
import pg from 'pg';

config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
});

const __dirname = path.resolve(); 
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"public/html", "index.html")); // Envía el archivo HTML
});

app.listen(3000)
console.log('Server on port',3000)