"use strict";

const express = require("express");
const app = express();

let PORT = process.env.PORT || 3000;

//catch all route
app.all("/*", (req, res)=>{
	res.status(404).send(`<h1>Oops, that page isnt available! Try to enter it again or refresh the page.</h1>`);
});

//listen on port
app.listen(PORT, ()=>{
	console.log(`Server running on port ${PORT}`);
});