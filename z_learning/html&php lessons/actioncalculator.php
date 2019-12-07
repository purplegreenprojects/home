<html>
<form method="post" action="actioncalculator.php">
	<input type="text" name='x'> </input>
	<input type="radio" name="operation" value="add" checked> add </input>
	<input type="radio" name="operation" value="subtract"> subtract </input>
	<input type="radio" name="operation" value="multiply"> multiply </input>	
	<input type="radio" name="operation" value="divide"> divide </input>
	<input type="radio" name="operation" value="exponent"> exponent </input>	
	<input type="text" name='y'> </input>
	<input type="submit" name= "Math!" value="="> </input>
</form>
</html>

<?php
if (isset($_POST['Math!'])) {
	if($_POST["operation"] == "add") {
		$answer = ($_POST['x'] + $_POST['y']);
	}
	if ($_POST ["operation"] == "subtract") {
		$answer = ($_POST ['x'] - $_POST['y']);
	}
	if ($_POST ["operation"] == "multiply") {
		$answer = ($_POST ['x'] * $_POST['y']);
	}
	if ($_POST ["operation"] == "divide") {
		$answer = ($_POST ['x'] / $_POST['y']);
	}
	if ($_POST ["operation"] == "exponent") {
		$answer = ($_POST ['x'] ** $_POST['y']);
	} 
	}			
else {
	$answer = "Enter numbers to math";
}
echo $answer;

?>