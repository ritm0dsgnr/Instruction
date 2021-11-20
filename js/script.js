$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});

$(".burger").on("click", function(event) {
    $(".burger").toggleClass("active");
    $(".burger_nav").toggleClass("active");
    $(".nav__link").toggleClass("active");
    $(".social_nav").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".nav__link").on("click", function(event) {
    $(".burger").removeClass("active");
    $(".burger_nav").removeClass("active");
    $(".nav__link").removeClass("active");
    $(".social_nav").removeClass("active");
    $("body").removeClass("lock");
});

$(".btn__link").on("click", function(event) {
    $(".modal").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".nav__link").on("click", function(event) {
    $(".modal").removeClass("active");
});

$(".close").on("click", function(event) {
    $(".modal").removeClass("active");
    $("body").removeClass("lock");
});

$('a').click(function () {});
$("a").removeAttr("href");

function onEntry(entry) {
  entry.forEach(change => {
  if (change.isIntersecting) {
      change.target.classList.add('anim-show');
  }
  else {
      change.target.classList.remove('anim-show');
  }
  });
  }
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anim');

  for (let elm of elements) {
    observer.observe(elm);
  };
