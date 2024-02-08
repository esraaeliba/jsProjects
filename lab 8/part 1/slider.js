let slideIndex = 1;
  function changeSlide(n) {
    let i=0;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i ; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    
  }
  changeSlide(slideIndex);
  

  function plusSlides(n) {
    changeSlide(slideIndex += n);
   
  }
  function slide(n) {
      changeSlide(slideIndex = n);
    }