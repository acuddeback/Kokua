<?php 
	session_start();
	$dbhost = "localhost";
	$dbname = "test";
	$dbusername = "root";
	$dbpass = "";
	
	$con = mysqli_connect($dbhost, $dbusername, $dbpass, $dbname);
	if(!$con)
		echo("MySQL Error:" .mysqli_error());
?>