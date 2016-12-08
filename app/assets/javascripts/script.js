$(document).ready(function() {
  $(".navItem").click(function(event) {
    event.preventDefault();

    $(".navItem").removeClass("active").removeClass("on");
    $(this).addClass("active").addClass("on");
    var panel = $(this).attr('id');
    var items = document.querySelectorAll(".navItem");
    for (var i = 0; i < items.length; i++) {
      $("#" + items[i].id + "-content").hide();
    }
    $("#" + panel + "-content").show();
  })

});


// $("#about-content").hide()
// $("#projects-content").hide()
// $("#resume-content").hide()
// $("#blog-content").hide()
// $("#contact-content").hide()
//
// $("#about").click(function(){
//   $("#about-content").show()
//   $("#projects-content").hide()
//   $("#resume-content").hide()
//   $("#blog-content").hide()
//   $("#contact-content").hide()
// })
//
// $("#projects").click(function(){
//   $("#about-content").hide()
//   $("#projects-content").show()
//   $("#resume-content").hide()
//   $("#blog-content").hide()
//   $("#contact-content").hide()
