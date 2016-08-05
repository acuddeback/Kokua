var names = [
	]; 

var picked = "";

function pick() {
	picked = names[Math.round(Math.random()*(names.length-1))];
	document.getElementById('call').innerHTML = picked
}   				       	 //picks element from array

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

function popup(){
	var input = prompt("Student name:");
	var name = input;
	names.push(name); //append list here:
	localStorage.setItem("class",name);
	var container = document.getElementById('loaded_data');
	container.innerHTML += localStorage.getItem("class") + "<br>";
}