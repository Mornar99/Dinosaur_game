var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList != "animate")
        {
            character.classList.add("animate"); //u klasu character dodali funkciju
        }
    setTimeout(function(){
        character.classList.remove("animate");//mice animaciju
    },500);//zove funkciju svakih 500ms jer toliko traje animacija,da mozemo vise puta skocit
}

var br=0;
var checkScore = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));//ova funckija vraca vrijednosti css-a objekta
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && characterTop < 130)
    {
        br++;
        document.getElementById("score").innerHTML = "Score: " + br;
    }              
},70); 

//provjera jeli game over, svakih 10ms
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));//ova funckija vraca vrijednosti css-a objekta
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130)
    {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game over\nRefresh the page");
    }              
},10);  
