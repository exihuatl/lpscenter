$('#penny-vid-01').click(function () {
	var src = '//www.youtube.com/embed/aL079K9hD-w?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#penny-vid-02').click(function () {
	var src = '//www.youtube.com/embed/TYdOWujeyV8?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#penny-vid-03').click(function () {
	var src = '//www.youtube.com/embed/oXkYKkqA0Ds?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});