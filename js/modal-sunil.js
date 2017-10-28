$('#sunil-vid-01').click(function () {
	var src = '//www.youtube.com/embed/nIAJbgx5fOc?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#sunil-vid-02').click(function () {
	var src = '//www.youtube.com/embed/n01XO8CZVh0?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#sunil-vid-03').click(function () {
	var src = '//www.youtube.com/embed/zJ9Y3DQN1w4?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#sunil-vid-04').click(function () {
	var src = '//www.youtube.com/embed/Fsm6eB4vvzc?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});