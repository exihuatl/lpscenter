$('#blythe-vid-01').click(function () {
	var src = '//www.youtube.com/embed/BD3tF9Z-To8?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#blythe-vid-02').click(function () {
	var src = '//www.youtube.com/embed/p-5SC8vWac4?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#blythe-vid-03').click(function () {
	var src = '//www.youtube.com/embed/kwzsmV65WrA?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#blythe-vid-04').click(function () {
	var src = '//www.youtube.com/embed/VcsXnHHJnjk?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});
$('#blythe-vid-05').click(function () {
	var src = '//www.youtube.com/embed/xwrpnYSOCI0?rel=0&amp;autoplay=1';
	$('#myModal').modal('show');
	$('#myModal iframe').attr('src', src);
});








$('#myModal').on('hidden.bs.modal', function() {
	$('#myModal iframe').removeAttr('src');
});