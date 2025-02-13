console.log("script loaded");
function init () {
  var btn = document.getElementById('entrybutton');

  myFn = function () {
    var msg = document.getElementById('entryinput').value;
    
    alert("Dilek: " + msg);
    
    document.getElementById('textoutput').innerHTML = msg;
   };
   btn.addEventListener('click', myFn);
   
};

window.addEventListener('load', init);