<html>
<form method="post" action="action.php">
	<input type="text" name='x'> </input>
+
	<input type="text" name='y'> </input>
=
	<input type="submit" name= "Math!" value="Math!"> </input>
</form>
</html>

<?php
if (isset($_POST['Math!'])) {
	$sum = ($_POST['x'] + $_POST['y']);
		if ($sum == 8) {
			echo "yay";
		}
		elseif ($sum == 7) {
			echo "so close";
		}

		else {
			echo "you suck at math";
		}
}
else {
	echo "Enter x and y values that add together to equal 8";
}


?>