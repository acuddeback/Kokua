<?php
	$database="kokuausers";
	
	$con=mysqli_connect("localhost", "root", "", $database);
	
	$first=$_POST["first"];
	$last=$_POST["last"];

	if(!$con)
	{
		echo("Could not connect:".mysqli_connect_error());
	}
	
	$query="INSERT INTO userinfo(Username,Password) values('$first','$last')";

	if (mysqli_query($con, $query)) {
		$last_id = mysqli_insert_id($con);
		echo "New record created successfully. Last inserted ID is: " . $last_id;
	} 	
	else {
		echo "Error: " . $sql . "<br>" . mysqli_error($con);
	}
	
	mysqli_close($con);
?>