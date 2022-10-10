// Connecting lightGallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
    gallery_init();
}
function gallery_init() {
    for (let index = 0; index < gallery.length; index++) {
        const el = gallery[index];
        lightGallery(el, {
            counter: false,
            selector: 'a',
            download: false
        });
    }
}


// Hiding the menu when scrolling down
window.addEventListener('scroll', function() {
    const
      oldScroll = this.oldScroll || 0,
      newScroll = this.scrollY,
      isScrollDown = newScroll > oldScroll;
  
    document.querySelector('.header').classList.toggle('scroll-down', isScrollDown);
  
    this.oldScroll = newScroll;
  });

// Counters
function scroll(val,el,timeout,step) {
    var i = 0;
    (function() {
    if(i <= val) {
    setTimeout(arguments.callee, timeout);
    document.getElementById(el).innerHTML = i;
    i = i + step;
    } else {
    document.getElementById(el).innerHTML = val;
    }
    })();
  }


  
  

