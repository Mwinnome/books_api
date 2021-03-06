const express = require("express")
const booksRoute =require("./routes/booksRoute")
const logger =require("./middlewares/books.logger")


const app = express();

//middle ware
app.use(express.json())
app.use(logger)

app.use(booksRoute)

//home route
app.get("/", (req, res)=>{
    res.json("<h1>Welcome To Our Library</h1>")
})




const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING")
})