var names = [

	];

	
//used for cold caller
function pick() {
	//int index = Math.round(Math.random()*(names.length-1));
	var picked = names[Math.round(Math.random()*(names.length-1))];
	document.getElementById('call').innerHTML = picked;
	names[Math.round(Math.random()*(names.length-1))][1]++;
	
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
	names.pop([name,0]);  //removes name from list here
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
	names.splice(index, 1); 
	localStorage.setItem("class", names);
	var container = document.getElementById('loaded_data');
	container.innerHTML = localStorage.getItem("class");
	var text = ""; //creates variable that will become what the code actually prints out
	for(i = 0; i < names.length; i++) { //iterates through name list to do breaks
		text += names[i][0] + "<br>"; //adds the break after every word
		container.innerHTML = text; //container.innerHTML gets the code from inside and displays it on the screen
	}
}

//creates pop up that asks for student's names
function popup() {
	
	var input = prompt("Student name:"); //creates pop up box
	var name = input;
	names.push([name,0]); 	//append list here:
	localStorage.setItem("class",name); //storing
	var container = document.getElementById('loaded_data');
	container.innerHTML += localStorage.getItem("class") + "<br>"; //stop it from printing whole list
	
}

	
    function drawChart() {
      
	   var data = google.visualization.arrayToDataTable([
        ["Element", "Times Called", { role: "style" } ],
        [names[0][0], names[0][1], "yellow"],
        [names[1][0], names[1][1], "green"],
        [names[2][0], names[2][1], "blue"],
        [names[3][0], names[3][1], "darkblue"]
		/*[names[4][0], 0, "yellow"],
        [names[5][0], 0, "green"],
        [names[6][0], 0, "blue"],
        [names[7][0], 0, "darkblue"]
		[names[8][0], 0, "yellow"],
        [names[9][0], 0, "green"],*/
        
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Students Called",
        width: 1200,
        height: 800,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }