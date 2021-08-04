            //javascript
            //When you oad your game
            //Variable
            //Div
            var start = document.querySelector(".start");






            var backPauseBtn = document.querySelector(".backPause"),
                homePauseBtn = document.querySelector(".HomePause"),
                ExitPauseBtn = document.querySelector(".ExitPause");


            var loseDiv = document.querySelector(".lose"),
                UpperDiv = document.querySelector(".upper"),
                bubbleDiv = document.querySelector(".bubble"),
                charInputDiv = document.querySelector(".mainGameInput"),
                inputerDiv = document.querySelector(".inputer");


            // start.style.display= "none";
            loseDiv.style.filter = "blur(10px)"

            UpperDiv.style.filter = "blur(10px)"
            bubbleDiv.style.filter = "blur(10px)"
            charInputDiv.style.filter = "blur(10px)"
            inputerDiv.style.filter = "blur(10px)"

            setTimeout(function() {


                start.style.display = "none";
                loseDiv.style.filter = "blur(0px)"

                UpperDiv.style.filter = "blur(0px)"
                bubbleDiv.style.filter = "blur(0px)"
                charInputDiv.style.filter = "blur(0px)"
                inputerDiv.style.filter = "blur(0px)"










                // the main game is here 
                //Variables
                //Div
                var winDiv = document.querySelector(".winDiv");

                //Button
                var homeBtn = document.querySelector(".home"),
                    pauseBtnm = document.querySelector(".pause"),
                    backLoseBtn = document.querySelector(".backlose"),
                    replayLoseBtn = document.querySelector(".replaylose"),
                    homelose = document.querySelector(".homelose"),
                    //Win
                    backwin = document.querySelector(".backwin"),
                    replay = document.querySelector(".replaywin"),
                    homeWin = document.querySelector(".HomeWin"),
                    nextWin = document.querySelector(".NextWin"),


                    //Outputer
                    // TrialsOututer= document.querySelector(".bubble"),
                    trialBubble1 = document.querySelector(".trial1"),
                    trialBubble2 = document.querySelector(".trial2"),
                    trialBubble3 = document.querySelector(".trial3"),

                    //Main word outputer
                    characterone = document.querySelector(".charOne"),
                    characterTwo = document.querySelector(".charTwo"),
                    characterthree = document.querySelector(".charThree"),
                    characterFour = document.querySelector(".charFour"),
                    characterFive = document.querySelector(".charFive"),
                    characterSix = document.querySelector(".charSix"),
                    characterSeven = document.querySelector(".charSeven"),
                    characterEight = document.querySelector(".charEight"),
                    characterNine = document.querySelector(".charNine"),

                    //Inputer
                    inputerOneBtn = document.querySelector(".inputOne"),
                    inputerTwoBtn = document.querySelector(".inputTwo"),
                    inputerThreeBtn = document.querySelector(".inputThree"),
                    inputerFourBtn = document.querySelector(".inputFour"),
                    inputerFiveBtn = document.querySelector(".inputFive"),
                    inputerSixBtn = document.querySelector(".inputSix"),
                    inputerSevenBtn = document.querySelector(".inputSeven"),
                    inputerEightBtn = document.querySelector(".inputEight"),
                    inputerNineBtn = document.querySelector(".inputNine"),
                    inputerTenBtn = document.querySelector(".inputTen"),
                    inputerElevenBtn = document.querySelector(".inputEleven"),
                    inputerTwelveBtn = document.querySelector(".inputTwelve"),


                    //working var
                    theWord = "CROCODILE",
                    loseDeterminer = 0,
                    Word1 = "",
                    Word2 = "",
                    word3 = "",
                    word4 = "",
                    word5 = "",
                    word6 = "",
                    word7 = "",
                    word8 = "",
                    word9 = "",

                    InputTimes = 0,
                    Trials = 3,
                    //Input holder var
                    inputerOne = "E",
                    inputerTwo = "P",
                    inputerThree = "G",
                    inputerFour = "T",
                    inputerFive = "R",
                    inputerSix = "D";
                inputerSeven = "Y";
                inputerEight = "I";
                inputerNine = "W";
                inputerTen = "C";
                inputerEleven = "L";
                inputerTwelve = "O";



                //Work Tarts Here
                buttonWork(inputerOneBtn, inputerOne);
                buttonWork(inputerTwoBtn, inputerTwo);
                buttonWork(inputerThreeBtn, inputerThree);
                buttonWork(inputerFourBtn, inputerFour);
                buttonWork(inputerFiveBtn, inputerFive);
                buttonWork(inputerSixBtn, inputerSix);
                buttonWork(inputerSevenBtn, inputerSeven);
                buttonWork(inputerEightBtn, inputerEight);
                buttonWork(inputerNineBtn, inputerNine);
                buttonWork(inputerTenBtn, inputerTen);
                buttonWork(inputerElevenBtn, inputerEleven);
                buttonWork(inputerTwelveBtn, inputerTwelve);


                // buttonLinking
                pauseBtnm.addEventListener("click", function() {
                    window.location.href = "#"
                });

                pagelinking(backLoseBtn, "../level.html");
                pagelinking(replayLoseBtn, "Game1.html");
                pagelinking(homelose, "../play.html");
                pagelinking(homeBtn, "../play.html");
                // characterone.innerHTML




                //Pause
                // variables
                var PauseDiv = document.querySelector(".pauseDiv");

                pauseBtnm.addEventListener("click", function() {

                    if (PauseDiv.style.display === "none") {
                        pauseBtnm.disabled = true;
                        homeBtn.disabled = true;
                        inputerOneBtn.disabled = true;
                        inputerTwoBtn.disabled = true;
                        inputerThreeBtn.disabled = true;
                        inputerFourBtn.disabled = true;
                        inputerFiveBtn.disabled = true;
                        inputerSixBtn.disabled = true;
                        inputerSevenBtn.disabled = true;
                        inputerEightBtn.disabled = true;
                        inputerNineBtn.disabled = true;
                        inputerTenBtn.disabled = true;
                        inputerElevenBtn.disabled = true;
                        inputerTwelveBtn.disabled = true;

                        loseDiv.style.filter = "blur(10px)"

                        UpperDiv.style.filter = "blur(10px)"
                        bubbleDiv.style.filter = "blur(10px)"
                        charInputDiv.style.filter = "blur(10px)"
                        inputerDiv.style.filter = "blur(10px)"


                        PauseDiv.style.display = "flex";
                    } else {
                        pauseBtnm.disabled = false;
                        homeBtn.disabled = false;
                        inputerOneBtn.disabled = false;
                        inputerTwoBtn.disabled = false;
                        inputerThreeBtn.disabled = false;
                        inputerFourBtn.disabled = false;
                        inputerFiveBtn.disabled = false;
                        inputerSixBtn.disabled = false;

                        loseDiv.style.filter = "blur(0px)"

                        UpperDiv.style.filter = "blur(0px)"
                        bubbleDiv.style.filter = "blur(0px)"
                        charInputDiv.style.filter = "blur(0px)"
                        inputerDiv.style.filter = "blur(0px)"

                        PauseDiv.style.display = "none"
                    }

                });
                //backpause
                backPauseBtn.addEventListener("click", function() {
                    if (PauseDiv.style.display === "flex") {
                        pauseBtnm.disabled = false;
                        homeBtn.disabled = false;
                        inputerOneBtn.disabled = false;
                        inputerTwoBtn.disabled = false;
                        inputerThreeBtn.disabled = false;
                        inputerFourBtn.disabled = false;
                        inputerFiveBtn.disabled = false;
                        inputerSixBtn.disabled = false;
                        loseDiv.style.filter = "blur(0px)"

                        UpperDiv.style.filter = "blur(0px)"
                        bubbleDiv.style.filter = "blur(0px)"
                        charInputDiv.style.filter = "blur(0px)"
                        inputerDiv.style.filter = "blur(0px)"

                        PauseDiv.style.display = "none"

                    }

                })

                pagelinking(homePauseBtn, "../play.html")
                pagelinking(ExitPauseBtn, "../exit.html")



                // Win Scripts 
                pagelinking(backwin, "level.html");
                // pagelinking(replay, "play.html");
                pagelinking(homeWin, "../play.html");
                pagelinking(nextWin, "game2.html")
                replay.addEventListener("click", function() {
                    window.location.reload()
                })



                // ListeningStateChangedEvent




                // functions are Here
                function pagelinking(button, link) {

                    button.addEventListener("click", function() {
                        window.location.href = link;
                    });
                    // windows.location.href= link;

                };

                function buttonWork(inputerBtn, inputholder) {
                    var audio = new Audio('salamisound-5143696-heavy-stone-falls-into.mp3');
                    inputerBtn.addEventListener("click", function() {
                        if (InputTimes === 0 & Trials != 0) {
                            characterone.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            Word1 = inputholder;
                        } else if (InputTimes === 1 & Trials != 0) {
                            characterTwo.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);
                            Word2 = inputholder;
                        } else if (InputTimes === 2 & Trials != 0) {
                            characterthree.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            word3 = inputholder;
                        } else if (InputTimes === 3 & Trials != 0) {
                            characterFour.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            word4 = inputholder;
                        } else if (InputTimes === 4 & Trials != 0) {
                            characterFive.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            word5 = inputholder;
                        } else if (InputTimes === 5 & Trials != 0) {
                            characterSix.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            word6 = inputholder;
                        } else if (InputTimes === 6 & Trials != 0) {
                            characterSeven.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            word7 = inputholder;
                        } else if (InputTimes === 7 & Trials != 0) {
                            characterEight.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            word8 = inputholder;
                        } else if (InputTimes === 8 & Trials != 0) {
                            InputTimes++
                            characterNine.innerHTML = inputholder;

                            word9 = inputholder;
                            // console.log(InputTimes);

                            characterFour.innerHTML = inputholder;
                            InputTimes = 0
                            wordmatch = Word1 + Word2 + word3 + word4 + word5 + word6 + word7 + word8 + word9;

                            if (wordmatch === theWord) {
                                if (parseInt(localStorage.getItem("waterLevel")) < 22) {
                                    localStorage.setItem("waterLevel", "22")
                                }
                                winDiv.style.display = "flex";

                                pauseBtnm.disabled = true;
                                homeBtn.disabled = true;
                                inputerOneBtn.disabled = true;
                                inputerTwoBtn.disabled = true;
                                inputerThreeBtn.disabled = true;
                                inputerFourBtn.disabled = true;
                                inputerFiveBtn.disabled = true;
                                inputerSixBtn.disabled = true;
                                inputerSevenBtn.disabled = true;
                                inputerEightBtn.disabled = true;
                                inputerNineBtn.disabled = true;
                                inputerTenBtn.disabled = true;
                                inputerElevenBtn.disabled = true;
                                inputerTwelveBtn.disabled = true;




                                loseDiv.style.filter = "blur(10px)"

                                UpperDiv.style.filter = "blur(10px)"
                                bubbleDiv.style.filter = "blur(10px)"
                                charInputDiv.style.filter = "blur(10px)"
                                inputerDiv.style.filter = "blur(10px)"


                            }
                            if (wordmatch != theWord) {

                                Trials = Trials - 1
                                if (Trials === 2) {
                                    audio.play();
                                    trialBubble3.style.display = "none";

                                } else if (Trials === 1) {
                                    audio.play();
                                    trialBubble2.style.display = "none";

                                } else if (Trials == 0) {
                                    audio.play();
                                    trialBubble1.style.display = "none;"

                                };
                                // alert("Wrong Answer, you have " + String(Trials) +" Trials left");
                                //empty all
                                characterone.innerHTML = ""
                                characterTwo.innerHTML = ""
                                characterthree.innerHTML = ""
                                characterFour.innerHTML = ""
                                characterFive.innerHTML = ""
                                characterSix.innerHTML = ""
                                characterSeven.innerHTML = ""
                                characterEight.innerHTML = ""
                                characterNine.innerHTML = ""


                                Word1 = ""
                                Word2 = ""
                                word3 = ""
                                word4 = ""
                                word5 = ""
                                word6 = ""
                                word7 = ""
                                word8 = ""
                                word9 = ""


                                // TrialsOututer.innerHTML= String(Trials)+ "Trials"
                            }
                            if (Trials === 0) {

                                loseDiv.style.display = "flex";
                                homeBtn.disabled = true;
                                pauseBtnm.disabled = true;
                                inputerOneBtn.disabled = true;
                                inputerTwoBtn.disabled = true;
                                inputerThreeBtn.disabled = true;
                                inputerFourBtn.disabled = true;
                                inputerFiveBtn.disabled = true;
                                inputerSixBtn.disabled = true;
                                inputerSevenBtn.disabled = true;
                                inputerEightBtn.disabled = true;
                                inputerNineBtn.disabled = true;
                                inputerTenBtn.disabled = true;
                                inputerElevenBtn.disabled = true;
                                inputerTwelveBtn.disabled = true;

                                UpperDiv.style.filter = "blur(20px)";
                                bubbleDiv.style.filter = "blur(20px)";
                                inputerDiv.style.filter = "blur(20px)";
                                charInputDiv.style.filter = "blur(20px)";
                                pagelinking(backLoseBtn, "level.html")
                                pagelinking(ExitPauseBtn, "../exit.html")
                                    // alert("You have No Trails, Click Ok to reload")
                                    // location.reload()
                            }

                        };

                    })
                }






























            }, 400);





            //For background Music

            // Onclick Sound
            function play() {
                var audio = new Audio('water-droplet-1.mp3');
                audio.play();
            }



            // For trial bubble
            // function burst(play) {
            //     play.addEventListener("click", function() {
            //         var audio = new Audio('The - Weeknd - Ft - Daft - Punk - Starboy - 01. mp3 ');

            //         if (wordmatch != theWord) {

            //             Trials = Trials - 1
            //             if (Trials === 2) {
            //                 trialBubble3.style.display = "none";
            //                 audio.play();
            //             } else if (Trials === 1) {
            //                 trialBubble2.style.display = "none";
            //             } else if (Trials == 0) {
            //                 trialBubble1.style.display = "none;"
            //             };

            //         }
            //     });
            // }


            // var audio = new Audio('audio.mp3');
            // audio.play();

            // var audio = Audio('C:\Users\Love\Documents\Game_1\Ckay_Felony_9jaflaver.com_.mp3');

            // function music() {
            //     audio.play()
            // }


            // html side
            // <
            // audio src = "C:\Users\Love\Documents\Game_1\The-Weeknd-Ft-Daft-Punk-Starboy-01.mp3"
            // id = "my_audio"
            // loop = "loop" > < /audio>



            // window.onload = function() {
            //     document.getElementById("my_audio").play();
            // }




            // function play() {
            //     var audio = new Audio('C:\Users\Love\Documents\Game_1\Ckay_Felony_9jaflaver.com_.mp3');
            //     audio.play();
            // }

            // var audio = new Audio('C:\Users\Love\Documents\Game_1\sound\The-Weeknd-Ft-Daft-Punk-Starboy-01.mp3');

            // function mus() {
            //     audio.play();
            // }



            // window.onclick = function() {
            //     document.querySelector(".inputOne").play();
            // }