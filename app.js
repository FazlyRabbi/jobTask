$(document).ready(function () {
  let sections = $(".img__wrapper ");

  for (let section of sections) {
    section.addEventListener("click", function (e) {
      window.open("./details.html");
    });
  }

  $(window).on("scroll", function () {
    // const top = $(this).scrollTop();
    // // $("body").css({
    // //   transition: "all 10s",
    // // });

    for (let section of sections) {
      let top = section.getBoundingClientRect().top;
      let height = section.offsetHeight;

      if (top <= window.innerHeight && top + height >= 0) {
        section.children[1].classList.add("parallax_animate");

        console.log(top);
      } else {
        section.children[1].classList.remove("parallax_animate");
      }
    }

    // // console.log( "b:" + sec_1);

    // $(".text__box").css({
    //   transition: "translateY 5s ease-in",
    //   transform: "translateY(" + "-" + top * 0.15 + "px" + ")",
    //   // transform: "translateY(" + "-" + 200 + "px" + ")",
    // });
  });
});
