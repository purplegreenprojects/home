<?php

	echo shout("something else");

	echo shout($_GET["string"]);

	function shout ($placeholder) {
		$placeholder = strtoupper($placeholder);
		$placeholder = "<div style='font-size: 25px; color: red'>".$placeholder."!!!</div>";
		return $placeholder;
	}



$string = "this is uppercase";
$string = strtoupper($string);
$string = $string . " and this is lowercase";


echo $string;



//$placeholder = strtoupper("<div style='font-size: 25px; color: red'>".$placeholder."!!!</div>"); ----->  the output you get is <DIV STYLE='FONT-SIZE: 25PX; COLOR: RED'>THIS IS AN EXCLAMATION!!!</DIV>
//$placeholder = "<div style='font-size: 25px; color: red'>" . strtoupper($placeholder) . "!!!</div>");

?>


