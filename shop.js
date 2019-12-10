//interaction 1: filter clothes by class name and add animation

//gets elements by the class name womens asssigns variable x
//gets elements by the class name womens assigns variable y
//universal variable
//interaction 1: filter clothes by class name and add animation
var x = document.getElementsByClassName("mens");
var y = document.getElementsByClassName("womens");
var so =document.getElementsByClassName("soclothes");
var c= document.getElementsByClassName('circle');

mredo = document.getElementById("menfilter");
wredo = document.getElementById("womenfilter");
allredo =document.getElementById("newArrivals");

mredo.addEventListener("mouseup", mouseUp);
wredo.addEventListener("mouseup", mouseUp);
allredo.addEventListener("mouseup", mouseUp);


//this isn't working and im not sure why
//but i know you need a for loop for classes
//any explanation would be great

for (var i=0; i < so.length; i++){
	so[i].addEventListener("click",showsoldOut);
}

function showsoldOut(){
	setTimeout(soldOut, 4000);
}
function soldOut(){
	for (var i=0; i < c.length; i++){
		c[i].style.display ="block";
	}
	for (var i = 0; i< so.length; i++){
		so[i].style.filter = "grayscale(100%)";
		so[i].style.cursor= "progress";
	}
}


function mouseUp() {
	setTimeout(reanimate, 3000);
  changeBackClothes();
}

function reanimate(){
  for (var i = 0; i < y.length; i++) {
    y[i].classList.remove('floatInanimation');
  }
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove('floatInanimation');
  }

}

// if the clothes do not match their image sources or are not equal to their image sources
//replace with their original sources

function changeBackClothes(){
  if (document.getElementById("hoodie").src !== "Masons_Project/GRAPHICS/Men's/R_Zucc.jpg"){
    document.getElementById("hoodie").src ="Masons_Project/GRAPHICS/Men's/R_Zucc.jpg";
  }
  if (document.getElementById("sweater").src !== "Masons_Project/GRAPHICS/Men's/O_Snake.jpg"){
    document.getElementById("sweater").src ="Masons_Project/GRAPHICS/Men's/O_Snake.jpg";
  }
  if (document.getElementById("buckethat").src !=="Masons_Project/GRAPHICS/Men's/B_BucketHat.jpg"){
    document.getElementById("buckethat").src ="Masons_Project/GRAPHICS/Men's/B_BucketHat.jpg";
  }
}

function menFilter(){

  for (var i = 0; i < y.length; i++) {
    y[i].style.display = 'none';
  }

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = '';
    x[i].classList.add('floatInanimation');
  }
}

function womenFilter(){

  for (var i = 0; i < y.length; i++) {
    y[i].style.display = '';
    y[i].classList.add('floatInanimation');
  }

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
}

function newArrivals(){
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = '';
    x[i].classList.add('floatInanimation');
  }
  for (var i = 0; i < y.length; i++) {
    y[i].style.display = '';
    y[i].classList.add('floatInanimation');
  }
}

//interaction 2: change image source
//replace each image source

function greenHoodie(){
    document.getElementById("hoodie").src ="Masons_Project/GRAPHICS/Men's/L_Zucc.jpg";
  }
function redHoodie(){
   document.getElementById("hoodie").src ="Masons_Project/GRAPHICS/Men's/R_Zucc.jpg";
}

function blackHoodie(){
  document.getElementById("hoodie").src ="Masons_Project/GRAPHICS/Men's/B_Zucc.jpg";
}

function blackHat(){
  document.getElementById("buckethat").src ="Masons_Project/GRAPHICS/Men's/B_BucketHat.jpg";
}

function whiteHat(){
  document.getElementById("buckethat").src ="Masons_Project/GRAPHICS/Men's/W_BucketHat.jpg";
  console.log('working');
}

function orangeSweater(){
  document.getElementById("sweater").src ="Masons_Project/GRAPHICS/Men's/O_Snake.jpg";
}

function blueSweater(){
  document.getElementById("sweater").src ="Masons_Project/GRAPHICS/Men's/B_Snake.jpg";
}

//mobile mobilemenu

//universal variables


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

//interaction 3: all the clothes are sold out
//every even circle creates text that says sorry


//var so = document.getElementsByClassName("soclothes");

//var elm = this,s
//var newone = elm.cloneNode(true);
//elm.parentNode.replaceChild(newone,elm);
//interaction 3: "sold out"
//create a div saying all items are sold out in the store

//function everythingSold{
//  var soclothes = document.getElementsByClassName("soclothes");

//}
