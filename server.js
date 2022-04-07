const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
// var corsOption = {
//     origin:"http://localhost:8080"
// };
// app.use(cors(corsOption));

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.json({message: "Sequel Tutorial"});
});

// DB Connection
const db = require("./app/models");
db.sequelize.sync();

// Define Routes
require("./app/routes/tutorial.routes")(app);
require("./app/routes/image.routes")(app);

// path upload
global.__basedir = __dirname;

const dirname = path.resolve();
app.use("/resources/uploads/", express.static(path.join(dirname, "/resources/uploads/")));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});