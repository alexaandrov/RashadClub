<?php
	// echo $_POST['checkIn']." ".$_POST['checkOut']." ".$_POST['adults']." ".$_POST['children'];

	include_once('db.php');
	
	// Инициализация полей формы
	$checkIn = date("Y-m-d", strtotime(strip_tags(trim($_POST['checkIn']))));
	$checkOut = date("Y-m-d", strtotime(strip_tags(trim($_POST['checkOut']))));
	$adults = strip_tags(trim($_POST['adults']));
	$children = strip_tags(trim($_POST['children']));
	
	// Вывод введенных данных
	echo $checkIn." ".$checkOut." ".$adults." ".$children;

	// Создание массив с датами от Въезда(checkIn) до Выезда(checkOut),
	// с последующие конвертацией в строку и сжатием для БД
	function getArrayReservDays($startDate, $endDate) {
		$intervalDiffDates = dateDifference($startDate, $endDate);
		// Добавление даты заезда в начало массива
		$reservDaysArr[0] = $startDate;
		for ($i = 1; $i < $intervalDiffDates; $i++) {
			$reservDaysArr[$i] = addDayToDate($reservDaysArr[$i-1]);
		}
		// Добавление даты выезда в конец массива
		array_push($reservDaysArr, $endDate);
		// Возвращение архивированной строки
		echo compressDataToString($reservDaysArr);
		return compressDataToString($reservDaysArr);
	}

	// Сжатие массив с преобразованием его в строку
	function compressDataToString($array) {
		return $string = base64_encode(gzcompress(serialize($array)));
	}

	// Разархивация строки с преобразованием в массив
	function uncompressDataToArray($string) {
		return $array = unserialize(gzuncompress(base64_decode($string)));
	}

	// Узнает разницу между датами в днях
	function dateDifference($date_1, $date_2, $differenceFormat = '%a' )
	{
		$datetime1 = date_create($date_1);
		$datetime2 = date_create($date_2);
		$interval = date_diff($datetime1, $datetime2);
		return $interval->format($differenceFormat);
	}

	// Добавляет один день к дате
	function addDayToDate($date_1)
	{
		$date = date_create($date_1);
		// Добавляет интервал равный 1 дню
		$date->add(new DateInterval('P1D'));
		return $date->format('Y-m-d');
	}

	// Конвертация массива в строку для mysql

	$reservDays = getArrayReservDays($checkIn, $checkOut);
	mysql_query(" 
				INSERT INTO `p9247_rashadclub`.`req` (`reservDays`) 
				VALUES ('$reservDays');
				");





	// $string = gzcompress(serialize(getArrayReservDays($checkIn, $checkOut)));
	// echo $string;
	// $array = unserialize(gzuncompress($string));
	// print_r($array);

	// Есть ли свободны комнаты, по умолчанию нет
	// $checkFreeRoom = false;
	// $checkInArr = mysql_fetch_array(mysql_query(" SELECT `checkIn` FROM `emika` "));
	// $checkOutArr = mysql_fetch_array(mysql_query(" SELECT `checkOut` FROM `emika` "));
	// for ($i = 0; $i < count($checkInArr); $i++) {
	// 	if ("$checkIn" == "$checkInArr[$i]" || "$checkOut" == "$checkOutArr[$i]") {
	// 		echo " Date has in db ";
	// 	} else {
	// 		$checkFreeRoom = true;
	// 	}
	// }


	// $y = 2016; 
	// $m = 5; 
	// $d = -2; 

	// $dt = mktime(0,0,0,$m,$d,$y); 
	// echo( date('Y-m-d',$dt) );

	// mysql_query(" 
	// 			INSERT INTO `p9247_rashadclub`.`emika` (`checkIn`, `checkOut`, `adults`, `children`) 
	// 			VALUES ('$checkIn', '$checkOut', '$adults', '$children');
	// 			");
	
	// mysql_close();
?>