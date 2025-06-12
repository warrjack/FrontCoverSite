let selectedSubject = "Outreach"; // default

//Change settings when selecting subject options
function selectOption(option){
  selectedSubject = option;
  document.querySelector(".dropdown-button").firstChild.textContent = option;
  document.getElementsByClassName("dropdown-content")[0].classList.remove("show-dropdown");
  var messageBoxPlaceholder = document.getElementsByClassName("message-box")[0];
  if(option == "Outreach"){ messageBoxPlaceholder.placeholder = "Hi there, I'm John. I'm reaching out to discuss a new project...";}
  else if(option == "Basic Plan"){ messageBoxPlaceholder.placeholder = "Hello! I'm Emily. I'd like to learn more about your Basic Plan...";}
  else if(option == "Standard Plan"){ messageBoxPlaceholder.placeholder = "Hi there, my name is Sharon. I would like to reach out about an idea...";}
  else if(option == "Premium Plan"){ messageBoxPlaceholder.placeholder = "Hi, I'm Mark. I have a business that would benefit from a new app...";}
  else if(option == "Other"){ messageBoxPlaceholder.placeholder = "Hi there, I'm Jack. I wanted to reach out about a project of mine...";}
  else { messageBoxPlaceholder.placeholder = "Hi there, I'm Kevin. I have an idea for a website...";}
}

// Drop down menu options
function dropdownFunction() {
  document.getElementsByClassName("dropdown-content")[0].classList.toggle("show-dropdown");
  return false;
}

function submitHandler() {
  const name = document.getElementById("full-name").value.trim();
  const company = document.getElementById("company-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("user-message").value.trim();

  const combinedMessage = 
    `Name: ${name}
    Company: ${company}
    Subject: ${selectedSubject}
    Message:
    ${message}`;

  // Basic email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if input is filled
  if (!name || !email || !message) {
    errorMessageHandler("Please fill out your name, email, and message.");
    return false; // Stop form submission
  }

  // Check if input is valid
  if (!emailPattern.test(email)) {
    errorMessageHandler("Please enter a valid email address.");
    return false; // Stop form submission
  }

  // Check if message is long enough
  if (message.trim().split(/\s+/).length < 3) {
    errorMessageHandler("Please write at least 3 words in your message.");
    return false;
  }

  // Put it into the hidden input
  document.getElementById("full-message").value = combinedMessage;

  // Show success screen after form submission
  setTimeout(() => {
    console.log("Success!");
  }, 500);

  document.getElementById("full-name").value = "";
  document.getElementById("company-name").value = "";
  document.getElementById("user-message").value = "";
  return true; // allow form to submit
}

function errorMessageHandler(message){
  const errorMessage = document.getElementById("error-message");
  document.getElementById('error-message-container').style.display = 'flex';
  errorMessage.innerHTML = message;
}

window.onclick = function(event) {
  if(!event.target.matches('.dropdown-button')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++){
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-dropdown')) {
        openDropdown.classList.remove('show-dropdown');
      }
    }
  }
}
