console.log('script has loaded');
//
// jQuery Color Block Picker
// You will be creating a little 'pick the block' game with HTML, CSS, and jQuery!
//
// On document load, append four (or more!) divs on to the DOM with jQuery, each colored with a different color. Each div needs to know which color it is.
//
// Prompt the player to pick one of the color blocks you created at random.
//
// Here is a handy function to generate a random number given a minimum and maximum.
//
// function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }
// If the player clicks on the correct color block, give them a success message. If they pick the wrong color, let them know.



$(document).ready(function(){
  console.log('the document has loaded');

  for (var i = 0; i < 5; i++) {
    var newDiv = $('<div class="colorBlock" id="'+i+'">');
    newDiv.data('idNumber',i);
    $('#colorBlockSection').append(newDiv);
    $('#'+i).css({'width':'100px','height':'150px'});
  }
});
