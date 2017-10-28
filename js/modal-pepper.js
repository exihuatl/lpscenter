$('#pepper-vid-01').click(function () {
	var src = '//www.youtube.com/embed/nKdorXKxHhs?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#pepper-vid-02').click(function () {
	var src = '//www.youtube.com/embed/XA2udnZL82c?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#pepper-vid-03').click(function () {
	var src = '//www.youtube.com/embed/ORVwhAKmskM?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});