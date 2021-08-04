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


            levelButton(backBtn, "../scene.html")
            var levelStorage= parseInt(localStorage.getItem("waterLevel"))



            if(levelStorage>=22){
                levelButton(level2, "Game2.html");
               
             }else{
                 notReady(level2)
             }

             if(levelStorage>=23){
                levelButton(level3, "Game3.html");
               
             }else{
                 notReady(level3)
             }
             
             if(levelStorage>=24){
                levelButton(level4, "Game4.html");
               
             }else{
                 notReady(level4)
             }
             
             if(levelStorage>=25){
                levelButton(level5, "Game5.html");
               
             }else{
                 notReady(level5)
             }
             
             if(levelStorage>=26){
                levelButton(level6, "Game6.html");
               
             }else{
                 notReady(level6)
             }
             
             if(levelStorage>=27){
                levelButton(level7, "Game7.html");
               
             }else{
                 notReady(level7)
             }
             if(levelStorage>=28){
                levelButton(level8, "Game8.html");
               
             }else{
                 notReady(level8)
             }
             
             if(levelStorage>=29){
                levelButton(level9, "Game9.html");
               
             }else{
                 notReady(level9)
             }if(levelStorage>=30){
                levelButton(level10, "Game10.html");
               
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