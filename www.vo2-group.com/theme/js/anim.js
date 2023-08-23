document.addEventListener("DOMContentLoaded", function() {
  var animElements = Array.prototype.slice.call(document.querySelectorAll('.anim'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('section'));
  var header = document.querySelector('header');

  function checkPosition() {
    var currentPosition = window.pageYOffset;

    for (var i = 0; i < animElements.length; i++) {
      var animElement = animElements[i];
      var positionFromTop = animElement.getBoundingClientRect().top;
      var viewportHeight = window.innerHeight;

      if (positionFromTop - viewportHeight <= -200) {
        animElement.classList.add('live');
      } else {
        animElement.classList.remove('live');
      }
    }

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var top = section.offsetTop - 200;
    
      if (currentPosition >= top && currentPosition < top + section.offsetHeight) {
        if (lastId) {
          header.classList.remove(lastId);
          page.classList.remove(lastId);
        }
    
        var id = section.getAttribute('id');
        header.classList.add(id);
        page.classList.add(id);
        lastId = id;
      }
    }
  }

  var lastId;
  window.addEventListener('scroll', checkPosition);
  checkPosition();
});
