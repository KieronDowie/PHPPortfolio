<?php
	require_once('functions.php');

	$mysqli = connect();
	header('Content-type:application/json;charset=utf-8');

	$q = 'SELECT id from chat';
	$result = query($mysqli, $q);	
	if ($result)
	{
		$arr = Array();
		while ($row = mysqli_fetch_array($result)) {
		   $arr[$row["id"]] = true; 
		}
		echo json_encode(array_keys($arr));
	}
?>