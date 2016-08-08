var names = [

	]; 

//used for cold caller
function pick() {
	
	var picked = names[Math.round(Math.random()*(names.length-1))];
	document.getElementById('call').innerHTML = picked
	
	//picks element from array
}   				       	 
/*NOT USED, JUST KEEPING THIS AS A JUST IN CASE
function add_names(){
	
	var form = document.getElementById("form1");  								   //receives input
	var name = form.elements[0].value;
	console.log("Got name" + name + " from form");
	names.push(name); 	//append list here:
	localStorage.setItem("class",name);
	var container = document.getElementById('loaded_data');
	container.innerHTML += localStorage.getItem("class") + "<br>"; //stop it from printing whole list
	
}*/

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
