const mattsNewAge = document.querySelector('.mattage')
const chrisNewAge = document.querySelector('.chrisage');
const domNewAge = document.querySelector('.domage')
const tracksShown = document.getElementById('showtracks');
const tracksShown2 = document.getElementById('showtracks2');
const tracksShown3 = document.getElementById('showtracks3');
const tracksShown4 = document.getElementById('showtracks4');
const tracksShown5 = document.getElementById('showtracks5');
const tracksShown6 = document.getElementById('showtracks6');
const tracksShown7 = document.getElementById('showtracks7');
const tracksShown8 = document.getElementById('showtracks8');
const ohEll = document.getElementById('tracksshown');
const ohEll2 = document.getElementById('tracksshown2');
const ohEll3 = document.getElementById('tracksshown3');
const ohEll4 = document.getElementById('tracksshown4');
const ohEll5 = document.getElementById('tracksshown5');
const ohEll6 = document.getElementById('tracksshown6');
const ohEll7 = document.getElementById('tracksshown7');
const ohEll8 = document.getElementById('tracksshown8');

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

tracksShown.onclick = () => showTracks(); 
tracksShown2.onclick = () => showTracks2(); 
tracksShown3.onclick = () => showTracks3(); 
tracksShown4.onclick = () => showTracks4(); 
tracksShown5.onclick = () => showTracks5(); 
tracksShown6.onclick = () => showTracks6(); 
tracksShown7.onclick = () => showTracks7(); 
tracksShown8.onclick = () => showTracks8(); 

function showTracks() {
  if (ohEll.style.display === "block") {
  ohEll.style.display = "none";
  tracksShown.innerHTML = "Show tracks"
  } else {
    ohEll.style.display = "block";
    tracksShown.innerHTML = "Hide tracks"
  }
}

function showTracks2() {
  if (ohEll2.style.display === "block") {
    ohEll2.style.display = "none";
    tracksShown2.innerHTML = "Show tracks"
  } else {
    ohEll2.style.display = "block";
    tracksShown2.innerHTML = "Hide tracks"
  }
}

function showTracks3() {
  if (ohEll3.style.display === "block") {
    ohEll3.style.display = "none";
    tracksShown3.innerHTML = "Show tracks"
  } else {
    ohEll3.style.display = "block";
    tracksShown3.innerHTML = "Hide tracks"
  }
}

function showTracks4() {
  if (ohEll4.style.display === "block") {
    ohEll4.style.display = "none";
    tracksShown4.innerHTML = "Show tracks"
  } else {
    ohEll4.style.display = "block";
    tracksShown4.innerHTML = "Hide tracks"
  }
}

function showTracks5() {
  if (ohEll5.style.display === "block") {
    ohEll5.style.display = "none";
    tracksShown5.innerHTML = "Show tracks"
  } else {
    ohEll5.style.display = "block";
    tracksShown5.innerHTML = "Hide tracks"
  }
}

function showTracks6() {
  if (ohEll6.style.display === "block") {
    ohEll6.style.display = "none";
    tracksShown6.innerHTML = "Show tracks"
  } else {
    ohEll6.style.display = "block";
    tracksShown6.innerHTML = "Hide tracks"
  }
}

function showTracks7() {
  if (ohEll7.style.display === "block") {
    ohEll7.style.display = "none";
    tracksShown7.innerHTML = "Show tracks"
  } else {
    ohEll7.style.display = "block";
    tracksShown7.innerHTML = "Hide tracks"
  }
}

function showTracks8() {
  if (ohEll8.style.display === "block") {
    ohEll8.style.display = "none";
    tracksShown8.innerHTML = "Show tracks"
  } else {
    ohEll8.style.display = "block";
    tracksShown8.innerHTML = "Hide tracks"
  }
}

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

