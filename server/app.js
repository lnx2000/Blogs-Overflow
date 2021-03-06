var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require("./routes/posts")
const authRoutes = require("./routes/auth/auth");
const commentRoutes = require("./routes/comments");
const verify = require("./routes/auth/authVerify");
const parser = require('body-parser');
const { queryParser } = require('express-query-parser')
const urlencodedParser = parser.urlencoded({extended : false});
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
app.use(parser.json());
app.use(urlencodedParser)
app.use(
  queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: false
  })
);
app.get('/', verify, (req, res) =>{
  res.redirect("/posts");
})

app.use('/users/auth', authRoutes);

app.use('/posts', postRoutes);
app.use('/comment', commentRoutes);

app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
})

module.exports = app;
