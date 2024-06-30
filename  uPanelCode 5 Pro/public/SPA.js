
function sss(){
    document.getElementById("main").style.display = "none";
}

function openmain(){
    closepush()
    document.getElementById("main").style.display = "block";
    document.getElementById("codepanel").style.display = "none";

}


function opencode(){
    closepush()
    document.getElementById("main").style.display = "none";
    document.getElementById("codepanel").style.display = "block";
    let rd = document.getElementById('area')
    let cat = localStorage.getItem("myCat");
    rd.innerHTML=  cat;

}

function openconsole(){
    closepush()
    document.getElementById("main").style.display = "none";
    document.getElementById("codepanel").style.display = "none";
    document.getElementById("console").style.display = "block";
    document.getElementById("htplay").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("notepad").style.display = "none";
}

function openpush3(){
    document.getElementById("codepanel").style.display = "none";
    document.getElementById("pusho").style.display = "block";   
}


function closepush(){
    document.getElementById("pusho").style.display = "none";
}


function azx(){
    document.getElementById("context-menu2").style.display = "block";   
}


function closem(){
    document.getElementById("context-menu2").style.display = "none";
}