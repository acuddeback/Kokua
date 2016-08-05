<!DOCTYPE html> 
<html>
<head>
 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
<title>User Management System (Tom Cameron for NetTuts)</title>
<link rel="stylesheet" href="style.css" type="text/css" />
</head>  
<body>  
<?php 
$host ="localhost";
$user ="root";
$pass ="";
$db = "kokuausers";
mysql_connect($host, $user, $pass);
mysql_select_db($db);

if (isset($_POST['username'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];	
	$sql = "SELECT * FROM users WHERE username='".$username."' AND password='".$password."'LIMIT 1";
	$res = mysql_query($sql);
	if (mysql_num_rows($res) == 1){
		echo "You have successfully logged in";
		exit();
	} else {
		echo "Invalid login information. Please return to the previous page.";
		exit();
	}
}
?> 
<form method = "post" action="login.php">
Username: <input type="text" name="username"/> <br /><br />
Password: <input type="password" name="password"/><br /><br />
<input type="submit" name="submit" value="Log In"/>
</form>
</body>
</html>