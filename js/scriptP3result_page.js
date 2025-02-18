//To prevent getting elements before loading which cause null element error after page loaded, we set the values.
document.addEventListener('DOMContentLoaded', function() {
  
  // Get the URL parameters (you'll need to pass the form data as URL parameters)
  const urlParams = new URLSearchParams(window.location.search);
  // Get the result elements
  const fullnameResult = document.getElementById('fullname-result');
  const emailResult = document.getElementById('email-result');
  const companyResult = document.getElementById('company-result');
  const commentResult = document.getElementById('comment-result');

  //Set the result values from the URL parameters
  fullnameResult.textContent = urlParams.get('fullname_field');
  emailResult.textContent = urlParams.get('email_field');
  companyResult.textContent = urlParams.get('company_field');
  commentResult.textContent = urlParams.get('comment_field');
});