<?php
	echo $_POST['checkIn']." ".$_POST['checkOut']." ".$_POST['adults']." ".$_POST['children'];

	include_once('db.php');
	
	$checkIn = strip_tags(trim($_POST['checkIn']));
	$checkOut = strip_tags(trim($_POST['checkOut']));
	$adults = strip_tags(trim($_POST['adults']));
	$children = strip_tags(trim($_POST['children']));
	
	mysql_query(" 
				INSERT INTO `p9247_rashadclub`.`emika` (`ckeckIn`, `checkOut`, `adults`, `children`) 
				VALUES ('$checkIn', '$checkOut', '$adults', '$children');
				");
	
	mysql_close();
?>