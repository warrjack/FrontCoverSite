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

function dropdownFunction() {
  const dropdown = document.querySelector(".dropdown-content");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
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
  }, 500);

  return false; // allow form to submit
}

function errorMessageHandler(message){
  const errorMessage = document.getElementById("error-message");
  document.getElementById('error-message-container').style.display = 'flex';
  errorMessage.innerHTML = message;
}