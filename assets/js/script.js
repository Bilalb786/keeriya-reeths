
// Page loading animation
$(window).on('load', function() {
$('#js-preloader').addClass('loaded');
});    


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
// Scroll Up_Down
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

sr.reveal('.home-main',{delay: 200})
sr.reveal('.home-main-1',{delay: 1000})
sr.reveal('.home-main-2',{delay: 1900})



ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".title", {
  duration: 3000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal(".fade-in", {
  duration: 5000,
  move: 0
});

ScrollReveal().reveal(".scaleUp", {
  duration: 4000,
  scale: 0.85
});

ScrollReveal().reveal(".flip", {
  delay: 500,
  interval: 200,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal(".slide-right", {
  duration: 2000,
  interval: 200,
  delay: 500,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-left", {
    duration: 2000,
    delay: 500,
    origin: "right",
    distance: "300px",
    easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-up", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});

ScrollReveal().reveal(".slide-upp", {
  interval: 200,
  duration: 2000,
  origin: "bottom",
  distance: "200px",
  easing: "cubic-bezier(.37,.01,.74,1)",
});



// Top Scroll Button
// Get the Button
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Testimonals
// Carousel
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
  },
});


// cursor Point

// var cursor = document.querySelector(".cursor");
// var cursor2 = document.querySelector(".cursor2");
// document.addEventListener("mousemove",function(e){
//  cursor.style.cssText = cursor2.style.cssText = "left: "+ e.clientX + "px; top: " + e.clientY + "px;"; 
// });

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

