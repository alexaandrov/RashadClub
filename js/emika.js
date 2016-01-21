$(function () {
	var emikaBtnCheck = $(".emika:eq(0) .submit");
	var emikaMobBtnCheck = $(".emika:eq(1) .submit");

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
		sendInfo(date);
	});
		
	// Если нажата кнопка "Проверить" с телефона
	emikaMobBtnCheck.click(function(e) {
		e.preventDefault();
		var date = $(".emika:eq(1) :input").serializeArray();
		sendInfo(date);
	});
});

