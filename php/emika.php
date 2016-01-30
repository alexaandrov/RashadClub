<?php
	include_once('db.php');
	// echo $_POST['checkIn']." ".$_POST['checkOut']." ".$_POST['adults']." ".$_POST['children'];

	
	// Инициализация полей формы
	$rooms = array("comfort", "lux", "vip");
	$checkIn = date("Y-m-d", strtotime(strip_tags(trim($_POST['checkIn']))));
	$checkOut = date("Y-m-d", strtotime(strip_tags(trim($_POST['checkOut']))));
	$adults = strip_tags(trim($_POST['adults']));
	$children = strip_tags(trim($_POST['children']));
	$freeRooms;

// 				*** Выборка и проверка данных из БД *** 				//

	$reservDays = getArrayReservDays($checkIn, $checkOut);
	pullArrayReservDays($reservDays, $rooms);

	function pullArrayReservDays($reservDays, $rooms) {
		foreach ($rooms as $room) {
			$result[$room] = mysql_query(" SELECT reservDays FROM emikaq WHERE room = '$room'");
			checkOnFreeRoom($reservDays, $room, $result);
		}
		mysql_close();
	}

	function checkOnFreeRoom($reservDays, $room, $result) {
		while ($roomReservDays[$room] = mysql_fetch_array($result[$room])) {
			$roomReservDays = uncompressDataToArray($roomReservDays[$room]['reservDays']);
			checkEveryDay($reservDays, $roomReservDays, $room);
		}
	}

	function checkEveryDay($reservDays, $roomReservDays, $room) {
		foreach($reservDays as $reservDay) {
			foreach ($roomReservDays as $roomReservDay) {
				if ($reservDay == $roomReservDay) {
					echo " --- --> ".$room;
					return;
				}
			}
		}
	}

// 				*** Запись данных в базу данных *** 				//
	// pushData("vip", "Rami M.B.", $checkIn, $checkOut, getCompressArrayReservDays($checkIn, $checkOut));

	// Отправка всех данных в базу данных
	function pushData($room, $visitor, $checkIn, $checkOut, $roomReservDays) {
		mysql_query(" 
					INSERT INTO emikaq (`room`, `visitor`, `checkIn`, `checkOut`, `reservDays`) 
					VALUES ('$room', '$visitor', '$checkIn', '$checkOut', '$roomReservDays');
					");
		echo "Success";
	}

	// Создание массив с датами от Въезда(checkIn) до Выезда(checkOut),
	// с последующие конвертацией в строку и сжатием для БД
	function getCompressArrayReservDays($startDate, $endDate) {
		$intervalDiffDates = dateDifference($startDate, $endDate);
		// Добавление даты заезда в начало массива
		$reservDays[0] = $startDate;
		for ($i = 1; $i < $intervalDiffDates; $i++) {
			$reservDays[$i] = addDayToDate($reservDays[$i-1]);
		}
		// Добавление даты выезда в конец массива
		array_push($reservDays, $endDate);
		// Возвращение архивированной строки
		return compressDataToString($reservDays);
	}

	function getArrayReservDays($startDate, $endDate) {
		$intervalDiffDates = dateDifference($startDate, $endDate);
		// Добавление даты заезда в начало массива
		$reservDays[0] = $startDate;
		for ($i = 1; $i < $intervalDiffDates; $i++) {
			$reservDays[$i] = addDayToDate($reservDays[$i-1]);
		}
		// Добавление даты выезда в конец массива
		array_push($reservDays, $endDate);
		return $reservDays;
	}

	// Сжатие массив с преобразованием его в строку
	function compressDataToString($array) {
		return $string = base64_encode(gzcompress(serialize($array)));
	}

	// Разархивация строки с преобразованием в массив
	function uncompressDataToArray($string) {
		return unserialize(gzuncompress(base64_decode($string)));
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

?>