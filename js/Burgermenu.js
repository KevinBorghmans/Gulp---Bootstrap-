$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
    
    $(this).find(".preloader").delay(5000).fadeOut("slow", function () {
    $(this).css({opacity:"0"});
    $(".welcome-text").css({'display':'block', 'opacity':'0','margin-top':'40px'}).animate({'opacity':'1','margin-top':'0px'}, 1500);
    $(".text-my-own-part").delay(500).css({'display':'block', 'opacity':'0','margin-top':'55px'}).animate({'opacity':'1','margin-top':'15px'}, 1500);
});
});