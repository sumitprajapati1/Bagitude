const express=require("express");
const app = express();
const cookieParser= require("cookie-parser");
const path =require("path");
const PORT = 5000

// Import routes
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

// Connect to MongoDB database
const db=require("./config/mongoose-connection");

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine', 'ejs');

// Routes
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.get('/', (req, res) => {
    res.send('hey');
});
app.listen(()=>{console.log(`Connected to port :${PORT}`)})