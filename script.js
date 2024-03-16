

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
document.write(time);


// var calendar = require('dayjs/plugin/calendar')
// dayjs.extend(calendar)


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(".saveBtn").on("click", function(){
      console.log($(this).siblings(".description").val())
      var todo = $(this).siblings(".description").val()
      var id = $(this).parent().attr("id")
      localStorage.setItem(id,todo);
      });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    $(".time-block").each(function(){
      var id = $(this).attr("id").split("hour-")[1]
      var hour = dayjs().hour() 
console.log(id)
if (id < hour) {
  $(this).addClass("past").removeClass("present future")
} else if (id = hour) {
  $(this).addClass("present").removeClass("past future")
} else (id > hour); {
  $(this).addClass("future").removeClass("past present")
}
    })
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $(".time-block").each(function(){
      console.log($(this).attr("id"))
      var id = $(this).attr("id")
      $(this).children(".description").val(localStorage.getItem(id))
    })
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
var dayWeek = today.format('[Today is] dddd MMM D, YYYY');
$('#currentDay').text(dayWeek);
$('#currentHour').text(hourDay);
  }); 