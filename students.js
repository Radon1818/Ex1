var StudentsList = require('./students.json');

exports.getAllStudents = function(){
	return StudentsList;
}

exports.getStudentByAverage = function(average){
	var arrey = new Array();
	for(var i in StudentsList.students)
	{
		if(StudentsList.students[i].average == average)
		{
			arrey.push(StudentsList.students[i]);
		}
	}
	return arrey;
}

exports.getStudentAverageById = function(id){
	var arrey = new Array();
	for(var i in StudentsList.students)
	{
		if(StudentsList.students[i].id == id)
		{
			arrey.push(StudentsList.students[i].average);
		}
	}
	return arrey;
}

exports.getExcellenceByYear = function(year){
	var arrey = new Array();
	for(var i in StudentsList.students)
	{
		if((StudentsList.students[i].year == year)&&(StudentsList.students[i].average >= 85))
		{
			arrey.push(StudentsList.students[i]);
		}
	}
	return arrey;
}