<?php include "base.php";?>
<?php
$dbuser="Username";
$dbpss="Password";
$dblists="Lists";

if (!empty($_POST['user']) && !empty($_POST['pass']) && !empty($_POST['lists'])){
	
	$user = $_POST['user'];
	$pass = $_POST['pass'];
	$lists = $_POST['lists'];
	
	mysqli_query($con, "INSERT INTO accounts ($dbuser, $dbpss, $dblists) VALUES('$user', '$pass', '$lists')");
	echo "Submitted";
	header("Location: " .$_SERVER['REQUEST_URI']);
	exit();
	
	}
?>


<!DOCTYPE html>
<html>
<body>
<h1>SIGN UP</h1>
<form action="" method="POST">
Username: <input type="text" name="user"><br><br>
Password: <input type="password" name="pass"><br><br>
List of students: <input type="text" name="lists"><br><br>
<input type="submit" value="Submit"><br>
</form>
</body>
</html>