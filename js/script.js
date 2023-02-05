$(".nav-link").on("click", (e) => {
  $(".nav-link").removeClass("active");
  $(e.target).addClass("active");
});

// nav hide and show
$(window).scroll(() => {
  // console.log($(window).scrollTop(), $("#intro").offset().top);
  if (
    $(window).scrollTop() >
    $("#intro").offset().top - $(".navbar").outerHeight()
  ) {
    $(".navbar").addClass("navbar-white bg-dark ");
    $(".navbar").removeClass("bg-transparent ");
  } else {
    $(".navbar").removeClass("navbar-white bg-dark ");
  }
});
// back to top btn
$(window).scroll(() => {
  if ($(window).scrollTop() > $("#intro").offset().top) {
    $(".back-to-top").fadeIn(500).css("display", "flex");
  } else {
    $(".back-to-top").fadeOut(500);
  }
});
$(".back-to-top").on("click", (e) => {
  $("html , body").animate({ scrollTop: "0" }, 100);
});
$(".nav-link").on("click", function (e) {
  let clickedLink = $(this).attr("href");
  let sectionFromTop = $(clickedLink).offset().top - $(".navbar").outerHeight();
  $("body , html").animate({ scrollTop: sectionFromTop }, 100);
});
// window.addEventListener("load", () => {
//   $(".loadingscreen").fadeOut(1000);
//   $(document.body).css("overflowY", "visible");
// });
$(function () {
  $(".loadingscreen").fadeOut(1000);
  $("body").css("overflowY", "visible");
});
