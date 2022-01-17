
  (()=>{

  const BTN_UP = document.querySelector('.js-vector-up');
  const BTN_DOWN = document.querySelector('.js-vector-down');
  const FLOOR_POINT = document.querySelector('.js-floor-point');
  const FLOOR_GROUND = document.querySelector('.js-main-ground');
  const MESSAGE = document.querySelector('.message');
  let floor = 7;


  BTN_UP.addEventListener('click', ()=>{
    MESSAGE.classList.remove('js-message');
    floor+=1;
  
    show_floor(-1, floor); 
  })
  
  
  BTN_DOWN.addEventListener('click', ()=>{
    floor-=1; 
    
    show_floor(1, floor);
  })



function show_floor(k, floor_num) {
  if (floor_num > 18) {floor = 18; return};
  if (floor_num < 1) {floor = 1; return}
  if (floor_num === 1) {
    getMessage();
  }

  floor > 9 ? FLOOR_GROUND.innerText = floor : FLOOR_GROUND.innerText = '0' + floor;

  let new_top_position = get_top_pos() + k*25;
  FLOOR_POINT.style.top = new_top_position + 'px'; 
}


function get_top_pos (){
  return parseInt(getComputedStyle(FLOOR_POINT, null).getPropertyValue('top'));
}

function getMessage (){
  MESSAGE.classList.add('js-message');
  setTimeout(()=>{
    MESSAGE.classList.remove('js-message');
  }, 2000);
}

})();





