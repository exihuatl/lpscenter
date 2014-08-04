$('#sunil-vid-01').click(function () {
	var src = 'vid/sunil01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#sunil-vid-02').click(function () {
	var src = 'vid/sunil02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#sunil-vid-03').click(function () {
	var src = 'vid/sunil03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#sunil-vid-04').click(function () {
	var src = 'vid/sunil04.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});