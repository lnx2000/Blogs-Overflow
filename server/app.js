var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require("./routes/posts")
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const dbURI = process.env.ATLAS_URI;


mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology : true});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("Database connection established successfully !!");
});

app.use(cors());
app.use(express.json());


app.get('/', (req, res) =>{
  res.redirect("/posts");
})

app.use('/posts', postRoutes);

app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
})

module.exports = app;
