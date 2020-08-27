const express = require('express');

const app = express();

require('./database');

app.get('/',(req,res)=>{
    res.json({message:"Hello world"});
})

app.use(express.json());
app.use(require('./routes/products'));


app.listen('3000',()=>{
    console.log("Server on port 3000");
});