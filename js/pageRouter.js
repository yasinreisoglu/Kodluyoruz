var btnPython = document.getElementById('btnPython');
var btnC = document.getElementById('btnC');
var btnJava = document.getElementById('btnJava');


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