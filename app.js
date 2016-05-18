var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var url = require('url');
var students = require('./students');

app.get('/',function(req,res){
	res.json("Root page");
});

app.get('/StudentsList',function(req,res){
	res.json(students.getAllStudents());
});
app.get('/StudentsAverage/:average',function(req,res){
	res.json(students.getStudentByAverage(req.params.average));
});
app.get('/StudentsAverageById/:id',function(req,res){
	res.json(students.getStudentAverageById(req.params.id));
});
app.get('/ExcellenceStudentsByYear/:year',function(req,res){
	res.json(students.getExcellenceByYear(req.params.year));
});

app.listen(port);
console.log("Listening on port - " + port);