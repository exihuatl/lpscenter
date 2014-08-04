$('#biskits-vid-01').click(function () {
	var src = '//www.youtube.com/embed/Hil5bEGr-mI?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#biskits-vid-02').click(function () {
	var src = '//www.youtube.com/embed/35M62W_GEuY?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#biskits-vid-03').click(function () {
	var src = '//www.youtube.com/embed/sLjUngqgnDE?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#biskits-vid-04').click(function () {
	var src = '//www.youtube.com/embed/y2Q1TiPL-Kc?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});