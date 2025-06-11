// Fade Animation
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting){
			entry.target.classList.add('center');
		} else{
			entry.target.classList.remove('center')
		}
	});
})

const hiddenElements = document.querySelectorAll('.hidden', '.hidden-slide')
hiddenElements.forEach((el) => observer.observe(el));

//Fade for Grid
const leftMovementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('center');
      entry.target.classList.remove('hidden-left');
    }
  })
})

const rightMovementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('center')
      entry.target.classList.remove('hidden-right');
    }
  })
})

//Fade for Products
const upMovementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('center')
      entry.target.classList.remove('hidden-down');
    }
  })
})

const introAnimationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('center');
      entry.target.classList.remove('intro-animation')
    }
  })
})

//This is a start to making the observers better
const elementsForIntersectionObserver = ['.hidden-left', '.hidden-right', '.hidden-down', 'hidden-fade']

const leftToRight = document.querySelectorAll(".hidden-left");
const rightToLeft = document.querySelectorAll(".hidden-right");
const bottomToTop = document.querySelectorAll(".hidden-down")
const introAnimation = document.querySelectorAll(".intro-animation");
leftToRight.forEach((el) => leftMovementObserver.observe(el));
rightToLeft.forEach((el) => rightMovementObserver.observe(el));
bottomToTop.forEach((el) => upMovementObserver.observe(el));
introAnimation.forEach((el) => introAnimationObserver.observe(el));
//leftToRight.forEach((el) => observer.observe(el))

// Drop down menu options
function dropdownFunction() {
  document.getElementsByClassName("dropdown-content")[0].classList.toggle("show-dropdown");
  return false;
}

window.addEventListener("DOMContentLoaded", function() {
  console.log("email: " + document.getElementById('email').value.trim() + ', ' + document.getElementById('email').value.trim().length)
  if(document.getElementById('email').value.trim().length > 0){
    console.log('Pass')
    const enterScreen = document.getElementById("enter-form");
    const successScreen = document.getElementById("mail-success");

    const enterScreenRect = enterScreen.getBoundingClientRect();

    let diff = 0

    const width = window.innerWidth;
    if (width >= 1441){
      diff = 73;
    }

    enterScreen.style.display = 'none';
    successScreen.style.display = 'flex';
    successScreen.style.width = `${enterScreenRect.width - diff}px`;
    successScreen.style.height = `${enterScreenRect.height}px`;
  }

});

var longParallaxDifference = 150;
var shortParallaxDifference = 60;

//Parallax Effect
window.addEventListener('scroll', function(){
  //Get parallax container (that needs to be in view)
  const container = document.querySelector('.parallax-container');
  //Get parallax elements (moving object)
  const longParallaxElements = document.querySelectorAll(".parallax-bubble-long");
  const shortParallaxElements = document.querySelectorAll(".parallax-bubble-short");

  //Get container position relative to viewport
  const containerRect = container.getBoundingClientRect();

  //Check if container is within the viewport (bool)
  const containerInView = containerRect.top < window.innerHeight && containerRect.bottom > 0;

  if(containerInView){
    //Calc percentage of container's position within the view
    const scrollProgress = Math.min(1, Math.max(0, (window.innerHeight - containerRect.top) / window.innerHeight));
    console.log(scrollProgress * 100)

    //Apply offset
    longParallaxElements.forEach(obj => {
      obj.style.transform = `translateY(${ParallaxProgress(scrollProgress, longParallaxDifference)}px)`;
    })
    shortParallaxElements.forEach(obj =>{
      obj.style.transform = `translateY(${ParallaxProgress(scrollProgress, shortParallaxDifference)}px)`;
    })
  } else{
    longParallaxElements.forEach(obj =>{
      obj.style.transform = `translateY(${0}px)`;
    })
  }

});

function ParallaxProgress(percentage, offset){
  return (percentage*100/70 - 1) * offset;
}

// Get all stack items
const stackItems = document.querySelectorAll('.bubble-item');

// Function to calculate and move elements based on hover
stackItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Get the position of the hovered item
    const hoveredRect = item.getBoundingClientRect();
    const hoveredCenterX = hoveredRect.left + hoveredRect.width / 2;
    const hoveredCenterY = hoveredRect.top + hoveredRect.height / 2;
    item.style.transform = 'scale(1.2)';

    stackItems.forEach(otherItem => {
      if (otherItem !== item) {
        // Get the position of other items
        const otherRect = otherItem.getBoundingClientRect();
        const otherCenterX = otherRect.left + otherRect.width / 2;
        const otherCenterY = otherRect.top + otherRect.height / 2;

        // Calculate the direction vector
        const deltaX = hoveredCenterX - otherCenterX;
        const deltaY = hoveredCenterY - otherCenterY;

        // Normalize the direction vector
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const moveX = (deltaX / distance) * 20; // Move 20px in opposite direction
        const moveY = (deltaY / distance) * 20;

        // Apply the calculated transformation
        otherItem.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
      }
    });
  });

  // Reset the transformation when mouse leaves
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    stackItems.forEach(otherItem => {
      otherItem.style.transform = 'translate(0, 0)'; // Reset transformation
    });
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 700){
    longParallaxDifference = 0;
    shortParallaxDifference = 0;
  }
  
})
