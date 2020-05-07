var div = document.getElementById("rightWorkspace");
var btn = document.getElementById("sendApi");
var courseDiv = document.getElementById("leftWorkspace");
var btnNext = document.getElementById("nextButton");
var btnBack = document.getElementById("backButton");
var header = document.getElementById("header");



var myUrl = 'https://api.jdoodle.com/v1/execute';
var proxy = 'https://cors-anywhere.herokuapp.com/';
var contentUrl = "http://demo3878722.mockable.io/level";
const xhrContent = new XMLHttpRequest();
const xhr = new XMLHttpRequest();



let currentLevel = 1;
var responseJson;
var contentJson;
var value;
var levelStatus = false;


btn.onclick = () => {
    compilerApi();
};

btnNext.onclick = () => {
    if (levelStatus) {
        currentLevel++;
        getLevels();
        levelStatus = false;
    }
};
btnBack.onclick = () => {
    if (currentLevel > 1) {
        currentLevel--;
        getLevels();

    }
}


window.onload = () => {
    getLevels();
};


function getLevels() {
    xhrContent.open('GET', contentUrl + currentLevel, true);
    xhrContent.send();
    xhrContent.onload = () => {
        contentJson = JSON.parse(xhrContent.responseText);
        courseDiv.innerHTML = contentJson.course + contentJson.tutorial;
        header.innerHTML = contentJson.header.toUpperCase();
    };

}

//Compiler apisi için gereken POST işlemleri.
function compilerApi() {
    xhr.open('POST', proxy + myUrl, true);
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
        div.innerHTML = responseJson.output;
        var lowerRes = responseJson.output.toLowerCase();
        if (value.includes(contentJson.code)) {
            console.log("Done.");
            levelStatus = true;
        } else {
            console.log("Error");
        }
    }
}