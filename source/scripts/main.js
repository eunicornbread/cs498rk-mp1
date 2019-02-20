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


document.getElementById("goleft").onclick = function(e) {
	e.preventDefault();
	prevSlide();
}
document.getElementById("goright").onclick = function(e) {
	e.preventDefault();
	nextSlide();
}

var index = 0;
var slides = document.getElementsByClassName("slide");
var sliding = false;

function nextSlide() {
	if (!sliding) {
		sliding = true;

		var current = slides[index];
		index = (index + 1 + slides.length) % slides.length;
		var next = slides[index];

		next.classList.add("right");
		next.classList.add("visible");
		next.classList.add("moving");
		current.classList.add("moving");

		setTimeout(function() {
			current.classList.add("left");
			next.classList.remove("right");
		}, 25);

		setTimeout(function() {
			current.classList.remove("visible");
			current.classList.remove("moving");
			next.classList.remove("moving");
			current.classList.remove("left");
			sliding = false;
		}, 550);
	}
}

function prevSlide() {
	if (!sliding) {
		sliding = true;

		var current = slides[index];
		index = (index - 1 + slides.length) % slides.length;
		var next = slides[index];

		next.classList.add("left");
		next.classList.add("visible");
		next.classList.add("moving");
		current.classList.add("moving");

		setTimeout(function() {
			current.classList.add("right");
			next.classList.remove("left");
		}, 25);

		setTimeout(function() {
			current.classList.remove("visible");
			current.classList.remove("moving");
			next.classList.remove("moving");
			current.classList.remove("right");
			sliding = false;
		}, 550);
	}
}
