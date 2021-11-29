const thisYear = new Date().getFullYear();
const mattsNewAge = document.querySelector('.mattage')
const chrisNewAge = document.querySelector('.chrisage');
const domNewAge = document.querySelector('.domage')

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function museAges() {
    let mattAge = calculate_age(new Date(1978, 06, 09));
    let chrisAge = calculate_age(new Date(1978, 12, 02));
    let domAge = calculate_age(new Date(1977, 12, 07));
    mattsNewAge.textContent = mattAge;
    chrisNewAge.textContent = chrisAge;
    domNewAge.textContent = domAge;
}

museAges();

console.log(calculate_age(new Date(1978, 11, 4)));

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {scrollFunction()};