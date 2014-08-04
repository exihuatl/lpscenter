$('#penny-vid-01').click(function () {
	var src = 'vid/penny01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#penny-vid-02').click(function () {
	var src = 'vid/penny02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#penny-vid-03').click(function () {
	var src = 'vid/penny03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});