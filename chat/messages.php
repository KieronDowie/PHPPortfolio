<?php
	require_once('functions.php');

	$mysqli = connect();
	header('Content-type:application/json;charset=utf-8');

	if (isset($_POST["id"]))
	{
		$id = $_POST["id"];
		preg_match('/^[0-9]+$/', $id, $matches, PREG_OFFSET_CAPTURE);
		if (empty($matches))
		{
			echo json_encode("ID can only contain numbers.");
		}
		else
		{
			$q = 'SELECT * from chat WHERE `id`='.$id;
			$result = query($mysqli, $q);
			if ($result)
			{
				$arr = Array();
				while ($row = mysqli_fetch_array($result)) {
				   array_push($arr, $row["message"]);  
				}
				echo json_encode($arr);
			}
			else
			{
				echo json_encode("ID not found.");
			}
		}
	}
	else
	{
		echo json_encode("ID required");
	}
?>