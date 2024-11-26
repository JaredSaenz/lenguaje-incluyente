import express from "express";
import path from 'path';
import morgan from "morgan";

const app = express();
app.use(morgan('dev'));

const __dirname = path.resolve(); 
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"public/html", "index.html")); // Envía el archivo HTML
});

app.listen(3000)
console.log('Server on port',3000)