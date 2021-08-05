            //javascript
            //Variables
            //Button
            var Yes = document.querySelector(".YesExit"),
                No = document.querySelector(".NoExit");

            No.addEventListener("click", function() {
                window.history.back()
            })





            // levelButton(level1, "Game1.html");
            Yes.addEventListener("click", function() {
                window.close();
            })











            // functions are here 
            function Pagelinking(buttons, theLevelLink) {
                buttons.addEventListener("click", function() {
                    window.location.href = theLevelLink
                })
            }