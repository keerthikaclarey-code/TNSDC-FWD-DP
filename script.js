document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  document.getElementById("formMessage").innerText = "✅ Thanks! Your message has been sent.";

  this.reset();

});