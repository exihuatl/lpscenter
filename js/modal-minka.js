$('#minka-vid-01').click(function () {
	var src = '//www.youtube.com/embed/dWrJz2Kk3P8?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#minka-vid-02').click(function () {
	var src = '//www.youtube.com/embed/aPrUrpKGmMk?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#minka-vid-03').click(function () {
	var src = '//www.youtube.com/embed/by43LLV0dVo?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});