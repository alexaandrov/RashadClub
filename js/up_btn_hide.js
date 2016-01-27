$(function () {
	$(".up_btn").hide().removeAttr("href");
	if ($(window).scrollTop()>="250") $(".up_btn").fadeIn("slow")
	$(window).scroll(function(){
	if ($(window).scrollTop()<="250") $(".up_btn").fadeOut("slow")
	else $(".up_btn").fadeIn("slow")
	});
})
