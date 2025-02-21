$(document).foundation()

//Get the Button
let btn = document.getElementById("top-btn");

//When user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function validateForm() {
  let email = document.getElementById("email").value;
  let fullname = document.getElementById("fullname").value;
  let company = document.getElementById("company").value;
  let comment = document.getElementById("comment").value;

  if(fullname == "") {
    alert("Fulname must be filled out");
    return false;
  }
  if(company == "") {
    alert("Company name must be filled out");
    return false;
  }
  
  if (email == "") {
    alert("Email must be filled out");
    return false;
    } else if (!isValidEmail(email) ){   //  Check for valid email format
    alert("Invalid email format");
    return false;
  }
  
  document.getElementById("email-result").innerText = email;
  document.getElementById("fullname-result").innerText = fullname;
  document.getElementById("company-result").innerText = company;
  document.getElementById("comment-result").innerText = comment;
  
  document.getElementById("form-input-card").style.display = "none";
  document.getElementById("submit-result-card").style.display = "block";
    
  return true;
}

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
  return emailRegex.test(email);
  }

