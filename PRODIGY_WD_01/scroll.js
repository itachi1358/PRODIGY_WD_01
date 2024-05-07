document.addEventListener('DOMContentLoaded', () => {
  const nav= document.querySelector('.navbar');
  nav.addEventListener('mouseenter',()=>{
    nav.classList.add('hovered_in_scroll');
  })
  nav.addEventListener('mouseleave',()=>{
    nav.classList.remove('hovered_in_scroll');
  })  
document.addEventListener('scroll', () =>{
    if(window.scrollY > 1){
      nav.style.backgroundColor='rgba(50, 50, 50, 0.911)';
      nav.style.color='rgb(255,255,255)';
    }
    else{
      nav.style.backgroundColor='transparent';
    }
    nav.style.transistion='all 0.4s';
  });
});