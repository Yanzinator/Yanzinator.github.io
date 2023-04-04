let pog;
let pognum;
let text;
let ogText;
let textSpot;
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function textHypi() {
  if (pog) {
    return; // interval already set
  }
  pog = setInterval(textHypi2, 30);
  pognum = 0;
  text = document.getElementById("Title").innerHTML;
  ogText = document.getElementById("Title").innerHTML;
  textSpot = 0;
  console.log("activated");
}

function textHypi2() {
  console.log("running");
  let textArray = text.split("");
  for (let i = textSpot; i < text.length; i++) {
    textArray[i] = alphabet[Math.floor(Math.random() * 52)];
  }
  text = textArray.join("");
  pognum++;
  if (pognum >= 5) {
    textArray[textSpot] = ogText.charAt(textSpot);
    text = textArray.join("");
    textSpot++;
    pognum = 0;
  }
  if (textSpot >= text.length) {
    clearInterval(pog);
    pog = null;
  }
  document.getElementById("Title").innerHTML = text;
}

window.onmousemove = e => {
    const x = e.clientX - document.getElementById("cursorEffect").offsetWidth/2,
          y = e.clientY - document.getElementById("cursorEffect").offsetHeight/2;
    document.getElementById("cursorEffect").style.transform = `translate(${x}px, ${y}px)`;
}

window.onload = e => {
  setTimeout(function() {
    document.getElementById("openLogo").style.transition = "500ms cubic-bezier(.45,.21,.49,.8) transform";
    document.getElementById("openLogo").style.transform = "translate(50vw,40vh)"
  },
  1000
  )
  setTimeout(function() {
    document.getElementById("open").style.transform = "translateY(-101vh)";
  }, 
  1500
  )
}

let navBarClicked = false;
let midNavAnim = false;


function navBarClick() {
  if (midNavAnim) {return;}
  midNavAnim = true;
  setTimeout(() => {
    midNavAnim = false;
  }, 1000);
  if (!navBarClicked){
    navBarClicked = true;
    document.getElementById("Nav1").style.visibility = "visible";
    document.getElementById("Nav1").style.width = "10vw";
    document.getElementById("Nav1").style.transform = "translate(-25%,-10vh)";
    document.getElementById("Nav2").style.visibility = "visible";
    document.getElementById("Nav2").style.width = "10vw";
    document.getElementById("Nav2").style.transform = "translate(-25%,-20vh)";
    document.getElementById("Nav3").style.visibility = "visible";
    document.getElementById("Nav3").style.width = "10vw";
    document.getElementById("Nav3").style.transform = "translate(-25%,-30vh)";
    return;
  }
  
  if (navBarClicked) {
    navBarClicked = false;
    document.getElementById("Nav1").style.transform = "translateY(0%)";
    document.getElementById("Nav2").style.transform = "translateY(0%)";
    document.getElementById("Nav3").style.transform = "translateY(0%)";
    document.getElementById("Nav1").style.width = "5vw";
    document.getElementById("Nav2").style.width = "5vw";
    document.getElementById("Nav3").style.width = "5vw";
    document.getElementById("Nav1").style.visibility = "hidden";
    document.getElementById("Nav2").style.visibility = "hidden";
    document.getElementById("Nav3").style.visibility = "hidden";      
    return;
  }
}