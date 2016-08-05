var studentlist = [

	]; 

function pick() {
	var picked = studentlist[Math.round(Math.random()*(studentgenlist.length-1))];
	document.getElementById('call').innerHTML = picked
	//picks element from array
}   				       	 

function setmaxnum() {
	var form = document.getElementById("maxnumber");
	maxstudent = form.elements[0].value;
}

function add_names(){
	
	var form = document.getElementById("studentnames");  								   //receives input
	var name = form.elements[0].value;
	console.log("Got name" + name + " from form");
	studentlist.push(name); 	//append list here:
	localStorage.setItem("class",name);
	var container = document.getElementById('loaded_data');
	container.innerHTML += localStorage.getItem("class") + "<br>"; //stop it from printing whole list
	
}

//Group Generator Functions


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

// form submission using enter key

element.addEventListener("keydown", keyfield, false);
function keyfield (e) {
   var keyCode = e.keyCode;
}
function keyfield (e) {
   var keyCode = e.keyCode;
   if(keycode==13){
   form.submit(); //or button.click()
    }
}

/* <form id="form2">
			<input type="checkbox" name= "names"> name
		</form> */