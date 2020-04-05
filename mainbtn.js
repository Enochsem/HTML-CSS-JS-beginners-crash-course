// alert("button loading.....");

// add in some picture to this list
var pic = [
	"images/e.jpg",
	"images/ab (1).jpg",
	"images/ab (2).jpg",
	"images/ab (3).jpg",
	"images/ab (4).jpg",
	"images/ab (5).jpg",
	"images/ab (6).jpg",
	"images/ab (7).jpg",
	"images/ab (8).jpg",
	"images/ab (9).jpg",
	"images/ab (10).jpg"
];


var btn = document.querySelector("button");
var img = document.querySelector("img");

// variable initialization
var counter = 1;

// adding a click eventlistener to the button in the html
 btn.addEventListener("click",function(){
 	if(counter === 21){
 		counter = 0;
 	}
 	img.src = pic[counter]
 	counter = counter + 1;
 });




