Base file code
<?php session_start();
$dbhost = “localhost”; $dbname = “kokuausers”; $dbusername = “username”; $dbpass = “password”; $dbemail = “email”;
mysql_connect($dbhost, $dbuser, $dbpass) or die (“MySQL Error: “ . mysqlerror());
mysql_select_db($dbname) or die (“MySQL Error “ . mysqlerror());
?>