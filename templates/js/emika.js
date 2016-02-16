$(function emikaFormListener() {
	var checkIn = $(".emika .checkIn");
	var checkOut = $(".emika .checkOut");
	var adults = $(".emika .adults");
	var children =$(".emika .children");
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	$(".emika input[type=text]").datepicker({
		minDate: "0",
		showOtherMonths: true,
		showButtonPanel: true,
		dateFormat: "dd.mm.yy"
	});
	// $(".emika select").selectmenu();
	checkIn.datepicker('setDate', '1');
	checkOut.datepicker('setDate', '3');

	var emikaFormNumber;

	// Определяет с какой формой работает посетитель
	var emikaCurrentFormBtn = $(".emika .submit")
	// Если нажата кнопка "Проверить" компьютере
	emikaCurrentFormBtn.click(function(e) {
		e.preventDefault();
		emikaFormNumber = $(".emika .submit").index(this);
		sendInfo(emikaFormNumber);
	});

	var emikaFormsArray = $(".emika");
	emikaFormsArray.click(function(e) {
		e.preventDefault();
		var emikaFormNumber = emikaFormsArray.index(this);
		initCurrentEmikaForm(emikaFormNumber);
	});

	// Инициализирует выбранную форму
	function initCurrentEmikaForm(emikaFormNumber) {
		// Вызов календаря "Выезд" сразу после закрытия календаря "Въезд"
		checkIn.eq(emikaFormNumber).change(function() {
			var intervalID = setInterval(function() {
					checkOut.eq(emikaFormNumber).datepicker('show');
					clearInterval(intervalID);
				}, 0150);
		});
	}

	function sendInfo(formNumber) {
		var checkInVal = checkIn[formNumber].value;
		var checkOutVal = checkOut[formNumber].value;
		var adultsVal = adults[formNumber].value;
		var childrenVal = children[formNumber].value;

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
			  checkIn: checkInVal,
			  checkOut: checkOutVal,
			  adults: adultsVal,
			  children: childrenVal
			},
			beforeSend: funcBefore,
			success: funcSucces
		});
	}
});
