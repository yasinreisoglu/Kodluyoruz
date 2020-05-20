//Elementler
var div = document.getElementById("rightWorkspace");
var btnRun = document.getElementById("sendApi");
var courseDiv = document.getElementById("leftWorkspace");
var btnNext = document.getElementById("nextButton");
var btnBack = document.getElementById("backButton");
var header = document.getElementById("header");
var btnHint = document.getElementById("hintbutton");
var logo = document.getElementById("logo");
var bilgialanı = document.getElementById("bilgialanı");
//API'ler için Url'ler 
var compilerAPI = 'https://api.jdoodle.com/v1/execute';
var proxy = 'https://cors-anywhere.herokuapp.com/';
const contentApi = "http://demo3878722.mockable.io/"


//API nesneleri
const xhrContent = new XMLHttpRequest();
const xhr = new XMLHttpRequest();


//Variables
let currentLevel = 0;
let hintCounter = 0;
var responseJson;
var contentJson;
var value;
var levelStatus = false;
var selectedLanguage = localStorage.getItem("selectedLanguage");



btnRun.onclick = () => {
    compilerApi();

};
btnNext.onclick = () => {
    if (currentLevel + 1 < contentJson.levels.level.length) {
        if (levelStatus) {
            currentLevel++;
            getLevels();
            levelStatus = false;
            clearPage();
            if (!levelStatus) {
                btnNext.classList.add('bdisabled');
            }
        }
    } else {
        bilgialanı.style.display = "none";
        clearPage();
        header.innerHTML = "TEBRİKLER";
        editor.setValue("Bütün python kurslarını başarıyla tamamladınız!!!");
    }

};
btnBack.onclick = () => {
    if (currentLevel > 0) {
        currentLevel--;
        getLevels();
        clearPage();
    }
}
btnHint.onclick = () => {
    editor.setValue(contentJson.levels.level[currentLevel].code);
}
window.onload = () => {
    getLevels();
    if (!levelStatus) {
        btnNext.classList.add('bdisabled');
    }
    switch (selectedLanguage) {
        case "python":
            logo.src = "images/Logo/Kodluyoruz-Logo-Python.png"
            break;
        case "java":
            logo.src = "images/Logo/Kodluyoruz-Logo-Java.png"

            break;
        case "c":
            logo.src = "images/Logo/Kodluyoruz-Logo-C.png"

            break;
    }
};

//Tutorialler için gereken verileri çeken API işlemleri
function getLevels() {
    xhrContent.open('GET', contentApi + selectedLanguage, true);
    xhrContent.send();
    xhrContent.onload = () => {
        contentJson = JSON.parse(xhrContent.responseText);
        header.innerHTML = contentJson.levels.level[currentLevel].header;
        courseDiv.innerHTML = contentJson.levels.level[currentLevel].course + contentJson.levels.level[currentLevel].tutorial;
        editor.setValue(contentJson.levels.level[currentLevel].precode);
    };
    if (currentLevel <= 0) {
        btnBack.classList.add('bdisabled');
    } else {
        btnBack.classList.remove('bdisabled');
    }

}
//level geçildiğinde sayfa contentlerini temizleyen function
function clearPage() {
    header.innerHTML = "";
    courseDiv.innerHTML = "";
    div.innerHTML = "";
    editor.setValue("");
    hintCounter = 0;
    btnHint.style.visibility = "hidden";
}

//Compiler apisi için gereken POST işlemleri.
function compilerApi() {
    xhr.open('POST', proxy + compilerAPI, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    value = editor.getValue();
    var data = JSON.stringify({
        "clientId": "b82ecbc8597c915d6457172b1a5e4726",
        "clientSecret": "4b23f21be5921030cc3d8339f56c7e1e80832675fa73406bc4ef429461e9b61a",
        "script": value,
        "language": "python3",
        "versionIndex": "0"
    });
    xhr.send(data);
    xhr.onload = () => {
        responseJson = JSON.parse(xhr.responseText);
        if (responseJson.output.includes("<")) {
            responseJson.output = responseJson.output.replace(/[<,>]/g, "");
        }
        div.innerHTML = responseJson.output;

        var lowerRes = responseJson.output.toLowerCase();
        var lowerAns = contentJson.levels.level[currentLevel].answer.toLowerCase();
        if (lowerRes == lowerAns) {
            console.log("Done.");
            levelStatus = true;
            btnNext.classList.remove('bdisabled');
        } else {
            console.log("Error");
            hintCounter++;
            if (hintCounter > 1) {
                btnHint.style.visibility = "visible";
            }
        }
    }
}