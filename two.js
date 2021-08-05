           //javascript
    //Variables
//Button
var homeBtn= document.querySelector(".home"),
    pauseBtnm= document.querySelector(".pause"),

//Outputer
    TrialsOututer= document.querySelector(".bubble"),
    //Main word outputer
    characterone= document.querySelector(".charOne"),
    characterTwo= document.querySelector(".charTwo"),
    characterthree= document.querySelector(".charThree"),
    characterFour= document.querySelector(".charFour"),

//Inputer
    inputerOneBtn= document.querySelector(".inputOne"),
    inputerTwoBtn= document.querySelector(".inputTwo"),
    inputerThreeBtn= document.querySelector(".inputThree"),
    inputerFourBtn= document.querySelector(".inputFour"),
    inputerFiveBtn= document.querySelector(".inputFive"),
    inputerSixBtn= document.querySelector(".inputSix"),

//working var
    theWord= "SHIT",
    Word1= "",
    Word2="",
    word3="",
    word4="",
    InputTimes=0,
    Trials= 3,
    //Input holder var
    inputerOne= "I",
    inputerTwo= "S",
    inputerThree= "B",
    inputerFour= "T",
    inputerFive= "H",
    inputerSix= "D";
    
            //Work Tarts Here
buttonWork(inputerOneBtn, inputerOne);
buttonWork(inputerTwoBtn, inputerTwo);
buttonWork(inputerThreeBtn, inputerThree);
buttonWork(inputerFourBtn, inputerFour);
buttonWork(inputerFiveBtn, inputerFive);
buttonWork(inputerSixBtn, inputerSix);






// characterone.innerHTML






// functions are Here
function buttonWork(inputerBtn, inputholder){
    inputerBtn.addEventListener("click",function(){
        if(InputTimes===0 & Trials!=0){
            characterone.innerHTML= inputholder;
            InputTimes++
            // console.log(InputTimes);

            Word1= inputholder;
        }else if(InputTimes===1& Trials!=0){
            characterTwo.innerHTML= inputholder;
            InputTimes++
            // console.log(InputTimes);
            Word2= inputholder;
        }else if(InputTimes===2& Trials!=0){
            characterthree.innerHTML= inputholder;
            InputTimes++
            // console.log(InputTimes);

            Word3= inputholder;
        }else if(InputTimes===3& Trials!=0){
            Word4= inputholder;
            // console.log(InputTimes);

            characterFour.innerHTML= inputholder;
            InputTimes= 0
            wordmatch= Word1+Word2+Word3+Word4;
            
            if(wordmatch===theWord){

                alert("Correct")
                document.querySelector(".body").style.filter= "blur(10px)"
                setTimeout(function(){
                location.reload()

                },4000)
            }
            if(wordmatch!=theWord ){
                
                Trials=Trials-1
                alert("Wrong Answer, you have " + String(Trials) +" Trials left");
                //empty all
                characterone.innerHTML=""
                characterTwo.innerHTML=""
                characterthree.innerHTML=""
                characterFour.innerHTML=""
                Word1=""
                Word2=""
                Word3=""
                Word4=""

                TrialsOututer.innerHTML= String(Trials)+ "Trials"
            }
            if(Trials===0){
                alert("You have No Trails, Click Ok to reload")
                location.reload()
            }
            
        };

    })
}
