<!DOCTYPE html>
<html>
<head>
	<title>Function Practice</title>
</head>
<body>

<?php

	$text = "Go to http://www.ravelry.com/projects/eef25/ to see my knitting projects. Or, read http://stringofpurls.tumblr.com/. Or, if you want to read about someone else's knitting adventures, check out http://www.yarnharlot.ca/.";
/*
	$url = "http://";


function createhyperlinks($links) {
	$http = strpos($text, $url);
}

*/


/*
function createhyperlinks($hyperlink) {
	$hyperlink = 

	$find_url_start = strpos("Go to http://www.ravelry.com/projects/eef25 to see my knitting projects. Or, read http://stringofpurls.tumblr.com/. Or, if you want to read about someone else's knitting adventures, check out http://www.yarnharlot.ca/.", "http://");

	$url_part = substr("Go to http://www.ravelry.com/projects/eef25 to see my knitting projects. Or, read http://stringofpurls.tumblr.com/. Or, if you want to read about someone else's knitting adventures, check out http://www.yarnharlot.ca/.", $find_url_start, );

	//$find_url_end = strrpos()

	//substr_replace(string, replacement, start)

	echo $find_url_start;
}

*/

//echo $find_url_start

//echo createhyperlinks($text);

//----------------------------------------------------------------------------------------------------------------------------------


/*

$find_url_start = strpos($text, "http://"); //okay

$find_copy_resume = strpos($text, "/ "); // do last / in string instead (or something)

$copy1 = substr($text, 0, $find_url_start); //good

$link = substr($text, $find_url_start, 38); // # - no good

$copy2 = substr($text, $find_copy_resume);



echo $copy1."<a href=".$link.">".$link."<a>".$copy2;

*/


//-----------------------------------------------------------------------------------------------------------------------------------


//strpos - the one that finds the starting position of something

//strrpos - the one that finds the last "thing" in a string

//substr - the one that returns part of a string, using a starting point and ending point

//strlen - find string length



$find_url_start = strpos($text, "http://"); //okay

$copy1 = substr($text, 0, $find_url_start); //good

//$find_url_end = strrpos($link, "/");


	/////////$link and $find_url_end are both in terms of each other...

	$link = substr($text, $find_url_start, 38); // # - no good

	$find_url_end = strrpos($link, "/ ");

		//$link_length = strlen($link, )


$copy2 = substr($text, $find_url_end);



echo $copy1."<a href=".$link.">".$link."<a>".$copy2;



?>

</body>
</html>