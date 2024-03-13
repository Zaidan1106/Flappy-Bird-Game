let targetGame = "../choose-difficulty-punch/choose.html"
let targetHome = "../../index.html"
let klikin = document.getElementById('clickSound')

function klikSound() {
    let klikin = new Audio("../../sound/geometry-dash-level-selected.mp3");
    klikin.play();

    klikin.onended = function() {
        window.location.href = targetGame;
    };
}

function klikSound2() {
    let klikin = new Audio("../../sound/geometry-dash-level-selected.mp3" );
    klikin.play();

    klikin.onended = function() {
        window.location.href = targetHome;
    };
}
