            //javascript
            //Variables
            //Button
            var level1 = document.querySelector(".levelOne"),
                level2 = document.querySelector(".levelTwo"),
                level3 = document.querySelector(".levelThree"),
                level4 = document.querySelector(".levelFour"),
                level5 = document.querySelector(".levelFive"),
                level6 = document.querySelector(".levelSix"),
                level7 = document.querySelector(".levelSeven"),
                level8 = document.querySelector(".levelEight"),
                level9 = document.querySelector(".levelNine"),
                level10 = document.querySelector(".levelTen"),
                backBtn = document.querySelector(".back")


            levelButton(backBtn, "scene.html")
            levelButton(level1, "Game1.html");
            var levelStorage= parseInt(localStorage.getItem("waterLevel"))



            if(levelStorage>=2){
                levelButton(level2, "game2.html");
               
             }else{
                 notReady(level2)
             }

             if(levelStorage>=3){
                levelButton(level3, "game3.html");
               
             }else{
                 notReady(level3)
             }
             
             if(levelStorage>=4){
                levelButton(level4, "game4.html");
               
             }else{
                 notReady(level4)
             }
             
             if(levelStorage>=5){
                levelButton(level5, "game5.html");
               
             }else{
                 notReady(level5)
             }
             
             if(levelStorage>=6){
                levelButton(level6, "game6.html");
               
             }else{
                 notReady(level6)
             }
             
             if(levelStorage>=7){
                levelButton(level7, "game7.html");
               
             }else{
                 notReady(level7)
             }
             if(levelStorage>=8){
                levelButton(level8, "game8.html");
               
             }else{
                 notReady(level8)
             }
             
             if(levelStorage>=9){
                levelButton(level9, "game9.html");
               
             }else{
                 notReady(level9)
             }if(levelStorage>=10){
                levelButton(level10, "game10.html");
               
             }else{
                 notReady(level10)
             }
            levelButton(level1, "Game1.html");
            
           
















            // functions are here 
            function levelButton(buttons, theLevelLink) {
                buttons.addEventListener("click", function() {
                    window.location.href = theLevelLink
                })
            }



                       
     function notReady(buttons){
        buttons.style.backgroundColor="grey";
        buttons.style.opacity= "50%"
    }