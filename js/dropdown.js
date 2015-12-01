var main = function() {
	$('.dropdown').click(function() {
		$(this).collapse('toggle');
	});
};

$(document).ready(main);