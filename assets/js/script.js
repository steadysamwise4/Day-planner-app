


window.onload = displayDate(); loadTimes();
// makes date/time current up to the second
function displayDate(){
    var day = moment().format('[Today is ] dddd  MMMM Do, YYYY  [ Current time: ] h:mm:ss a' );
  document.getElementById('currentDay').innerHTML = day;
  setTimeout(displayDate, 1000); 
}
 // makes set time load into each time block
 function loadTimes(){
     var nine = moment().hours(13).format("h a");
     document.querySelector('.hour').innerHTML = nine;
 }
