<?php
	require_once('functions.php');

	$mysqli = connect();
	if (isset($_POST["id"]) && isset($_POST["message"]))
	{
		$id = $_POST["id"];
		$message = 'Me: '.$_POST["message"];		
		$q = $mysqli->prepare("INSERT INTO `chat`(`id`, `message`) VALUES (?,?)");
		$q->bind_param("ss",$id,$message);
		execute($q);
		echo $message;
	}
	else
	{
		echo json_encode("ID required");
	}
?>