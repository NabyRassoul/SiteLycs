document.addEventListener('DOMContentLoaded', function() {

  var swiper1 = new Swiper(".brands-1", {
      loop: true,
      autoplay: {
        delay: 0,
      },
      speed: 2000,
      slidesPerView: "auto",
    });
    
    var swiper2 = new Swiper(".brands-2", {
      loop: true,
      autoplay: {
        delay: 0,
      },
      speed: 2000,
      slidesPerView: "auto",
    });
    
    var swiper3 = new Swiper(".brands-3", {
      loop: true,
      autoplay: {
        delay: 0,
      },
      speed: 2000,
      slidesPerView: "auto",
    });
    
    var swiper4 = new Swiper(".brands-4", {
      loop: true,
      autoplay: {
        delay: 0,
      },
      speed: 2000,
      slidesPerView: "auto",
    });
    
    let parts = document.querySelectorAll('.part');
    
    parts.forEach(part => {
      let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.attributeName === "class") {
            let currentClassValue = mutation.target.getAttribute("class");
            let lottiePlayers = part.querySelectorAll('lottie-player');
            if (currentClassValue.includes("active")) {
              lottiePlayers.forEach(player => player.play());
            } else {
              lottiePlayers.forEach(player => player.pause());
            }
          }
        });
      });
    
      observer.observe(part, {
        attributes: true
      });
    });
    
});
