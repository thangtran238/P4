var imgs = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var glrImg = document.querySelector('.gallery-inner img')
var glr = document.querySelector('.gallery')

var crI = 0;
imgs.forEach((item,index) => {
  item.addEventListener('click', function(){
    crI = index;
    glrShow()
  })
})

function glrShow() {
  if(crI == 0)  {
    prev.classList.add('hide');
  } else {
    prev.classList.remove('hide');
  }
  if(crI == imgs.length - 1) 
  {
    next.classList.add('hide');
  } else {
    next.classList.remove('hide');
  }
  glrImg.src =imgs[crI].src
  glr.classList.add('show')
}

close.addEventListener('click', function(){
  glr.classList.remove('show')
})

document.addEventListener('keydown', function(e) {
  if(e.keyCode== 27) {
    glr.classList.remove('show');
  }
})

prev.addEventListener('click', function(){
  if(crI > 0) {
    crI--
    glrShow();
  }
})
next.addEventListener('click', function(){
  if(crI < imgs.length -1) {
    crI++
    glrShow();
  }
})