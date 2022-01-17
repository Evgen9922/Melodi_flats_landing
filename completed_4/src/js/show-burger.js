(()=>{
  const BURGER = document.querySelector('.burger-menu');
  const MENU_LIST = document.querySelector('.header__menu768-list');
  const MENU_LIST_ITEM = document.querySelectorAll('.header__menu-item');


  BURGER.addEventListener('click', ()=>{
    MENU_LIST.style.display = "block";

    setTimeout(()=>{
      MENU_LIST.classList.toggle('js-header-menu');
    })
    
  });

  
  MENU_LIST_ITEM.forEach((elem) => {
    elem.addEventListener('click', ()=>{

      MENU_LIST.classList.toggle('js-header-menu');

      setTimeout(()=>{
        MENU_LIST.style.display = "none";
      }, 1000);

    })
    
  })






})();