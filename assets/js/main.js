let $menuItem = $('.menu__section--top .menu-item__wrapper')

function menuActive() {
  $menuItem.on('click',function(){
    if ($(this).is('.js-active')) {
      return;
    } else {
      $($menuItem).removeClass('js-active');
      $(this).addClass('js-active');
    }
  });
}

$(document).ready(function(){
  menuActive();
});