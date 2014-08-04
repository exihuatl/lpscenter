$('#pepper-vid-01').click(function () {
	var src = 'vid/pepper01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#pepper-vid-02').click(function () {
	var src = 'vid/pepper02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#pepper-vid-03').click(function () {
	var src = 'vid/pepper03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});