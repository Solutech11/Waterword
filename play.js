            //javascript
            // console.log(localStorage.getItem("waterLevel"));
            // if(localStorage.getItem("waterLevel")==="" or )
            //Variables
            //Button
            var Yes = document.querySelector(".YesPlay"),
                No = document.querySelector(".NoExit")


            Pagelinking(Yes, "scene.html")
            Pagelinking(No, "exit.html")
                // levelButton(level1, "Game1.html");
                // Yes.addEventListener("click",function(){
                //     window.close()
                // })











            // functions are here 
            function Pagelinking(buttons, theLevelLink) {
                buttons.addEventListener("click", function() {
                    window.location.href = theLevelLink
                })
            }


            function plat() {
                var mut = new Audio('Yanni_Ethnicity.mp3');
                mut.play();
            }