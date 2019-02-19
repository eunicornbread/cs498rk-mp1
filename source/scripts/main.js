/* Navbar */
window.onload = window.onscroll = function() {
	/* Navbar resizing */
	var scrlamnt = document.documentElement.scrollTop;
	if (scrlamnt == 0) {
		document.getElementById("navbar").classList.add("big");	
	} else {
		document.getElementById("navbar").classList.remove("big");
	}

	/* For debugging purpose */
	/* console.log(scrlamnt); */

	/* Position indicator */
    if (scrlamnt > (document.getElementById("skills").offsetTop 
    					- document.getElementById("navbar").clientHeight)) {
		document.getElementById("goto-skills").classList.add("active");
		document.getElementById("goto-intro").classList.remove("active");
		document.getElementById("goto-portfolio").classList.remove("active");

	} else if (scrlamnt > (document.getElementById("portfolio").offsetTop 
    					- document.getElementById("navbar").clientHeight)) {
		document.getElementById("goto-skills").classList.remove("active");
		document.getElementById("goto-intro").classList.remove("active");
		document.getElementById("goto-portfolio").classList.add("active");
	} else {
		document.getElementById("goto-skills").classList.remove("active");
		document.getElementById("goto-intro").classList.add("active");
		document.getElementById("goto-portfolio").classList.remove("active");
	}
};

/* Modal */
var modal1 = document.getElementById('modal1');
var item1 = document.getElementById('item1');
var close1 = document.getElementById('close1');

item1.onclick = function() {
	modal1.style.display = "block";
}

var modal2 = document.getElementById('modal2');
var item2 = document.getElementById('item2');
var close2 = document.getElementById('close2');

item2.onclick = function() {
	modal2.style.display = "block";
}

var modal3 = document.getElementById('modal3');
var item3 = document.getElementById('item3');
var close3 = document.getElementById('close3');

item3.onclick = function() {
	modal3.style.display = "block";
}

var modal4 = document.getElementById('modal4');
var item4 = document.getElementById('item4');
var close4 = document.getElementById('close4');

item4.onclick = function() {
	modal4.style.display = "block";
}

var modal5 = document.getElementById('modal5');
var item5 = document.getElementById('item5');
var close5 = document.getElementById('close5');

item5.onclick = function() {
	modal5.style.display = "block";
}

var modal6 = document.getElementById('modal6');
var item6 = document.getElementById('item6');
var close6 = document.getElementById('close6');

item6.onclick = function() {
	modal6.style.display = "block";
}

window.onclick = function(event) {
	if (event.target == modal1 || event.target == close1) {
		modal1.style.display = "none";
	}

	if (event.target == modal2 || event.target == close2) {
		modal2.style.display = "none";
	}

	if (event.target == modal3 || event.target == close3) {
		modal3.style.display = "none";
	}

	if (event.target == modal4 || event.target == close4) {
		modal4.style.display = "none";
	}

	if (event.target == modal5 || event.target == close5) {
		modal5.style.display = "none";
	}

	if (event.target == modal6 || event.target == close6) {
		modal6.style.display = "none";
	}
}

/* Carousel */

document.getElementById("left").onclick = function() {
	moveLeft();
	updateSlide();
}
document.getElementById("right").onclick = function() {
	moveRight();
	updateSlide();
}

var index = 0;
updateSlide(index);

function moveLeft() {
	index = index + 1;
}

function moveRight() {
	index = index - 1;
}

function updateSlide() {
  var slides = document.getElementsByClassName("slide");
  index = (index + slides.length) % slides.length;
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[index].style.display = "block";
}