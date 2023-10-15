let letterbox1 = document.getElementById("box1");
let letterbox2 = document.getElementById("box2");
let Combinations = new Map();

for (let i = 1; i <= 24; i++) {
    let index = letterbox1.querySelector('.unletter');
    index.className = 'letter';
    index.innerHTML = String.fromCharCode(i + 64);
    index.id = 'l1' + i;
}


for (let i = 1; i <= 24; i++) {
    let index = letterbox2.querySelector('.unletter');
    index.className = 'letter';
    index.innerHTML = String.fromCharCode(i + 64);
    index.id = 'l2' + i;
}

loadSave()

let chosen1;
let chosen2;

function Choose1(clicked) {
    button = document.getElementById('l1' + clicked);
    try {
        document.getElementById('l1' + chosen1).style.backgroundColor = '';
    }
    catch (e) {
        if (document.getElementById('l1' + chosen1) === null) {
            console.log("first click pog")
        }
    }
    chosen1 = clicked;
    button.style.backgroundColor = 'black';

    update()
}

function Choose2(clicked) {
    button = document.getElementById('l2' + clicked);
    try {
        document.getElementById('l2' + chosen2).style.backgroundColor = '';
    }
    catch (e) {
        if (document.getElementById('l2' + chosen2) === null) {
            console.log("first click pog")
        }
    }
    chosen2 = clicked;
    button.style.backgroundColor = 'black';
    update()
}

let wordAmount = 0;
function saveWord() {
    if (!chosen1 || !chosen2) {
        return;
    }
    wordAmount += 1;
    let newWord = document.getElementById('wordTaker').value;
    document.getElementById('Words').innerHTML += `<p onclick=deleteSelf(${wordAmount - 1})>${newWord}</p>`

    if (!Combinations.get(currentChosen)) {
        Combinations.set(currentChosen, newWord + '-');
        Save()
        return;
    }
    let temp = Combinations.get(currentChosen);
    temp += newWord + '-';
    Combinations.set(currentChosen, temp);
    Save()

}

let currentChosen;
function update() {
    if (!chosen1 || !chosen2) {
        return;
    }
    wordAmount = 0;
    document.getElementById("Words").innerHTML = "";
    currentChosen = 'F' + chosen1 + 'S' + chosen2;
    console.log(currentChosen);
    if (!Combinations.get(currentChosen)) {
        return
    }
    let temp = Combinations.get(currentChosen);
    temp = temp.split('-')
    for (let i = 0; i < temp.length - 1; i++) {
        document.getElementById('Words').innerHTML += `<p onclick=deleteSelf(${i})>${temp[i]}</p>`
    }
    wordAmount = temp.length - 1;

}

function deleteSelf(wordNum) {
    let wordList = Combinations.get(currentChosen).split("-");
    wordList.length -= 1;
    wordList.splice(wordNum, 1);
    let combinedList = wordList.join("-");
    if (wordList == "") {
        Combinations.set(currentChosen, wordList);
        update()
        return;
    }
    combinedList += "-";
    Combinations.set(currentChosen, combinedList);
    update()
    Save()
}

function Save() {
    let save = ",";
    let currentIt
    for (let i = 0; i < 25; i++) {

        for (let j = 0; j < 25; j++) {
            if (i == 0) {
                save += String.fromCharCode(j + 65) + ",";
            }
            else if (j == 0) {
                save += String.fromCharCode(i + 64) + ",";
            }
            else {
                currentIt = 'F' + i + 'S' + j;
                if (Combinations.get(currentIt)) {
                    save += Combinations.get(currentIt);
                }
                save += ",";
            }
        }
        save += "\n";
    }
    console.log(save);
    localStorage.setItem("spreadsheet",save);
}

function loadSave() {
    let Save = localStorage.getItem("spreadsheet");
    if (!Save) {
        return;
    }
    let sections = Save.split(",");
    for (let i = 0, s = 0; i < 25; i++) {

        for (let j = 0; j < 25; j++) {
            if (i == 0) {
                s += 1;
            }
            else if (j == 0) {
                s += 1;
            }
            else {
                currentIt = 'F' + i + 'S' + j;
                Combinations.set(currentIt, sections[s + 1])
                s += 1;
            }
        }
    }
}

function csvExport() {

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(localStorage.getItem("spreadsheet")));
    element.setAttribute('download', "blindsheet.csv");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
