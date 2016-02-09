"use strict";

const express = require("express");
const app = express();
const path = require("path");

let PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, '/public')));

//catch all route
app.all("/*", (req, res)=>{
	res.status(200).send(`<!DOCTYPE html>\
								 <html>\
								 	<head>\
								 		<title>Mean To Do List App</title>\
								 		<base href="/">\
								 	<head>\
								 	<body>\
								 		<div ui-view></div>\
								 		<script src="bundle.js"></script>\
								 	</body>\
								 <html>\
							`);
});

//listen on port
app.listen(PORT, ()=>{
	console.log(`Server running on port ${PORT}`);
});