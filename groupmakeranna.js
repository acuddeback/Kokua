var studentlist = [];
var groupnum = 0;
var maxstudent = 0;
function popupgroup() {
	var input = prompt("Number of Students per Group:"); //creates pop up	
	maxstudent = Number(input);
	localStorage.setItem("number", maxstudent); //storing
	var container = document.getElementById('numberdata');
	container.innerHTML += localStorage.getItem("number") + "<br>"; //stop it from printing whole list

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

//generates group names
function groupnumber(index){
	var num = str(index+1);
	var output = ("Group "+ num);
	return output;
}

//defines function to generate groups
function groupgenerator(){
	var studentgenlist = studentlist; 
	groupnum = Math.ceil(studentgenlist.length/maxstudent);

//creates list of groups
	var grouplist = [];

//creates individual group list
	for(i = 0; i < groupnum; i++){
		var group = [] ;
		//adds individual group to master group list 
		grouplist.push(group);
	}

//adds students to individual lists
	for(i=0; i < studentgenlist.length; i++){
		var listindex = getRandomIndex(0, studentgenlist.length -1);
		var groupindex = (i % groupnum);
		grouplist[groupindex].push(studentgenlist[listindex]);
		studentgenlist.splice(listindex, 1);
	}
	
var printlist = [];

localStorage.setItem("groups", printlist); //storing
var container = document.getElementById('grouplists');
//prints lists in a comprehensive format
	for(i=0; i < grouplist.legth; i++){	
		container.innerHTML += localStorage.getItem(groupnumber(i));
	}
		for(j=0; j < grouplist[i].length; j++){
			container.innerHTML += localStorage.getItem(grouplist[i][j]);
		}
	


}	