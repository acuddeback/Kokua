var names = [

	]; 

function pick() {
	
	var picked = names[Math.round(Math.random()*(names.length-1))];
	document.getElementById('call').innerHTML = picked
	//picks element from array
}   				       	 
//adds item to list in descending order
function add_names(){
	
	var form = document.getElementById("form1");  								   //receives input
	var name = form.elements[0].value;
	console.log("Got name" + name + " from form");
	names.push(name); 	//append list here:
	localStorage.setItem("class",name);
	var container = document.getElementById('loaded_data');
	container.innerHTML += localStorage.getItem("class") + "<br>"; //stop it from printing whole list
	
}

//deletes the last item from the list in ascending order
function deleteFromList(){
	
	var form = document.getElementById("form1");  								   //receives input
	var name = form.elements[0].value;
	console.log("Got name" + name + " from form");
	names.pop(names);               //removes name from list here:
	localStorage.setItem("class", names);
	var container = document.getElementById('loaded_data');
	container.innerHTML = localStorage.getItem("class");
	var text = ""; //creates variable that will become what the code actually prints out
	for(i = 0; i < names.length; i++) { //iterates through name list to do breaks
		text += names[i] + "<br>"; //adds the break after every word
		container.innerHTML = text; //container.innerHTML gets the code from inside and displays it on the screen
	}
	
}




/* <form id="form2">
			<input type="checkbox" name= "names"> name
		</form> */