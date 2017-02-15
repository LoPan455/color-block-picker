
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


$(document).ready(function(){
  console.log('the document has loaded');

  //create the color blocks
  $('#colorBlockSection').append('<div class="colorBlock" id="red" name="red" data-color="red"></div>');
  $('#red').css({'width':'100px','height':'150px','display':'inline-block','background-color':'red'});
  $('#colorBlockSection').append('<div class="colorBlock" id="blue" name="blue" data-color="blue" ></div>');
  $('#blue').css({'width':'100px','height':'150px','display':'inline-block','background-color':'blue'});
  $('#colorBlockSection').append('<div class="colorBlock" id="green" name="green" data-color="green"></div>');
  $('#green').css({'width':'100px','height':'150px','display':'inline-block','background-color':'green'});
  $('#colorBlockSection').append('<div class="colorBlock" id="yellow" name="yellow" data-color="yellow"></div>');
  $('#yellow').css({'width':'100px','height':'150px','display':'inline-block','background-color':'yellow'});
  $('#colorBlockSection').append('<div class="colorBlock" id="purple" name="purple" data-color="purple"></div>');
  $('#purple').css({'width':'100px','height':'150px','display':'inline-block','background-color':'purple'});

  //create the listener to check for any clicks in each div

  $('.colorBlock').on('click',function(){
    console.log($(this).data('color')); //console log test to confirm correct color is logged
  })





//ask the user to click on a random color
  alert("I have a favorite color. It's your job to guess what it is...click on your guess as to what color here makes my circuits hum");




});


function randomNumber(min, max){
     return Math.floor(Math.random() * (1 + max - min) + min);
   }

var winningColor = randomNumber(0,5));
