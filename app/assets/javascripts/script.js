$(document).ready(function() {
  hideSections();
  hideResumeSections();
  showHome();

  $(".navItem").click(function(event) {
    event.preventDefault();
    showPanel(this);
    hideResumeSections();
  })

  $(".resumeItem").click(function(event) {
    event.preventDefault();
    showResumeSection(this);
  })

  $(".contactButton").click(function(event) {
    event.preventDefault();
    hideSections();
    $("#contact-content").show();
  })

});

function showHome() {
  $("#about-content").show()
}

function hideSections() {
  var items = document.querySelectorAll(".navItem");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}

function showPanel(section){
  var panel = $(section).attr('id');
  hideSections();
  $("#" + panel + "-content").show();
}

function hideResumeSections() {
  var items = document.querySelectorAll(".resumeItem");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}
function showResumeSection(section) {
  hideResumeSections();
  $("#" + section.id + "-content").show();
}
