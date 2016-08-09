<?php include "base.php"; ?>
<!DOCTYPE html>
<html>
	<head>
	</head>


	<body>
	<?php
		if(!empty($_SESSION['LoggedIn']) && !empty($_SESSION['Username'])){
?>
			<h1>You are logged in! Your class is <code><?=$_SESSION['Lists']?></code></h1>
			<a href = "logout.php";>Logout</a>
			
			<?php
			}
		
		elseif(!empty($_POST['username']) && !empty($_POST['password'])){
			
			$myusername = mysqli_real_escape_string($con, $_POST['username']);
			$mypassword = mysqli_real_escape_string($con, $_POST['password']);
		
		
			$checkLogin = mysqli_query($con, "SELECT id FROM accounts WHERE Username = '$myusername' and Password = '$mypassword'");
			
			if(!$checkLogin){
				printf("Error for some reason D:", mysqli_error($con));
				exit();
			}
			$result = mysqli_fetch_array($checkLogin);

			if(count($result) >= 1){
				
				$result = mysqli_query($con, "SELECT Lists FROM accounts WHERE Username = '$myusername' and Password = '$mypassword'");
				$row = mysqli_fetch_array($result);
				$realname = $row['Lists'];  
				
				$_SESSION['Lists'] = $realname;
				$_SESSION['Username'] = $myusername;
				$_SESSION['LoggedIn'] = 1;
				header("Location: test_database.php");		//redirects user to logged in page
			}
			else{
				echo "<h1>Error</h1>";
				echo "<p>Uh-oh, your account could not be found.  Please check your username and password.</p>";
				//session_destroy();
				//$_SESSION['loggedIn'] = false;
				//header("Location: test_database.php");
			}
			
		}
		else{
			?>
			
		<h1>Sign In!</h1>
		<a href ="sign_up.php";>Sign Up</a>
		<form action = "test_database.php" method = "post" name="loginform" id ="loginform">
		Username: <input type ="text" name = "username"><br>
		Password: <input type ="password" name = "password"><br>
		<input type = "Submit">
		</form>

			<?php
		}
		?>

	</body>
</html>