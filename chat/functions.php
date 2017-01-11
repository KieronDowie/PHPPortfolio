<?php
function connect()
{
	$username = "root";
	$hostname = "localhost"; 
	$mysqli = new mysqli($hostname, $username, '', 'portfolio');
	return $mysqli;
}
function execute($stmt)
{
	mysqli_stmt_execute($stmt);
}
function query($mysqli, $str)
{
  	$result = mysqli_query($mysqli, $str);
  	return $result;
}

?>