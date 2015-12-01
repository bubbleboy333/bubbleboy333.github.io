var main = function() {
	$('#end-button').click(function() {
		var input = prompt("Please enter text to be displayed below");
		$('#end p').text(input);
	});
};

$(document).ready(main);