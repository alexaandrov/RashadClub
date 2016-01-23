$(function () {
	var emikaBtnCheck = $(".emika:eq(0) .submit");
	var emikaMobBtnCheck = $(".emika:eq(1) .submit");

	var date = $(".emika:eq(1) :input");
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	$(".emika input[type=text]").datepicker({
		minDate: "0",
		showOtherMonths: true,
		dateFormat: "dd.mm.yy"
	});
	date[1].value = $(".emika input[type=text]").datepicker("getDate");
	// $(".emika select").selectmenu();
	function checkIssues(date) {
		var checkIn = date[0].value;
		var checkOut = date[1].value;
		var adults = date[2].value;
		var children = date[3].value;

		// Проверка на адекватность чисел
		if (adults > 7 || children > 5) {
			alert("Номер не расчитан на такое кол-во посетителей");
		} else {
			sendInfo(date);
		}
	}

	function sendInfo(date) {
		var checkIn = date[0].value;
		var checkOut = date[1].value;
		var adults = date[2].value;
		var children = date[3].value;

		function funcBefore() {
			$("#txt").text ("Ожидание данных");
		}
			
		function funcSucces(data) {
			alert("Данные успешно отправлены");
			$("#txt").text (data);
		}
			
		$.ajax({
			url: "../php/emika.php",
			type: "POST",
			data: {
			  checkIn: checkIn,
			  checkOut: checkOut,
			  adults: adults,
			  children: children
			},
			beforeSend: funcBefore,
			success: funcSucces
		});
	}

	// Если нажата кнопка "Проверить" компьютере
	emikaBtnCheck.click(function(e) {
		e.preventDefault();
		var date = $(".emika:eq(0) :input").serializeArray();
		checkIssues(date);
	});
		
	// Если нажата кнопка "Проверить" с телефона
	emikaMobBtnCheck.click(function(e) {
		e.preventDefault();
		var date = $(".emika:eq(1) :input").serializeArray();
		checkIssues(date);
	});
});

