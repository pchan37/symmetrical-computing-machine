var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "LightSteelBlue";

var rid;

var rainDrop = function(e){
    var radius = 10;
    var dr = 1;
    window.cancelAnimationFrame(rid);

    var makeCircleAppear = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
        if (radius >= 10){
	    dr = -1;
	}else if (radius <= 0){
	    dr = 1;
	}
	radius += dr;
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
    var xcor = Math.random() * (canvas.width - 128);
    var ycor = Math.random() * (canvas.height - 72);
    window.cancelAnimationFrame(rid);

    var drawLogo = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, xcor, ycor, width, height);
        if (xcor <= 0 || xcor + 128 >= canvas.width){
	    dx *= -1;
	}
	if (ycor <= 0 || ycor + 72 >= canvas.height){
	    dy *= -1;
	}
        xcor += dx;
	ycor += dy;
	
	rid = window.requestAnimationFrame(drawLogo);
    };

    drawLogo();
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
