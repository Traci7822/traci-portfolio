$(document).ready(function() {
  hideAllSections();
  $("#about-content").show();


  $(".navItem").click(function(event) {
    event.preventDefault();
    showPanel(this);
    if (this.id == "resume") {
    //not showing on hosted version
      hideResumeSections();
      $("#technicalSkills-content").show();
    }
  });

  $(".resumeItem").click(function(event) {
    event.preventDefault();
    hideResumeSections();
    $("#" + this.id + "-content").show();
  });

  $(".contactButton").click(function(event) {
    event.preventDefault();
    showPanel(this);
  });

  $(".projectItem").click(function(event) {
    event.preventDefault();
    showProjectSections(this);
  });
});

function hideAllSections() {
  $("#projects-content").hide();
  $("#resume-content").hide();
  $("#blog-content").hide();
  $("#contact-content").hide();
  $("#about-content").hide();
  $("#trailInfo-content").hide();
  $("#altFuel-content").hide();
  $("#yogaFlow-content").hide();
  hideProjectSections();
}


function showPanel(section){
  hideAllSections();
   $("#" + section.id + "-content").show();
}

function hideResumeSections() {
  var items = document.querySelectorAll(".resumeSection");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}

function hideProjectSections() {
  var items = document.querySelectorAll(".projectDisplay");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}

function showProjectSections(section) {
  hideAllSections();
  $("#" + section.id + "-content").show();
}
