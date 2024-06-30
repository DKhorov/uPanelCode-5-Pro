function center(){
    document.getElementById("area").style.textAlign="center";
}
function right(){
    document.getElementById("area").style.textAlign="right";
}
function left(){
    document.getElementById("area").style.textAlign="left";
}

function small(){
    document.getElementById("area").style.fontSize = "5px";
    documet.getElementById("test").style.fontSize = "5px";
}
function big(){
    document.getElementById("area").style.fontSize = "60px";
}
function normal(){
    document.getElementById("area").style.fontSize = "15px";
}


function cx() {
    var x = document.getElementById("sel");
    if (x.value == "Arial Black") {
        document.getElementById("area").style.fontFamily = "Arial Black";
        document.getElementById("test").style.fontFamily = "Arial Black";
    }
    if (x.value == "Apple LiGothic") {
        document.getElementById("area").style.fontFamily = "Apple LiGothic";
        document.getElementById("test").style.fontFamily = "Apple LiGothic";
    }
    if (x.value == "Apple Braille") {
        document.getElementById("area").style.fontFamily = "Apple Braille";
        document.getElementById("test").style.fontFamily = "Apple Braille";
    }
    if (x.value == "Apple Chancery") {
        document.getElementById("area").style.fontFamily = "Apple Chancery";
        document.getElementById("test").style.fontFamily = "Apple Chancery";
    }
    if (x.value == "Apple Symbols") {
        document.getElementById("area").style.fontFamily = "Apple Symbols";
        document.getElementById("test").style.fontFamily = "Apple Symbols";
    }
    if (x.value == "Apple SD Gothic Neo") {
        document.getElementById("area").style.fontFamily = "Apple SD Gothic Neo";
        document.getElementById("test").style.fontFamily = "Apple SD Gothic Neo";
    }
    if (x.value == "Sergoe UI Symbol") {
        document.getElementById("area").style.fontFamily = "Sergoe UI Symbol";
        document.getElementById("test").style.fontFamily = "Sergoe UI Symbol";
    }
    if (x.value == "Arial") {
        document.getElementById("area").style.fontFamily = "Arial";
        document.getElementById("test").style.fontFamily = "Arial";
    }
    if (x.value == "Roboto light") {
        document.getElementById("area").style.fontFamily = "Roboto light";
        document.getElementById("test").style.fontFamily = "Roboto light";
    }
    if (x.value == "Sans-serif") {
        document.getElementById("area").style.fontFamily = "Sans-serif";
        document.getElementById("test").style.fontFamily = "Sans-serif";
    }
    if (x.value == "Impact") {
        document.getElementById("area").style.fontFamily = "Impact";
        document.getElementById("test").style.fontFamily = "Impact";
    }
    if (x.value == "Times New Roman") {
        document.getElementById("area").style.fontFamily = "Times New Roman";
        document.getElementById("test").style.fontFamily = "Times New Roman";
    }

    if (x.value == "DK general font") {
        document.getElementById("area").style.fontfamily = 'Franklin Gothic Medium', 'Arial Narrow';
        document.getElementById("area").style.fontstyle= "normal" ;
    }
}

function cor(){
    document.getElementById("area").style.fontFamily = "Impact";
}
function arial(){
    document.getElementById("area").style.fontFamily = "Arial";
}
function times(){
    document.getElementById("area").style.fontFamily = "Times New Roman";


}



function night(){
    document.getElementById("area").style.color = "white";
    document.getElementById("area").style.backgroundColor = "rgb(33, 33, 33)";
    alert("Night Theme")

}
function light(){
    document.getElementById("area").style.color = "black";
    document.getElementById("area").style.backgroundColor = "white";
    alert("Light Theme")
}


var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


function cleararea(){
    let cd = document.getElementById('area')
    cd.innerHTML = " ";
}

let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#color-picker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

function updateFirst(event) {
    const p = document.querySelector("textarea");
    if (p) {
        p.style.color = event.target.value;
    }
}

function updateAll(event) {
    document.querySelectorAll("textarea").forEach((p) => {
        p.style.color = event.target.value;
    });
}


function htmlbase() {
    let cd = document.getElementById('sdk')
    cd.innerHTML = "Hello world!";

}