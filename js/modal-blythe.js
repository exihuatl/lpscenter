$('#blythe-vid-01').click(function () {
	var src = 'vid/blythe01.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#blythe-vid-02').click(function () {
	var src = 'vid/blythe02.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#blythe-vid-03').click(function () {
	var src = 'vid/blythe03.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#blythe-vid-04').click(function () {
	var src = 'vid/blythe04.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#blythe-vid-05').click(function () {
	var src = 'vid/blythe05.mp4';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});