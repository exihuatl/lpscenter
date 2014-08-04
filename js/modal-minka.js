$('#minka-vid-01').click(function () {
	var src = 'vid/minka01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#minka-vid-02').click(function () {
	var src = 'vid/minka02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#minka-vid-03').click(function () {
	var src = 'vid/minka03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});