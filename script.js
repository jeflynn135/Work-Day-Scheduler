$(function () {
    // Add a listener for click events on the save button.
    $(".saveBtn").on("click", function(){
      var todo = $(this).siblings(".description").val()
      var id = $(this).parent().attr("id")
      localStorage.setItem(id,todo);
      });
    // Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
    $(".time-block").each(function(){
      var id = $(this).attr("id").split("hour-")[1]
      var hour = dayjs().hour() 
if (id < hour) {
  $(this).addClass("past").removeClass("present future")
} else if (id = hour) {
  $(this).addClass("present").removeClass("past future")
} else {
  $(this).addClass("future").removeClass("past present")
}
    })
    // Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    $(".time-block").each(function(){
      var id = $(this).attr("id")
      $(this).children(".description").val(localStorage.getItem(id))
    })
    // Add code to display the current date in the header of the page.
    var today = dayjs();
    var dayWeek = today.format('[Today is] dddd MMM D, YYYY');
$('#currentDay').text(dayWeek);
  }); 