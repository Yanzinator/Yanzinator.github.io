let letterbox1 = document.getElementById("box1");
let letterbox2 = document.getElementById("box2");

for (let i = 1; i <= 24; i++) {
    let index = letterbox1.querySelector('.unletter');
    index.className = 'letter';
    index.innerHTML = String.fromCharCode(i + 64);
    index.id = 'l1'+i;
}


for (let i = 1; i <= 24; i++) {
    let index = letterbox2.querySelector('.unletter');
    index.className = 'letter';
    index.innerHTML = String.fromCharCode(i + 64);
    index.id = 'l2'+i;
}

let chosen1;
let chosen2;

function Choose1(clicked) {
    button = document.getElementById('l1'+clicked);
    try {
        document.getElementById('l1'+chosen1).style.backgroundColor = '';
    }
    catch (e) {
        if  (document.getElementById('l1'+chosen1) === null) {
            console.log("first click pog")
        }
    }
    chosen1 = clicked;
    button.style.backgroundColor = 'black';

    update()
}

function Choose2(clicked) {
    button = document.getElementById('l2'+clicked);
    try {
        document.getElementById('l2'+chosen2).style.backgroundColor = '';
    }
    catch (e) {
        if  (document.getElementById('l2'+chosen2) === null) {
            console.log("first click pog")
        }
    }
    chosen2 = clicked;
    button.style.backgroundColor = 'black';
    update()
}

let wordAmount = 0;
function saveWord() {
    wordAmount += 1;
    if(!chosen1 || !chosen2) {
        return;
    }
    let newWord = document.getElementById('wordTaker').value;
    document.getElementById('Words').innerHTML +=  `<p onclick=deleteSelf(${wordAmount - 1})>${newWord}</p>`

    if (localStorage.getItem(currentChosen) === null){
        localStorage.setItem(currentChosen, newWord + ',');
        return;
    }
    let temp = localStorage.getItem(currentChosen);
    temp += newWord + ',';
    localStorage.setItem(currentChosen, temp);

}

let currentChosen;
function update() {
    if(!chosen1 || !chosen2) {
        return;
    }
    wordAmount = 0;
    document.getElementById("Words").innerHTML = "";
    currentChosen = 'F' + chosen1 + 'S' + chosen2;
    console.log(currentChosen);
    if (!localStorage.getItem(currentChosen)) {
        return
    }
    let temp = localStorage.getItem(currentChosen);
    temp = temp.split(',')
    for (let i = 0; i < temp.length - 1; i++) {
        document.getElementById('Words').innerHTML += `<p onclick=deleteSelf(${i})>${temp[i]}</p>`
    }
    wordAmount = temp.length - 1;


}

function deleteSelf(wordNum) {
    let wordList = localStorage.getItem(currentChosen).split(",");
    wordList.length -= 1;
    wordList.splice(wordNum,1);
    wordList.join(",");
    if (wordList == "") {
        localStorage.setItem(currentChosen,wordList);
        update()
        return;
    }
    wordList += ",";
    localStorage.setItem(currentChosen,wordList);
    update()
}