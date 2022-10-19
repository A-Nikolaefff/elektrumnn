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


//Menu
let unlock = true;
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
    let delay = 500;
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function () {
        if (unlock) {
            body_lock(delay);
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    });
}

function menu_close() {
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}

function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}

function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("_lock");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}

function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}


  
  

