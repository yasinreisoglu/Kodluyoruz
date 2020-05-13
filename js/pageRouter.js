var btnPython = document.getElementById('btnPython');
var btnC = document.getElementById('btnC');
var btnJava = document.getElementById('btnJava');
var imgJava = document.getElementById('imgJava');
var imgPython = document.getElementById('imgPython');
var imgC = document.getElementById('imgC');
var logo = document.getElementById('logo');



btnPython.onclick = () => {
    window.location.href = 'code_page.html';
    localStorage.setItem("selectedLanguage", "python");
}

btnC.onclick = () => {
    window.location.href = 'code_page.html';
    localStorage.setItem("selectedLanguage", "c");
}

btnJava.onclick = () => {
    window.location.href = 'code_page.html';
    localStorage.setItem("selectedLanguage", "java");
}

function setColorized(lang) {
    switch (lang) {
        case 'Python':
            imgPython.src = "images/iconlar/python-color.png";
            imgPython.style.transitionDelay = "0.8s";
            logo.src = "images/Logo/Kodluyoruz-Logo-Python.png";
            logo.style.transitionDelay = "1s";
            break;
        case 'C':
            imgC.src = "images/iconlar/C-color.png";
            logo.src = "images/Logo/Kodluyoruz-Logo-C.png";

            break;
        case 'Java':
            imgJava.src = "images/iconlar/java-color.png";
            logo.src = "images/Logo/Kodluyoruz-Logo-Java.png";

            break;
    }
}

function setWhite(lang) {
    switch (lang) {
        case 'Python':
            imgPython.src = "images/iconlar/python-2.png";
            logo.src = "images/Logo/Kodluyoruz-Logo-2.png";
            logo.style.transitionDelay = "1s";

            break;
        case 'C':
            imgC.src = "images/iconlar/C-2.png";
            logo.src = "images/Logo/Kodluyoruz-Logo-2.png";

            break;
        case 'Java':
            imgJava.src = "images/iconlar/java-2.png";
            logo.src = "images/Logo/Kodluyoruz-Logo-2.png";

            break;
    }
}

function setPythonColorized() {
    imgJava.src = "images/iconlar/test.png";
}

function setPythonJavaWhite() {
    imgJava.src = "images/iconlar/test.png";
}