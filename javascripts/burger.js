"use strict"

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/android/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPade|iPod/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.iOS() ||
         isMobile.BlackBerry() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');

   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener('click', function (e) {
            menuArrow.parentElement.classList.toggle('_active')
         });
      }
   }

} else {
   document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
   var menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
}


const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', function (e) {
         const menuLink = e.target;
         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if (iconMenu.classList.contains('_active')) {
               document.body.classList.remove('_lock');
               iconMenu.classList.remove('_active');
               menuBody.classList.remove('_active');
            }

            window.scrollTo({
               top: gotoBlockValue,
               behavior: 'smooth'
            });

            e.preventDefault();
         }
      });
   });
}