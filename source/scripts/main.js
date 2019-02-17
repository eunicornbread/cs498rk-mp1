window.onscroll = function() {
	if (document.documentElement.scrollTop == 0) {
		document.getElementById("navbar").classList.add("big");	
	} else {
		document.getElementById("navbar").classList.remove("big");
	}


};