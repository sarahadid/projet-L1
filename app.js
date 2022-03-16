window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
 });
 const nav = document.querySelector('.navbar');

 window.addEventListener('scroll',()=> {
     if(window.scrollY > 30){
         nav.classList.add('scroll');
     }
 });


 
 

