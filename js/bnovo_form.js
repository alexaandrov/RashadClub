// Show and hiden Bnovo form, and show and hide the button
function showBnovo() {
	var bnovo = document.getElementById('bn_wrapper');
	var btn = $('.button')[0];
	bnovo.style.cssText="top: 20px;"
	btn.style.cssText="-khtml-opacity: 0; opacity: 0;-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);-moz-opacity: 0;"
	var menu = $('.menu')[0];
}

function hideBnovo() {
	var bnovo = document.getElementById('bn_wrapper');
	var btn = $('.button')[0];
	bnovo.style.cssText="top: -180px;"
	btn.style.cssText="display: block;"
	var menu = $('.menu')[0];
	function hide() {
		$('.bn')[0].style.cssText="display:none;";
	}
	setTimeout(hide, 0400)
}

// Bnovo form
Bnovo_Widget.init(function(){
	 Bnovo_Widget.open('_bn_widget_', {
			 type: "vertical",
			 lcode: "1234567890",
			 lang: "ru",
			 width: "80%",
			 background: "#555555",
			 bg_alpha: "75",
			 padding: "18",
			 font_size: "12",
			 btn_background: "#719E5B",
			 btn_background_over: "#719E5B",
			 btn_textcolor: "#FFFFFF",
			 btn_textover: "#FFFFFF"
	});
});