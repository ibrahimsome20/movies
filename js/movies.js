
  $(document).ready(function(){
    $('.carousel').carousel();
  });


  function changeBg(bg, titleClass){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    
    banner.style.background = `url("../assest/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    
    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(titleClass)) {
            content.classList.add('active');
        }
    });
}


  