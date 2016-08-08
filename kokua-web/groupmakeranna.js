//creates list for students
var studentlist = [];
//creates variable for number of groups
var groupnum = 0;
//creates variable for maximum number of students for group
var maxstudent = 0;
//creates list of groups
var grouplist = [];

function popupgroup() {
	maxstudent = 0;
	var input = prompt("Enter the number of Students per Group:"); //creates pop up	
	maxstudent = Number(input);
	while(Number.isInteger(maxstudent)== false) {
		input = prompt("ERROR! Enter an integer value.");
		maxstudent = Number(input);
	}
	localStorage.setItem("number", maxstudent); //storing
	var container = document.getElementById('numberdata');
	container.innerHTML = localStorage.getItem("number") + "<br>"; //stop it from printing whole list

}

function popup(){
	var name = window.prompt("Enter a student name:");
	studentlist.push(name);
	localStorage.setItem("name", name); //storing
	var container = document.getElementById('nameli');
	container.innerHTML += localStorage.getItem("name") + "<br>"; //stop it from printing whole list
}
	

//chooses a random index
function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//defines function to generate groups
function groupgenerator(){
	groupnum = 0; 
	grouplist = [];
	var studentgenlist = []; 
	studentgenlist = studentlist.slice();
	groupnum = Math.ceil(studentgenlist.length/maxstudent);


//creates individual group list
	for(i = 0; i < groupnum; i++){
		var group = [];
		//adds individual group to master group list 
		grouplist.push(group);
	}
//creates variable for repetitions 
	var repetition = studentgenlist.length;
//adds students to individual lists
	for(i=0; i < repetition; i++){
		var listindex = Math.floor(Math.random() * studentgenlist.length);
		var groupindex = (i % groupnum);
		grouplist[groupindex].push(studentgenlist[listindex]);
		studentgenlist.splice(listindex, 1);
	}

//sets div to variable
	var PrintThis = "";
//adds group numbers and individual groups div
	for(i=0; i < grouplist.length; i++){	
		PrintThis += "Group " + (i +1) + "<br>";
		var index = i; 
	
		for(j=0; j < grouplist[index].length; j++){
			PrintThis += grouplist[index][j] + "<br>";
		}
	}	
document.getElementById('grouplists').innerHTML = PrintThis;

}