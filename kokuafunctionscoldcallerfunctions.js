
var names = [

	];  //sets up list of names
var maxstudent = ""; //sets up variable for number of students per group

var displaylist = ""; //sets a  new list to be printed
	
//used for cold caller
function pick() {
	
	var picked = names[Math.round(Math.random()*(names.length-1))];
	document.getElementById('call').innerHTML = picked
	
	//picks element from array
}   				       	 

//deletes the last item from the list in ascending order
function deleteFromList(){
	names.pop(name); //removes name from list here
	localStorage.setItem("class", names);
	var container = document.getElementById('loaded_data');
	container.innerHTML = localStorage.getItem("class");
	
	var text = ""; //creates variable that will become what the code actually prints out
	for(i = 0; i < names.length; i++) { //iterates through name list to do breaks
		text += names[i] + "<br>"; //adds the break after every word
		container.innerHTML = text; //container.innerHTML gets the code from inside and displays it on the screen
	}	
}

//deletes last called name
function uncalled(){
	var index=names.indexOf(picked);
	names.splice(index, 1); //removes name from list here:
	localStorage.setItem("class", names);
	var container = document.getElementById('loaded_data');
	container.innerHTML = localStorage.getItem("class");
	var text = ""; //creates variable that will become what the code actually prints out
	for(i = 0; i < names.length; i++) { //iterates through name list to do breaks
		text += names[i] + "<br>"; //adds the break after every word
		container.innerHTML = text; //container.innerHTML gets the code from inside and displays it on the screen
	}
}

//creates pop up that asks for student's names
function popup() {
	var input = prompt("Student name:"); //creates pop up box
	var name = input;
	names.push(name); 	//append list here:
	localStorage.setItem("class",name); //storing
	var container = document.getElementById('loaded_data');
	container.innerHTML += localStorage.getItem("class") + "<br>"; //stop it from printing whole list
}

function popupgroup() {
	var $maxstudent = prompt("Number of Students per Group:"); //creates pop up	
	localStorage.setItem("number", $maxstudent); //storing
	var container = document.getElementById('numberdata');
	container.innerHTML += localStorage.getItem("number") + "<br>"; //stop it from printing whole list

}

//chooses a random index
function getRandomIndex(min, max) {
    var randomindex = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomindex;
}

//generates group names
function groupnumber(index){
	var num = str(index+1);
	var output = ("Group "+ num);
	return output;
}
//makes the group
function groupgenerator(){
	var studentgenlist = names;//saves names under different name so you can save the original list AND make changes to it
	var numberofgroups = Math.ceil((studentgenlist.length/$maxstudent)); //sets how many groups you'll need
	
	for(j = 0; j < numberofgroups; j++) {
		var individualgroup = [];
		
		for(i = 0; i < $maxstudent; i++) {
			var oglistindex = getRandomIndex(0, studentgenlist.length-1);
			var newgroup = individualgroup.push(studentgenlist[oglistindex]);
			document.write("Group " + j + " " + newgroup)
		}
	}
}

