$('#russell-vid-01').click(function () {
	var src = 'vid/russell01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#russell-vid-02').click(function () {
	var src = 'vid/russell02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#russell-vid-03').click(function () {
	var src = 'vid/russell03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#russell-vid-04').click(function () {
	var src = 'vid/russell04.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});