const hiddenElements = document.querySelectorAll('.hidden', '.hidden-slide')
hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener("DOMContentLoaded", function() {
  if(document.getElementById('email').value.trim().length > 0){
    const enterScreen = document.getElementById("enter-form");
    const successScreen = document.getElementById("mail-success");

    const enterScreenRect = enterScreen.getBoundingClientRect();

    var screenSize = window.innerWidth;

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


function submitHandler(){
  const enterScreen = document.getElementById("enter-form");
  const successScreen = document.getElementById("mail-success");

  const enterScreenRect = enterScreen.getBoundingClientRect();

  var screenSize = window.innerWidth;

  let diff

  const width = window.innerWidth;
  if (width >= 1441){
    diff = 73;
  }

  enterScreen.style.display = 'none';
  successScreen.style.display = 'flex';
  successScreen.style.width = `${enterScreenRect.width - diff}px`;
  successScreen.style.height = `${enterScreenRect.height}px`;
}

// Fade Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show')
    }
  });
});