$('#biskits-vid-01').click(function () {
	var src = 'vid/biskits01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#biskits-vid-02').click(function () {
	var src = 'vid/biskits02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#biskits-vid-03').click(function () {
	var src = 'vid/biskits03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#biskits-vid-04').click(function () {
	var src = 'vid/biskits04.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});