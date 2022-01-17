(()=>{

let flatList = document.querySelectorAll('.show-flats__list-item');
const FLAT_IMG = document.querySelectorAll('.flat-scatch');

flatList = Array.from(flatList);

flatList.forEach((item) => {
  item.addEventListener('click',(ev)=>{
    getTargetElem(ev.target);
  })
});

function getTargetElem(targetElem){

FLAT_IMG.forEach((imgElem)=>{
  imgElem.classList.add('flat-hide');

  if(targetElem.dataset.order === imgElem.dataset.order ){
    imgElem.classList.remove('flat-hide');
  }
})

}

})();