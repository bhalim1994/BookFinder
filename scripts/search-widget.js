//Adds active parent class when search bar is clicked
$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

//Removes active parent class when not in focus (User clicks somewhere else)
$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});