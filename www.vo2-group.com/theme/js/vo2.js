document.addEventListener('DOMContentLoaded', function() {
    var controller = new ScrollMagic.Controller();


    //navigation
    $('.burger').click(function() {
        $('body').toggleClass('nav-active');
    });

    $('.nav-container.mobile a, .nav-container.mobile .corpo span, .nav-container.desktop a').click(function() {
        $('body').removeClass('nav-active');
    });

    //navigation color changes
    var currentIndex = 1;
    var intervals = [1100, 4800, 1000, 3600];

    function toggleClass() {
        $('body.front').removeClass('part-1 part-2 part-3 part-4');
        $('body.front').addClass('part-' + currentIndex);

        currentIndex++;

        if (currentIndex <= 4) {
            setTimeout(toggleClass, intervals[currentIndex-2]);
        }
    }

    setTimeout(toggleClass, intervals[0]);

    //big switch
    $('#toggleSwitch').change(function () {
        if (this.checked) {
            $('body').addClass('bright');
            console.log('Toggle is ON');
        } else {
            $('body').removeClass('bright');
            console.log('Toggle is OFF');
        }
    });

    window.addEventListener('scroll', function () {
        var scroll = window.scrollY;
        var documentHeight = document.documentElement.scrollHeight - window.innerHeight;

        //scrolled
        if (scroll >= 1) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }

        //video and green part
        $('.fixed').each(function () {
            var topOfElement = $(this).offset().top;
            var bottomOfElement = topOfElement + $(this).outerHeight();
            if (scroll > topOfElement && scroll < bottomOfElement) {
                $('.fixed').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });

        //title-wrapper
        var scroll = window.scrollY;
        var sectionTop = document.getElementById('fifth').offsetTop;
        var scrollThreshold = sectionTop - 1500;

        if (scroll >= scrollThreshold) {
            var localScroll = scroll - scrollThreshold;

            $(".title-wrapper").css('margin-top', 0 - (1 * localScroll) + 'px');
        }
    }, { passive: true });
});
