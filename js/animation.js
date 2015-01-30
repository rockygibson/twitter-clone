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

	$('#tweet-submit').on('click', function(){
		var newTweet = $('.tweet').first().clone(true);
		$('#stream').prepend(newTweet);
		var imgSrc = $('#profile-summary').find('.avatar').attr('src');
		var fullName = $('#profile-summary').find('.fullName').text();
		var userName = $('#profile-summary').find('userName').text();
		var tweetText = $('#wow').val();
		newTweet.find('.avatar').attr('src', imgSrc);
		newTweet.find('.fullname').text(fullName);
		newTweet.find('.username').text(userName);
		newTweet.find('.tweet-text').text(tweetText);
		$('.tweet-compose').val('');

	})





});