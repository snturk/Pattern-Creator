var canvas = document.getElementById('myCanvas');
var draw = canvas.getContext('2d');

//Variables
var ballX;
var ballY;
var ballRadius;
var velocityX;
var velocityY;
var ballColor;
var progSpeed;
var refreshInterval;
var panels = ["myCanvas", "controlPanel", "howTo"];
var isDarkModeActive = false;
var isCleared;

 //Functions   
function run(){
        document.getElementById("runButton").style.opacity = 0.4;
        isCleared = false;
        velocityX = parseFloat(document.getElementById("velocityX").value);
        velocityY = parseFloat(document.getElementById("velocityY").value);
        ballX = parseFloat(document.getElementById("ballX").value);
        ballY = parseFloat(document.getElementById("ballY").value);
        ballRadius = parseFloat(document.getElementById("ballRadius").value);
        ballColor = document.getElementById("ballColor").value;
        progSpeed = parseFloat(document.getElementById("progSpeed").value);
        document.getElementById("runButton").disabled = true;
        if(Math.abs(velocityX) < 10 && Math.abs(velocityY) < 10){
            refreshInterval = setInterval(drawBall, 1000/progSpeed);
        }else{
            refreshInterval = setInterval(drawBall, 200/progSpeed);
        }
        console.log("Progress Speed: " + progSpeed);
        
    }
    function pause() {
        velocityX = 0;
        velocityY = 0;
        document.getElementById("runButton").disabled = false;
        document.getElementById("runButton").style.opacity = 1;
        clearInterval(refreshInterval);
    }
    function clearCanvas(){
        velocityX = 0;
        velocityY = 0;
        ballX =parseFloat(document.getElementById("ballX").value);
        ballY =parseFloat(document.getElementById("ballY").value);
        isCleared = true;
        document.getElementById("runButton").disabled = false;
        document.getElementById("runButton").style.opacity = 1;
        clearInterval(refreshInterval);

        if(!isDarkModeActive){
            draw.fillStyle = "white";
            draw.fillRect(0, 0, canvas.height, canvas.width);
        }else{
            draw.fillStyle = "#282828";
            draw.fillRect(0, 0, canvas.height, canvas.width);
        }

        //draw.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    }
     

    function modeChange(){
        if(!isDarkModeActive){
            isDarkModeActive = true;
            document.getElementById("darkMode").innerHTML = "Light Mode";
            document.body.style.backgroundColor = "#333333";
            if (isCleared) {
                draw.fillStyle = "#282828";
                draw.fillRect(0, 0, canvas.height, canvas.width);
            }
            panels.forEach(function(element){
                document.getElementById(element).style.backgroundColor = "#282828";
                document.getElementById(element).style.color = "white";
            });
            document.getElementById("repo").style.color = "white";
            document.getElementById("darkMode").style.color = "black";
            document.getElementById("darkMode").style.backgroundColor = "white";
        
        }
        else{
            isDarkModeActive = false;
            document.getElementById("darkMode").innerHTML = "Dark Mode";
            document.body.style.backgroundColor = "rgba(19, 47, 100, 0.329)";
            if (isCleared) {
                draw.fillStyle = "white";
                draw.fillRect(0, 0, canvas.height, canvas.width);
            }
            panels.forEach(function(element){
                document.getElementById(element).style.backgroundColor = "white";
                document.getElementById(element).style.color = "black";
            });
            document.getElementById("repo").style.color = "black";
            document.getElementById("darkMode").style.color = "white";
            document.getElementById("darkMode").style.backgroundColor = "black";
        }
       
    }
    function drawBall(){
    
    document.getElementById("ballX").value = parseInt(ballX);
    document.getElementById("ballY").value = parseInt(ballY);
    
    draw.beginPath();
    draw.fillStyle = ballColor;
    draw.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    draw.closePath();
    if(Math.abs(velocityX) < 10 && Math.abs(velocityY) < 10){
        ballX += velocityX;
        ballY += velocityY;
    }else{
        ballX += velocityX/20;
        ballY += velocityY/20;
    }
    
    draw.fill();
    if (ballX > canvas.height - ballRadius || ballX < ballRadius){
        velocityX *=-1;
        document.getElementById("velocityX").value = velocityX;
    }
    if(ballY > canvas.width - ballRadius || ballY < ballRadius){
        velocityY *= -1;
        document.getElementById("velocityY").value = velocityY;
    }

}
