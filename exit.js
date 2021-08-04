            //javascript
    //Variables
//Button
var Yes = document.querySelector(".YesExit"),
    No =document.querySelector(".NoExit")


Pagelinking(No, "play.html")
// levelButton(level1, "Game1.html");
Yes.addEventListener("click",function(){
    window.close();
})











// functions are here 
function Pagelinking(buttons, theLevelLink){
    buttons.addEventListener("click", function(){
        window.location.href= theLevelLink
    })
}