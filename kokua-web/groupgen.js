//asks for number of students
var input = prompt("How many students are in your class?");
var studentnum = int(input);
var maxstudent = int(prompt("What's the largest number of students you want in each group?"));

//asks for student names 
for(i = 0; i < studentnum; i++){
	studentlist.push(prompt("Add a student name: "));
}

//chooses a random index
function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generates group names
function groupnumber(index){
	var num = str(index+1);
	var output = ("Group "+ num);
	return output;
}

//defines function to generate groups
function groupgenerator(){
	var studentgenlist = studentlist; 
	
	var groupnum = Math.ceil((studentgenlist.length/maxstudent));

//creates list of groups
	var grouplist = [];

//creates individual group list
	for(i = 0; i < groupnum; i++){
		var group = [] ;
		//adds individual group to master group list 
		grouplist.push(group);
	}

//adds students to individual lists
	for (i=0; i < len(studentgenlist); i++){
		var listindex = getRandomIndex(0, studentgenlist.legth-1);
		var groupindex = (i % groupnum);
		grouplist[groupindex].push(studentlist[listindex]);
		del(studentlist[listindex]);
	}

//prints lists in a comprehensive format
	for (i=0; i < studentgenlist.length; i++){	
		print(groupnumber((i)));
		var index = i; 
	}
		for(i=0; i < len(grouplist[index]); i++){
			print(grouplist[index][i]);
		}
}		