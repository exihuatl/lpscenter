$('#vinnie-vid-01').click(function () {
	var src = '//www.youtube.com/embed/gUwRikq1I88?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#vinnie-vid-02').click(function () {
	var src = '//www.youtube.com/embed/JUD1vlZK6rU?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#vinnie-vid-03').click(function () {
	var src = '//www.youtube.com/embed/4Hf-PPAdI6Y?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#vinnie-vid-04').click(function () {
	var src = '//www.youtube.com/embed/JHcIIZ2Ur9o?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});