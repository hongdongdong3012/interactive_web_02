(function() {
  const houseElem = document.querySelector('.house');

  function scrollHandler() {
    let maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
    const zMove = (this.pageYOffset / maxScrollValue) * 1000 - 500;
    houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
  }

  window.addEventListener('scroll', scrollHandler)

})()