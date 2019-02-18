window.onload = window.onscroll = function() {
	var scrlamnt = document.documentElement.scrollTop;
	if (scrlamnt == 0) {
		document.getElementById("navbar").classList.add("big");	
	} else {
		document.getElementById("navbar").classList.remove("big");
	}

	console.log(scrlamnt);

    if (scrlamnt > document.getElementById("skills").offsetTop) {
		document.getElementById("goto-skills").classList.add("active");
		document.getElementById("goto-intro").classList.remove("active");
		document.getElementById("goto-portfolio").classList.remove("active");

	} else if (scrlamnt > document.getElementById("portfolio").offsetTop) {
		document.getElementById("goto-skills").classList.remove("active");
		document.getElementById("goto-intro").classList.remove("active");
		document.getElementById("goto-portfolio").classList.add("active");
	} else {
		document.getElementById("goto-skills").classList.remove("active");
		document.getElementById("goto-intro").classList.add("active");
		document.getElementById("goto-portfolio").classList.remove("active");
	}
};

var modal1 = document.getElementById('modal1');
var item1 = document.getElementById('item1');

item1.onclick = function() {
	modal1.style.display = "block";
}

var modal2 = document.getElementById('modal2');
var item2 = document.getElementById('item2');

item2.onclick = function() {
	modal2.style.display = "block";
}

var modal3 = document.getElementById('modal3');
var item3 = document.getElementById('item3');

item3.onclick = function() {
	modal3.style.display = "block";
}

var modal4 = document.getElementById('modal4');
var item4 = document.getElementById('item4');

item4.onclick = function() {
	modal4.style.display = "block";
}

var modal5 = document.getElementById('modal5');
var item5 = document.getElementById('item5');

item5.onclick = function() {
	modal5.style.display = "block";
}

var modal6 = document.getElementById('modal6');
var item6 = document.getElementById('item6');

item6.onclick = function() {
	modal6.style.display = "block";
}

window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}

	if (event.target == modal2) {
		modal2.style.display = "none";
	}

	if (event.target == modal3) {
		modal3.style.display = "none";
	}

	if (event.target == modal4) {
		modal4.style.display = "none";
	}

	if (event.target == modal5) {
		modal5.style.display = "none";
	}

	if (event.target == modal6) {
		modal6.style.display = "none";
	}
	
}