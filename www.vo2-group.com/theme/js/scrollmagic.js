document.addEventListener('DOMContentLoaded', function() {
    var controller = new ScrollMagic.Controller();

    var aboutUsTween = TweenMax.to('.about-us .about-wrapper', 1, { x: "-100%", ease: "none" });
    
    new ScrollMagic.Scene({
        triggerElement: '.about-us',
        triggerHook: 'onLeave',
        duration: '200%'
    })
    .setPin('.about-us', { pushFollowers: false })
    .addTo(controller)
    .on("enter", function() {
        $(".about-us").css("inset", "initial");
        window.requestAnimationFrame(() => controller.update());
    });
    
    new ScrollMagic.Scene({
        triggerElement: '.about-us',
        triggerHook: 'onLeave',
        duration: '500%'
    })
    .setPin('.about-us')
    .setTween(aboutUsTween)
    .addTo(controller)
    // .on('end', function (event) {
    //     if (event.scrollDirection === 'FORWARD') {
    //         controller.removePin('.about-us');
    //     }
    // })
    .on("enter", function() {
        $(".about-us").css("inset", "initial");
        window.requestAnimationFrame(() => controller.update());
    });
    
    window.addEventListener('scroll', function () {
        window.requestAnimationFrame(() => controller.update());
    }, { passive: true }); // Updated this line to make event listener passive.
    
    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: ".metric-1",
        triggerHook: "onEnter",
        duration: "75%",
    })
    .addTo(controller)
    .on("progress", function (e) {
        var marginTop = 180 - e.progress * 180;
        gsap.to(".metric-1", { marginTop: marginTop });
    });

    var scene2 = new ScrollMagic.Scene({
        triggerElement: ".metric-2",
        triggerHook: "onEnter",
        duration: "75%",
    })
    .addTo(controller)
    .on("progress", function (e) {
        var marginTop = 120 - e.progress * 120;
        gsap.to(".metric-2", { marginTop: marginTop });
    });

    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".metric-3",
        triggerHook: "onEnter",
        duration: "75%",
    })
    .addTo(controller)
    .on("progress", function (e) {
        var marginTop = 60 - e.progress * 60;
        gsap.to(".metric-3", { marginTop: marginTop });
    });

});
