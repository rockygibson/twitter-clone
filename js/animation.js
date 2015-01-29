$(document).ready(function(){

	$('#char-count').hide();
	$('#tweet-submit').hide();

	$('.tweet-compose').focus(function() {
		$('#char-count').show();
		$('#tweet-submit').show();
		$(this).css('height', '5.0em');
	});

	$('.tweet-compose').on('keydown', function(){
		var count = 140 - $('.tweet-compose').val().length;
		$('#char-count').text(count);
		if(count < 10){
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', 'black');
		};
		if(count < 0) {
			$('#tweet-submit').attr('disabled', '');
		} else {
			$('#tweet-submit').removeAttr('disabled', '');
		};

	});





});