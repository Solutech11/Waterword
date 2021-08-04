// js
$("#volume").slider({
    min: 0,
    max: 100,
    value: 0,
  range: "min",
    slide: function(event, ui) {
      setVolume(ui.value / 100);
    }
  });
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  
  function setVolume(myVolume) {
      var myMedia = document.getElementById('myRange');
      myMedia.volume = myVolume;
  }
// functions are here 
function levelButton(buttons, theLevelLink){
    buttons.addEventListner("click", function(){
        window.location.href= theLevelLink
    })
}