var ball = document.getElementById("ball")

ball.addEventListener("click",function(){
    var x = ball.classList.toggle("mystyle");
    document.body.classList.toggle("dark-mode");
    
})