function validateForm() {
  let email = document.getElementById("email").value;
  let fullname = document.getElementById("fullname").value;
  let company = document.getElementById("company").value;
  let comment = document.getElementById("comment").value;

  if (email == "") {
    alert("Email must be filled out");
    return false;
    } else if (!isValidEmail(email) ){   //  Check for valid email format
    alert("Invalid email format");
    return false;
  }
  if(fullname == "") {
    alert("Fulname must be filled out");
    return false;
  }
  if(company == "") {
    alert("Company name must be filled out");
    return false;
  }
    
  return true;
}

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
  return emailRegex.test(email);
  }