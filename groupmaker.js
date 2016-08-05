var names = ["anna", "zoe", "cindy", "christina", "jess"];
var groupnum = "";

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

//defines function to generate groups

function groupgenerator(){
	var studentgenlist = names;//saves names under different name so you can save the original list AND make changes to it
	var numberofgroups = Math.ceil((studentgenlist.length/$maxstudent)); //sets how many groups you'll need
	
	for(j = 0; j < numberofgroups; j++) {
		var individualgroup = [];
		
		for(i = 0; i < $maxstudent; i++) {
			var oglistindex = getRandomIndex(0, studentgenlist.legth-1);
			var newgroup = individualgroup.push(studentgenlist[oglistindex]);
			document.write("Group " + j + " " + newgroup)
		}
	}
}
	
/*	var studentgenlist = names; 
	
	var groupnum = Math.ceil((studentgenlist.length/$maxstudent));

//creates list of groups
	var grouplist = [];
	
//creates individual group list
	for(i = 0; i < groupnum; i++){
		var group = [] ;
		//adds individual group to master group list 
		grouplist.push(group);
	}

//adds students to individual lists
	for (i=0; i < studentgenlist.length; i++){
		var listindex = getRandomIndex(0, studentgenlist.legth-1);
		var groupindex = (i % groupnum);
		grouplist.push(studentgenlist[listindex]);
		//grouplist[groupindex].push(studentgenlist[listindex]);
		del(studentgenlist[listindex]);
	}

//prints lists in a comprehensive format
	//creates list to print
	var $printlist = [];
	// adds to list
	for (i=0; i < grouplist.length; i++){	
		$printlist.push(groupnumber(i));
		var index = i; 
	}
		for(i=0; i < grouplist[index].length); i++){
			$printlist.push(grouplist[index][i]);
		}
	printgroups();	
}	
	
//prints the groups
function printgroups(){
	var displaylist = ""; //sets a  new list to be printed
	//adds the old list items to the new with indents for printing
	for (var i=0; i< $printlist.length; ++i){
		displaylist = displaylist + printlist[i] + '<br>'
	}
	var groupcontainer =  document.getElementById('group_container');
	groupcontainer.innerHTML += displaylist
}*/
