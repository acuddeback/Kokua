<?php include "base.php"; ?>

<!DOCTYPE html>
<html>

<link rel="stylesheet" href="style.css">

<head>
		<title>Kokua</title> <!-- slide out menu on left side -->
		<link rel="stylesheet" href="other_style.css">
		<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arvo">
		<meta name= "viewport" content="width-device-width, initial-scale=1">
		
	</head>
	
	
	<body class="menu">
		<header>
			<a href="#" class = "menu-toggle"><div class="container" onclick="myFunction(this)">
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
					</div></a>
			<nav class="menu-side">
				<ul>
  <center><li><a class="active" href="#KOKUA">KOKUA</a></li>
  <br><br><li><a href="home.html">home</a></li><br><br>
  <li><a href="http://localhost/kokua/test_database.php">login/logout</a></li><br><br>
  <li><a href="coldcaller.html">cold caller</a></li><br><br>
  <li><a href="groupgenerator.html">group generator</a></li><br><br>
  <li><a href="comments.html">comments</a></li><br><br>
  <li><a href="aboutus.html">about us</a></li><br><br></center>
  
</nav>
		
</ul>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script>
		(function() { 
			var body = $('body');
			$('.menu-toggle').bind('click', function() {
				body.toggleClass('menu-open');
				return false;
			
			});	
		})();
		
	</script>
	
	<script> 
	function myFunction(x) {
    x.classList.toggle("change");
}
	
	</script>
	
	<style> 
li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

li a.active {
    background-color: #53cbed;
    color: white;
}

li a:hover:not(.active) {
    background-color: white;
    color: #53cbed;
}
</style>
		<center><script>
				
				function storeInfo() {
					var form = document.getElementById("form");
					var names = form.elements[0].value;
					localStorage.setItem('name', names);
				}
				function getData() {
					var container = document.getElementById('loadedData');
					container.innerHTML = localStorage.getItem('name');
				}
				
					
			</script> 
<body>	<style>		
.button {
    background-color: white;
    border: 2px solid gray;
    color: gray;
    padding: 8px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
	font-family: 'Arvo';
    font-size: 12px;
    margin: 4px 2px;
	-webkit-transition-duration: 0.4s;
    transition-duration: 0.3s;
    cursor: pointer;
}
.button:hover {
    background-color:white;
    color: #53cbed;
	border: 2px solid #53cbed;

}
.button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

input[type=text] {
    width: 10%;
    padding: 5px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid gray;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
}

</body>
</style>
	

<html>
	<head>
	</head>


	<body>
	
	
	
	<?php
		if(!empty($_SESSION['LoggedIn']) && !empty($_SESSION['Username'])){
?>
			<h1>You are logged in! Your class is <code><?=$_SESSION['Lists']?></code></h1>
			<a class= "button" href = "logout.php";>Logout</a>
			
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
	<link rel="stylesheet" href="login.css">
		<head>
		<script src="login.js" type="text/javascript"></script> <!--embeds the Js file-->
		<h1>sign in</h1>
		</head>
		<body>
		<div class="login-page">
		  <div class="form">
			<form action="test_database.php" method="post" name="loginform" id="loginform">
			  <input type="text" placeholder="username" name="username"/>
			  <input type="password" placeholder="password" name="password"/>
			  <button>login</button>
			  <p class="message">Not registered? <a href="sign_up.php";>Create an account</a></p>
			</form>
		  </div>
		</div>
		</body>
		
			<?php
		}
		?>

	</body>
</html>