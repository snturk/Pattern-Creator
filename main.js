var canvas = document.getElementById('myCanvas');
var draw = canvas.getContext('2d');

//Variables
var cnvHeight = document.getElementById("myCanvas").height;
var cnvWidth = document.getElementById("myCanvas").width;
var ballX;
var ballY;
var ballRadius = 4;
var velocityX;
var velocityY;
var ballColor;
var progSpeed;
var refreshInterval;

 //Functions   
function setVar(){
       velocityX = parseFloat(document.getElementById("velocityX").value);
       velocityY = parseFloat(document.getElementById("velocityY").value);
        ballX = parseFloat(document.getElementById("ballX").value);
        ballY = parseFloat(document.getElementById("ballY").value);
        ballColor = document.getElementById("ballColor").value;
        progSpeed = parseFloat(document.getElementById("progSpeed").value);
        document.getElementById("runButton").disabled = true;
        refreshInterval = setInterval(drawBall, 1000/progSpeed);
    }
    function pause() {
        velocityX = 0;
        velocityY = 0;
        document.getElementById("runButton").disabled = false;
        clearInterval(refreshInterval);
    }
    function clearCanvas(){
        velocityX = 0;
        velocityY = 0;
        ballX =parseFloat(document.getElementById("ballX").value);
        ballY =parseFloat(document.getElementById("ballY").value);
        document.getElementById("runButton").disabled = false;
        clearInterval(refreshInterval);
        draw.fillStyle = "white";
        draw.fillRect(0, 0, cnvWidth, cnvHeight);
        draw.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    }
    function drawBall(){
    
    console.log("Vx: " + velocityX);
    console.log("Vy: " + velocityY);
    document.getElementById("ballX").value = ballX;
    document.getElementById("ballY").value = ballY;
    
    draw.beginPath();
    draw.fillStyle = ballColor;
    draw.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    draw.closePath();
    ballX += velocityX;
    ballY += velocityY;
    draw.fill();
    if (ballX > cnvWidth - ballRadius || ballX < ballRadius){
        velocityX *=-1;
        document.getElementById("velocityX").value = velocityX;
        console.log("VelocityY has been set.");
    }
    if(ballY > cnvHeight - ballRadius || ballY < ballRadius){
        velocityY *= -1;
        document.getElementById("velocityY").value = velocityY;
        console.log("VelocityY has been set.");
    }

}