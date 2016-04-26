$(document).ready(function() {
	 $('button').click(function () {
	 	$('.sidebar ul li').css('display','block'); 
	 	$('button').css('display','none');
	 });
	 $('.content').click(function () {
	 	$('button').css('display','block');
 		$('.sidebar ul li').css('display','none');
	 });
});
