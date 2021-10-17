var nine = moment().hours(9).format("h a");
var ten = moment().hours(10).format("h a");
var elev = moment().hours(11).format("h a");
var twelve = moment().hours(12).format("h a");
var one = moment().hours(13).format("h a");
var two = moment().hours(14).format("h a");
var three = moment().hours(15).format("h a");
var four = moment().hours(16).format("h a");
var five = moment().hours(17).format("h a");

var timesArr = [
     nine,
     ten,
     elev,
     twelve,
     one,
     two,
     three,
     four,
     five
]


window.onload = displayDate(); loadSchedule();
// makes date/time current up to the second
function displayDate(){
    var day = moment().format('[Today is ] dddd  MMMM Do, YYYY  [ Current  ] h:mm:ss a' );
  document.getElementById('currentDay').innerHTML = day;
  setTimeout(displayDate, 1000); 
}
 // makes set time load into each time block
 //function loadTimes(){
  //   document.querySelector('.hour').innerHTML = nine;
 //}

 // appends rows to page
 function loadSchedule(){
     
    timesArr.forEach(time => {
        var timeBlock = $("<div></div>").addClass('row time-block');
        var hourBlock = $("<div>" + time + "</div>").addClass('hour col-2 col-lg-1');
        var textBlock = $("<textarea></textarea>").addClass('col-7 col-lg-9 d-flex');
        var inputBlock = $("<input />", { type: 'checkbox'}).addClass('check col-1 col-lg-1');
        var button = $("<button>" + "Save" + "</button>").addClass('saveBtn col-2 col-md-1 col-lg-1');
        timeBlock.append(hourBlock);
        timeBlock.append(textBlock);
        timeBlock.append(inputBlock);
        timeBlock.append(button);
        $(".container").append(timeBlock);
    });
};