
(()=>{

  const BTN_CLOSE = document.querySelector('.js-btn-close');
  const FLAT_SECTION = document.querySelector('.js-show-flats-part');
  const SHOW_FLATS = document.querySelector('.js-show-flats');
  const HIDE_SHOW = document.querySelector('.js-hide-show'); 

  BTN_CLOSE.addEventListener('click', ()=>{
    get_close_flats();
  })

  SHOW_FLATS.addEventListener('click', ()=>{

    get_open_flats();

  })

function get_close_flats(){
  FLAT_SECTION.classList.add('js-show-flats-part');

  setTimeout(()=>{HIDE_SHOW.classList.toggle('js-hide-show')}, 2000);
 

}

function get_open_flats(){
  HIDE_SHOW.classList.toggle('js-hide-show');
  
  setTimeout(()=>{FLAT_SECTION.classList.remove('js-show-flats-part')});
}

})();


