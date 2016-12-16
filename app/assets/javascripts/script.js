$(document).ready(function() {
  hideSections();
  hideResumeSections();
  hideTrailSections();
  showHome();

  $(".navItem").click(function(event) {
    event.preventDefault();
    showPanel(this);
    hideResumeSections();
    // if (this.id == "resume") {
    //   $("#technicalSkills-content").show();
    // }
  });

  $(".resumeItem").click(function(event) {
    event.preventDefault();
    showResumeSection(this);
  });

  $(".contactButton").click(function(event) {
    event.preventDefault();
    hideSections();
    $("#contact-content").show();
  });

  $(".trailInfo").click(function(event) {
    event.preventDefault();
    showTrailSections(this);
  });

});

function showHome() {
  $("#about-content").show();
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

function hideTrailSections() {
  var items = document.querySelectorAll(".project");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}

function showTrailSections(section) {
  hideSections();
  hideTrailSections();

  $("#" + section.id + "-content").show();
}
