// NAVIGATION
function openNav() {
    document.getElementById('menu').style.display = "block";
}  

function closeNav() {
    document.getElementById('menu').style.display = "none";;
}


// GALLERY
function galleryShow(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

// FORM
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["email"].value;
    var n = document.forms["myForm"]["number"].value;
    var z = document.forms["myForm"]["sms"].value;
    if (x == "") {
      alert("Name is required");
      return false;
    }

    if (y == "") {
      alert("Email is required");
      return false;
    }

    if (n == "") {
      alert("Phone number is required");
      return false;
    }

    if (z == "") {
      alert("Message is required");
      return false;
    }
}

// TEAM-MEMBER
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}