
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

$(document).ready(function(){
  console.log('the document has loaded');

  //create the color blocks
  $('#colorBlockSection').append('<div class="colorBlock" id="0" name="red" data-color="red"></div>');
  $('#0').css({'width':'100px','height':'150px','display':'inline-block','background-color':'red'});
  $('#colorBlockSection').append('<div class="colorBlock" id="1" name="blue" data-color="blue" ></div>');
  $('#1').css({'width':'100px','height':'150px','display':'inline-block','background-color':'blue'});
  $('#colorBlockSection').append('<div class="colorBlock" id="2" name="green" data-color="green"></div>');
  $('#2').css({'width':'100px','height':'150px','display':'inline-block','background-color':'green'});
  $('#colorBlockSection').append('<div class="colorBlock" id="3" name="yellow" data-color="yellow"></div>');
  $('#3').css({'width':'100px','height':'150px','display':'inline-block','background-color':'yellow'});
  $('#colorBlockSection').append('<div class="colorBlock" id="4" name="purple" data-color="purple"></div>');
  $('#4').css({'width':'100px','height':'150px','display':'inline-block','background-color':'purple'});

  //create the listener to check for any clicks in each div
  //and alerts the user the result

  $('.colorBlock').on('click',function(){
    // console.log('User clicked: ',$(this).data('color'));
    if($(this).data('color') == winningColor){
      $('#pickedColor').html(winningColor + ', which happens to be my favorite color. You win!  I have picked a new ' +
    'color.  Please try again...');
    var winningColorId = randomNumber(0,4);
    console.log(winningColorId);
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
    } else {
      $('#pickedColor').html($(this).data('color') + ', which is not the color I chose.  Please try again');
    }

  })

});
