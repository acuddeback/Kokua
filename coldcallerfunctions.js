var names = [

	]; 

function pick() {
	
	var picked = names[Math.round(Math.random()*(names.length-1))];
	document.getElementById('call').innerHTML = picked
	//picks element from array
}   				       	 

function add_names(){
	
	var form = document.getElementById("form1");  								   //receives input
	var name = form.elements[0].value;
	console.log("Got name" + name + " from form");
	names.push(name); 	//append list here:
	localStorage.setItem("class",name);
	var container = document.getElementById('loaded_data');
	container.innerHTML += localStorage.getItem("class") + "<br>"; //stop it from printing whole list
	
}

function deleteFromList(){
	
	var form = document.getElementById("form1");  								   //receives input
	var name = form.elements[0].value;
	console.log("Got name" + name + " from form");
	names.pop(names);               //removes name from list here:
	localStorage.setItem("class", names);
	var container = document.getElementById('loaded_data');
	container.innerHTML = localStorage.getItem("class");
	
}

function selectDelete() {
	var form = document.getElementById("form1");
	var name = form.elements[0].value;
	console.log("Got name" + name + " from form");
}

/* <form id="form2">
			<input type="checkbox" name= "names"> name
		</form> */