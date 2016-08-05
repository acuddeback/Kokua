<?php
	$database="kokuausers";
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$con=mysqli_connect("localhost", "root", "", $database);
		
	if(!$con)
	{
		echo("Could not connect:".mysqli_connect_error());
	}
	
	$myusername = mysqli_real_escape_string($con, $username);
    $mypassword = mysqli_real_escape_string($con, $password); 
	
	
	$strSQL = mysqli_query($con, "SELECT id FROM theusers WHERE Username = '$myusername' and Password = '$mypassword'");

	if(!$strSQL){
		printf("Error for some reason D:", mysqli_error($con));
		exit();
	}
	
	$result = mysqli_fetch_array($strSQL);
	
    if(count($result)>=1) {
		
		printf("$result[0]");
        echo "\nit worked! you are logged in!";
    }
	else {
         $error = "Your Login Name or Password is invalid";
		 echo $error;
    }
	
	mysqli_close($con);
?>