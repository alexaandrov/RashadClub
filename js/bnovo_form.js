// Show hiden Bnovo form, and hide the button
function showBnovo() {
	bnovo = document.getElementById('bn_wrapper');
	btn = $('.button')[0];
	bnovo.style.cssText="top: 20px;"
	btn.style.cssText="display: none;"
	// $('.menu')[0].style.cssText="margin-top: 24.1%;";
}

// Bnovo form
Bnovo_Widget.init(function(){
  Bnovo_Widget.open('_bn_widget_', {
	  type: "horizontal",
	  lcode: "1234567890",
	  lang: "ru",
	  width: "960",
	  background: "#2D2D2D",
	  bg_alpha: "100",
	  padding: "88",
	  font_size: "12",
	  btn_background: "#719E5B",
	  btn_background_over: "#719E5B",
	  btn_textcolor: "#FFFFFF",
	  btn_textover: "#FFFFFF"
  });
});
