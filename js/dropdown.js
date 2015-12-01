var main = function() {
	$('.dropdown-toggle').click(function() {
		$(this).collapse('toggle');
	});
};

$(document).ready(main);