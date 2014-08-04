$('#zoe-vid-01').click(function () {
	var src = '//www.youtube.com/embed/nW1o1AT5qlo?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#zoe-vid-02').click(function () {
	var src = '//www.youtube.com/embed/5PHwNObykhA?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#zoe-vid-03').click(function () {
	var src = '//www.youtube.com/embed/5c64j_uYnsE?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#zoe-vid-04').click(function () {
	var src = '//www.youtube.com/embed/VDqWRaM-j4I?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#zoe-vid-05').click(function () {
	var src = '//www.youtube.com/embed/5T_0bKa7mv8?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});