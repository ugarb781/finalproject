
var m = document.getElementsByClassName("hamburger");
exit = document.getElementById("hamburger2");
var exitbars = document.getElementsByClassName("exit");
var links =document.getElementsByClassName("mobilemenu");
var ul =document.getElementsByClassName("menulink");

for (var i=0; i < m.length; i++){
	m[i].addEventListener("click",displayMenu);
}

exit.addEventListener("click", closeMenu);

function displayMenu(){
	for (var i=0; i < m.length; i++){
		m[i].style.display="none";
		exit.style.display="block";
		for (var i=0; i < exitbars.length; i++){
			exitbars[i].style.display="block";
		}
		for (var i =0; i<links.length; i++){
			links[i].style.display="block";
		}
		for (var i =0; i<ul.length; i++){
			ul[i].style.display="block";
		}
	}
}

function closeMenu(){
	for (var i=0; i < m.length; i++){
		m[i].style.display="block";
		exit.style.display="none";
		for (var i=0; i < exitbars.length; i++){
			exitbars[i].style.display="none";
		}
		for (var i =0; i<links.length; i++){
			links[i].style.display="none";
		}
		for (var i =0; i<ul.length; i++){
			ul[i].style.display="none";
		}
	}
}
