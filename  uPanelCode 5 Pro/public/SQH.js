function  cook() {
    var dfrrrrrr = document.getElementById("area").value
    localStorage.setItem("myCat", dfrrrrrr);
    alert("Code is save in HTplay")

}

function get() {
    let rd = document.getElementById('area')
    let cat = localStorage.getItem("myCat");
    rd.innerHTML=  cat;

}

function log() {
    let rd = document.getElementById('area')
    let cat = localStorage.getItem("myCat");
    rd.innerHTML = cat;

}


function myFunction() {
    /* Находим текстовое поле */
    var copyText = document.getElementById("area");
  
    /* Выбираем текстовое поле */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* Для мобильных устройств */
  
     /* Копируем текст из текстового поля */
    navigator.clipboard.writeText(copyText.value);
  
    /* Выводим скопированный текст в диалоговом окне */
  
    alert("text copied successfully!")
    rdd=copyText.value
}
  
function paste(){
    /* Находим текстовое поле */
    var copyText = document.getElementById("area");
  
    /* Выбираем текстовое поле */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* Для мобильных устройств */
  
     /* Копируем текст из текстового поля */
    navigator.clipboard.writeText(copyText.value);
  
    /* Выводим скопированный текст в диалоговом окне */
  
    alert("text copied successfully!")
    let cd = document.getElementById('area')
    cd.innerHTML = " ";
}

function savecss() {
    const textToSave = document.getElementById("area").value;
    const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    const fileNameToSaveAs = "style.css";

    const downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}



function saveTextAsFile() {
    const textToSave = document.getElementById("area").value;
    const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    const fileNameToSaveAs = "index.html";

    const downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}



function js() {
    const textToSave = document.getElementById("area").value;
const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
const fileNameToSaveAs = "script.js";

const downloadLink = document.createElement("a");
downloadLink.download = fileNameToSaveAs;
downloadLink.innerHTML = "Download File";
downloadLink.href = textToSaveAsURL;
downloadLink.onclick = destroyClickedElement;
downloadLink.style.display = "none";
document.body.appendChild(downloadLink);

downloadLink.click();
let cd = document.getElementById('sdk')
cd.innerHTML = "Command 'save[text from panelcode.cms] in format[js]' is complite  ";
}
