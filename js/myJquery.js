$(document).ready(function() {
	$.get("includes/header.inc.html", function(data) {
		$("#header").html(data);
	
		var url = window.location;
		// Will only work if string in href matches with location
		$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

		// Will also work for relative and absolute hrefs
		$('ul.nav a').filter(function() {
		return this.href == url;
		}).parent().addClass('active');
		
	});
	
	$.get("includes/footer.inc.html", function(data) {
		$("#footer").html(data);
	});
	
	

	
	/*
	$("li a").click (function (e) {
		$(this).addClass('active').siblings().removeClass('active');
	}); */

});








