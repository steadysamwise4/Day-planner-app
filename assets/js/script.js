// var nine = moment().hours(9);
// var ten = moment().hours(10);
// var elev = moment().hours(11);
// var twelve = moment().hours(12);
// var one = moment().hours(13);
// var two = moment().hours(14);
// var three = moment().hours(15);
// var four = moment().hours(16);
// var five = moment().hours(17);






var timesArr = [
     9,
     10,
     11,
     12,
     13,
     14,
     15,
     16,
     17
]
console.log(timesArr);

window.onload = displayDate(); loadSchedule();
// makes date/time current up to the second
function displayDate(){
    var day = moment().format('[Today is ] dddd  MMMM Do, YYYY  [ Current  ] h:mm:ss a' );
  document.getElementById('currentDay').innerHTML = day;
  setTimeout(displayDate, 1000); 
}

    
// makes set time load into each time block
    function loadSchedule(){
        
        timesArr.forEach(time => {
           //var timeKey = time.split(" ")[0]
           
            var timeBlock = $("<div></div>").addClass('row time-block').attr("id", time);
            var hourBlock = $("<div>" + moment().hours(time).format('h a') + "</div>").addClass('hour col-2 col-lg-1');
            var textBlock = $("<textarea></textarea>").addClass('col-7 col-lg-9 d-flex plan-text');
            var inputBlock = $("<input />", { type: 'checkbox'}).addClass('check col-1 col-lg-1 checkbox');
            var button = $("<button></button>").addClass('saveBtn col-2 col-md-1 col-lg-1 fas fa-save fa-5x');

            $('.container').on('change', '.checkbox', function() {
                var strike = $(this).siblings('.plan-text').toggleClass('line');
                
                    
           
            });

            if (time < moment().hours()) {
                textBlock.addClass('past')
            }else if (time === moment().hours()) {
                textBlock.removeClass('past');
                textBlock.addClass('present');
            }else {
                textBlock.removeClass('past');
                textBlock.removeClass('present');
                textBlock.addClass('future');
            }


            textBlock.val(localStorage.getItem(time));

           


            timeBlock.append(hourBlock);
            timeBlock.append(textBlock);
            timeBlock.append(inputBlock);
            timeBlock.append(button);
            // appends rows to page
            $(".container").append(timeBlock);
            
        });

    };
    $(".saveBtn").on('click', function () {
        var activity = $(this).siblings(".plan-text").val()
        var hour = $(this).siblings(".hour").text()
        var hourKey = hour.split(" ")[0]
        var hourParse = parseInt(hourKey);
         if(hourParse < 9){
             hourParse = hourParse + 12
         }
        localStorage.setItem(hourParse , activity)
      //  textBlock.innerHTML = planText;
        // set an array of planText data to localStorage
      //  localStorage.setItem("planTextArr", planText );
       // console.log(planText);
       console.log(hourParse);
    }) 

    
         // strike.attr('style', 'text-decoration: line-through')
        
   