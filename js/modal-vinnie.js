$('#vinnie-vid-01').click(function () {
	var src = 'vid/vinnie01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#vinnie-vid-02').click(function () {
	var src = 'vid/vinnie02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#vinnie-vid-03').click(function () {
	var src = 'vid/vinnie03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#vinnie-vid-04').click(function () {
	var src = 'vid/vinnie04.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});