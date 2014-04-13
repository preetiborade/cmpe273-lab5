$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	var url = "/library/v1/books/"+ isbn +"?status=lost";

	var ajax = $.ajax({
	    url: url,
	    type: "PUT",
	    dataType: "json",
	    contentType:"application/json",
	    success: function(response) {
	        $('#'+isbn+'bookStatus').html("lost");
	        $('#'+isbn).prop("disabled",true);
	    }

	});
	alert( 'Book with ISBN ' + isbn + ' has been reported lost.');
});