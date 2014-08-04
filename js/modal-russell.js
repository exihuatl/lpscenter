$('#russell-vid-01').click(function () {
	var src = '//www.youtube.com/embed/KGcD3y-gpuQ?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#russell-vid-02').click(function () {
	var src = '//www.youtube.com/embed/eaXKasaKnLA?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#russell-vid-03').click(function () {
	var src = '//www.youtube.com/embed/_0g7MrbuXjY?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#russell-vid-04').click(function () {
	var src = '//www.youtube.com/embed/Mtm8ND_zhwI?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});