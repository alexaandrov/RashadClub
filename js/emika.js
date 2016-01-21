$(function () {
	var btn = $(".emika:eq(1) .submit");
		btn.click(function(e) {
		e.preventDefault();
		var date = $(".emika:eq(1) :input").serializeArray();
		var checkIn = date[0].value;
		var checkOut = date[1].value;
		var adults = date[2].value;
		var children = date[3].value;
		
			function funcBefore() {
				$("#txt").text ("Ожидание данных");
			}
			
			function funcSucces(data) {
				$("#txt").text (data);
			}
			
			$.ajax({
				url: "../php/emika.php",
				type: "POST",
				data: {
				  checkIn: '2016-01-02',
				  checkOut: '2016-02-01',
				  adults: 5,
				  children: 3
				},
				beforeSend: funcBefore,
				success: funcSucces
				
			});
	});
});
