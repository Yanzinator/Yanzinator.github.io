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

document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    document.getElementById("cursorEffect").animate ({
      left:  `${clientX}px`,
      top: `${clientY}px`
    }, {duration: 2000, fill: "forwards"});
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
    document.getElementById("Nav1").style.width = "200%";
    document.getElementById("Nav1").style.transform = "translate(-25%,-200%)";
    document.getElementById("Nav2").style.visibility = "visible";
    document.getElementById("Nav2").style.width = "200%";
    document.getElementById("Nav2").style.transform = "translate(-25%,-400%)";
    document.getElementById("Nav3").style.visibility = "visible";
    document.getElementById("Nav3").style.width = "200%";
    document.getElementById("Nav3").style.transform = "translate(-25%,-600%)";
    return;
  }
  
  if (navBarClicked) {
    navBarClicked = false;
    document.getElementById("Nav1").style.transform = "translateY(0%)";
    document.getElementById("Nav2").style.transform = "translateY(0%)";
    document.getElementById("Nav3").style.transform = "translateY(0%)";
    document.getElementById("Nav1").style.width = "100%";
    document.getElementById("Nav2").style.width = "100%";
    document.getElementById("Nav3").style.width = "100%";
    setTimeout(function () {
      document.getElementById("Nav1").style.visibility = "hidden";
      document.getElementById("Nav2").style.visibility = "hidden";
      document.getElementById("Nav3").style.visibility = "hidden";      

    }, 1000)
    return;
  }
}