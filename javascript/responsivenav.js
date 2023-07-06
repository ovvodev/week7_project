document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const blurMain = document.querySelector("main");
    const blurFooter = document.querySelector("footer");
  
    toggleButton.addEventListener('click', function() {
      menu.classList.toggle('active');
      blurMain.classList.toggle("blur");
      blurFooter.classList.toggle("blur");

      if (!menu.classList.contains('active')) {
        blurMain.classList.remove("blur");
        blurFooter.classList.remove("blur");
        menu.classList.remove('active');
      }
    });
  });
  
  
  
  
  
  
  window.addEventListener("resize" , () =>{
    const blurMain = document.querySelector("main");
    const blurFooter = document.querySelector("footer");
    const menu = document.querySelector('.menu');
    if (window.innerWidth >= 661) {
        blurMain.classList.remove("blur");
        blurFooter.classList.remove("blur");
        menu.classList.remove('active');
      }
  })