
document.addEventListener('DOMContentLoaded', function() {

	var bookingForm = document.getElementById('bookingform');
    var continentPics = new Array(5)
    continentPics[0] = "./arc.jpg";
	continentPics[1] = "./lanterns.jpg";
	continentPics[2] = "./aus.jpeg";
	continentPics[3] = "./nyc.jpg";
    continentPics[4] = "./trees.jpg";

	bookingForm.addEventListener('change', function() {
		document.getElementById('continentPics').src = continentPics[parseInt(bookingForm.elements['continent'].value)];
		
	})

	document.getElementById("bookingform").addEventListener("submit", thankU);
	function thankU() {
  		alert("Thank you. You are now one step closer to your dream holiday. \nA member of the team will contact you within 48 hours.");
	}

});




