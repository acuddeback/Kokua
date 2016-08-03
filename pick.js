var names = [

	]; 
hi
function pick() {
	var picked = names[Math.round(Math.random()*(names.length-1))];
	document.getElementById('call').innerHTML = picked
}   				       	 //picks element from array

function add_names(){
	var form = document.getElementById("form1");  								   //receives input
	var name = form.elements[0].value + "<br>";
	console.log("Got name" + name + " from form");
	names.push(name);               //append list here:
	
	localStorage.setItem("class", list);
	var container = document.getElementById('loaded_data');
	container.innerHTML = localStorage.getItem("class");
	
}