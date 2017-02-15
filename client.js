
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



// $(document).ready(function(){
//   console.log('the document has loaded');
//
//   for (var i = 0; i < 5; i++) {
//     var newDiv = $('<div class="colorBlock" id="'+i+'">');
//     newDiv.data('idNumber',i);
//     $('#colorBlockSection').append(newDiv);
//     // $('#'+i).css({'width':'100px','height':'150px','display':'inline-block'});
//     console.log(newDiv.data().idNumber);
//     if(newDiv.data().idNumber == 0){
//       $('#'+i).css({'width':'100px','height':'150px','display':'inline-block','background-color':'red'});
//
//     }
//
//   }
//
// });

/*
//random number generator
function randomNumber(min, max){
return Math.floor(Math.random() * (1 + max - min) + min);
}
//sets the winning color to the color with the id that corresponds to the random number
var winningColor = '';
var winningColorId = randomNumber(0,4);

if(winningColorId == 0){
winningColor = 'red'
}
if(winningColorId == 1){
winningColor = 'blue'
}
if(winningColorId == 2){
winningColor = 'green'
}
if(winningColorId == 3){
winningColor = 'yellow'
}
if(winningColorId == 4){
winningColor = 'purple'
}
console.log('the winning color is: ',winningColor);
*/
var colorChoices = []; //stores all the color choices and their attributes
var colorId = 0;

$(document).ready(function(){

  console.log('the document has loaded');

  //create the listener for confirming the color choice and appending to the DOM
  $('form').on('submit',function(event){
    event.preventDefault();
    console.log('confirm button clicked, we picked up this input: ', $(this).serializeArray());
    var colorArray = $(this).serializeArray(); // [{}, {}, {}]
    var newColorObject = {}; // {colorName: 'red', id: '0'}

    for (var i = 0; i < colorArray.length; i++) {
      var inputColorObject = colorArray[i];
      newColorObject[inputColorObject.name] = inputColorObject.value;
      newColorObject.id = colorId;
      colorId++;
      colorChoices.push(newColorObject);
    }
    $('.colorBlock').remove();
    for (var i = 0; i < colorChoices.length; i++) {
      var newDiv = $('<div class="colorBlock" id="'+ colorChoices[i].id +'" data-color="'+colorChoices[i].colorName+'">');
      $('#colorBlockSection').append(newDiv);
      $('#'+i).css({'background-color':''+ colorChoices[i].colorName +''});
    }
  });
});
