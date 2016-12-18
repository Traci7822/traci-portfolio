$(document).ready(function() {
  hideAllSections();
  $("#about-content").show();


  $(".navItem").click(function(event) {
    event.preventDefault();
    showPanel(this);
    if (this.attr('id') === "resume") {
      alert("boogers");
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
//
//   $(".resumeItem").click(function(event) {
//     event.preventDefault();
//     showResumeSection(this);
//   });
//
  $(".contactButton").click(function(event) {
    event.preventDefault();
    showPanel(this);
  });
//
//   $(".projectItem").click(function(event) {
//     event.preventDefault();
//     showProjectSections(this);
//   });
//
});

function hideAllSections() {
  $("#projects-content").hide();
  $("#resume-content").hide();
  $("#blog-content").hide();
  $("#contact-content").hide();
  $("#about-content").hide();
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
//

//
// function hideSections() {
//   var items = document.getElementsByClassName(".section");
//   for (var i = 0; i < items.length; i++) {
//     debugger;
//
//     $("#" + items[i].id + "-content").hide();
//   }
// }
//

//
// function hideResumeLinks() {
//   var items = document.querySelectorAll(".resumeItem");
//   for (var i = 0; i < items.length; i++) {
//     $("#" + items[i].id + "-content").hide();
//   }
// }
//

//
// function showResumeSection(section) {
//   hideResumeSections();
//   $("#" + section.id + "-content").show();
// }
//
// function hideProjectSections() {
//   var items = document.querySelectorAll(".project");
//   for (var i = 0; i < items.length; i++) {
//     $("#" + items[i].id + "-content").hide();
//   }
// }
//
// function showProjectSections(section) {
//   showPanel(section);
// }
