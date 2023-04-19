const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authenticationRoute=require("./routes/authentication")
dotenv.config();
const cors=require("cors")
const app = express();
async function main(){
    mongoose.set("strictQuery", false)
    await mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology : true})
    .then(()=> console.log("DataBase is running!"))
    .catch(err => console.log(err))
}
main().catch(err => console.log(err))
app.use(cors())
app.use(express.json());
app.use("/api/authentication",authenticationRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`The server  is running on port ${process.env.PORT}`)
})















