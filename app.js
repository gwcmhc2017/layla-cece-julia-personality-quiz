$(document).ready(function() {
var timesYesButtonClicked=0
var timesNoButtonClicked=0

    $('#Yes').click(function() {
      console.log('hi yes')
    timesYesButtonClicked ++;
    });
      $('#No').click(function() {
        console.log ('no button')
        timesNoButtonClicked ++;
      });
$('button').click(function(){
  if (timesYesButtonClicked > timesNoButtonClicked){
    console.log('hi')
  $('#submitz').text("you're a cat person");}

  else if (timesYesButtonClicked < timesNoButtonClicked){
    console.log('hi again')
$('#submitz').text("you're a dog person");}
});
});


  //write your code here!
