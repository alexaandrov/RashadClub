function miniMenuInit () {
	menuBtn = $('.mini_menu_btn')[0];
	menuBtn2 = $('.mini_menu_btn')[1];
	mainMiniMenu = $('.header_mini_menu')[0];
	menuCheck = false;
}
function menuCheckOpenClose() {
	if (menuCheck === false) {
		mainMiniMenu.style.cssText="right: 0px;";
		menuBtn.style.cssText="display: none;"
		menuBtn2.style.cssText="float: none; margin: 0 auto;"
		menuCheck = true;
	}
	else if (menuCheck === true) {
		mainMiniMenu.style.cssText="right: -250px;";
		menuBtn.style.cssText="float: right;"
		// menuBtn2.style.cssText="display: none;"
		menuCheck = false;
	}
	else {
		mainMiniMenu.style.cssText="left: 150px;";
		menuCheck = true;
	};
};
