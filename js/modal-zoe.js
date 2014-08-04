$('#zoe-vid-01').click(function () {
	var src = 'vid/zoe01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#zoe-vid-02').click(function () {
	var src = 'vid/zoe02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#zoe-vid-03').click(function () {
	var src = 'vid/zoe03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#zoe-vid-04').click(function () {
	var src = 'vid/zoe04.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#zoe-vid-05').click(function () {
	var src = 'vid/zoe05.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});