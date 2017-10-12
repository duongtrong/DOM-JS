var male = document.getElementById("male");
male.onclick = function () {
	var male = this.checked;
	var arraymale = document.getElementsByClassName("nam");
	var arrayfemale = document.getElementsByClassName("nu");
	for (var i = 0; i < arraymale.length; i++) {
		arraymale[i].checked = male;
	}
}

var female = document.getElementById("female");
female.onclick = function () {
	var female = this.checked;
	var arrayfemale = document.getElementsByClassName("nu");
	var arraymale = document.getElementsByClassName("nam");
	for (var i = 0; i < arrayfemale.length; i++) {
		arrayfemale[i].checked = female;
	}
}


var hiddennam = document.getElementById("male");
hiddennam.onclick = function () {
	var check = this.checked;
	var hiddennam = document.getElementsByClassName("nam");
	var hiddennu = document.getElementsByClassName("nu");
	for (var i = 0; i < hiddennam.length; i++) {
		hiddennam[i].style.display = "block";
		hiddennu[i].style.display = "none";
	}
}


var hiddennu = document.getElementById("female");
hiddennu.onclick = function () {
	var hiddennu = document.getElementsByClassName("nu");
	var hiddennam = document.getElementsByClassName("nam");
	for (var i = 0; i < hiddennu.length; i++) {
		hiddennu[i].style.display = "block";
		hiddennam[i].style.display = "none";
	}
}

