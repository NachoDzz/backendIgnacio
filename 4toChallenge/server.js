const express = require("express")
const route = require("./routes/route");

const app = express();
const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", express.static(__dirname + "/public"));

app.use("/api", route);


app.listen(PORT, (error) => {
    try {
        console.log(`Servidor escuchando en el puerto: ${PORT}`);
    } catch {
        console.log(error);
    }
});