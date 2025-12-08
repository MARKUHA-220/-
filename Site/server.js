import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Чтобы корректно работать с путями (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Раздаём статические файлы
app.use(express.static(path.join(__dirname, "public")));

// Старт сервера
app.listen(PORT, () => {
    console.log(`Сервер работает:  http://localhost:${PORT}`);
});
