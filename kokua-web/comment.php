<html>
<form action="" method="post">

<label> Name: <br<input type= "text" name="name" size="36"><br></label>

<label> Message: <br><textarea cols="35" rows="5" name="mes"></textarea></label><br>

<input type="submit" name="submit" value="submit">


</form>

</html>

<?php
$name = $_POST["name"];
$mes = $_POST["mes"];
$post = $_POST["sunmit"];

if ($post) {
#WRITE DOWN COMMENTS#

$write = fopen("com.txt","a+");
fwrite($write, "<u><b> $name</b></u><br>$text<br>");
fclose($write);

#DISPLAY COMMENTS#
$read=fopen("com.txt", "r+t");
echo "All comments:<br>";
while(!feof ($read)){ 
echo fread ($read,1024);
}
fclose ($read);

}

else {
	
#DISPLAY COMMENTS#

$read=fopen("com.txt", "r+t");
echo "All comments:<br>";
while(!feof ($read)){ 
echo fread ($read,1024);
}
fclose ($read);

}
?>