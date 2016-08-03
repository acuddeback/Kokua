function pick() {
	var names = [
	'Zoe', 
	'Christina', 
	'Jessica', 
	'Cindy', 
	'Anna'
	]; 
	var picked = names[Math.round(Math.random()*(names.length-1))];
	document.getElementById('call').innerHTML = picked
}   				       	 //picks element from array

function save_data(){
	var form = document.getElementById("form1");  								   //receives input
	var name = form.elements[0].value;
	console.log("Got name" + name + " from form");
	localStorage.setItem('test-name', name);
	names.push(name);               //append list here:

}

function load_data(){
	var container = document.getElementById('loaded_data');
	container.innerHTML = localStorage.getItem('test-name');
}