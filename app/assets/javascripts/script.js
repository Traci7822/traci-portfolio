$(document).ready(function() {
  hideSections();

  $(".navItem").click(function(event) {
    event.preventDefault();
    showPanel(this);
  })

});

function showPanel(section){
  $(".navItem").removeClass("active");
  $(section).addClass("active");
  var panel = $(section).attr('id');
  hideSections();
  $("#" + panel + "-content").show();
}

function hideSections() {
  var items = document.querySelectorAll(".navItem");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}
