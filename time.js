$(document).ready(function() {

	var minutes = ('0' + new Date().getMinutes()).slice(-2);
	var hours = ('0' + new Date().getHours()).slice(-2);
	var time = hours + ':' + minutes;

	$(".time").html(time);
});