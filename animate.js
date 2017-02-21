var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "LightSteelBlue";

var rid;

var rainDrop = function(){
    var radius = 1;
    var dr = 1;
    window.cancelAnimationFrame(rid);

    var makeCircleAppear = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
	ctx.fill();
        if (radius == 1){
	    dr = -1;
	}else{
	    dr = 1;
	}
	r += dr;
	rid = window.requestAnimationFrame(makeCircleAppear);
    };

    makeCircleAppear();
};

var img = new Image();
img.src = "dvd.png";

var width = 128;
var height = 72;

var makeDVDLogoBounce = function(){
    var dx = 1;
    var dy = 1;
    var xcor = Math.random() * (canvas.width - 50);
    var ycor = Math.random() * (canvas.height - 50);
    window.cancelAnimationFrame(rid);

    var drawLogo = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, xcor, ycor, width, height);
        if (xcor <= 0 || xcor + 100 >= canvas.width){
	    dx *= -1;
	}
	if (ycor <= 0 || ycor + 50 >= canvas.height){
	    dy *= -1;
	}
        xcor += dx;
	ycor += dy;
	
	rid = window.requestAnimationFrame(drawLogo);
    };
};

var circleButton = document.getElementById("circleButton");
circleButton.addEventListener("click", rainDrop);

var dvdButton = document.getElementById("dvdButton");
dvdButton.addEventListener("click", makeDVDLogoBounce);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", function(){
    window.cancelAnimationFrame(rid);
});

rid = window.requestAnimationFrame(makeDVDLogoBounce);
