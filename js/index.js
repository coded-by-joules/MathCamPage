$(document).ready(function () {
	// get download count
	$.ajax({
		url: "read_download_count.php",
		cache: false
	}).done(function (data) {
		$("#dlcount").html(data);
	});

	$("#dL").click(function () {
		window.open("https://www.dropbox.com/s/4ezp4r7emy876o5/MathCam.apk?dl=1", "_self");
		$("#downloadApp").modal("show");

		// add download count
		$.ajax({
			url: "add_download_count.php"
		});
	});
});