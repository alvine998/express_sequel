const express = require("express");
const cors = require("cors");
const app = express();
var corsOption = {
    origin:"http://localhost:8081"
};
app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.json({message: "Sequel Tutorial"});
});

// DB Connection
const db = require("./app/models");
db.sequelize.sync({force: true}).then(()=>{
    console.log("Drop and re-sync db")
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});