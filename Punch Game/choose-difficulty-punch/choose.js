let targetHome = "../../index.html"
let targetEasy = "../game-pencet.html"
let targetMedium = "../medium/game-pencet.html"
let targetHard = "../hard/game-pencet.html"
const klikin = document.getElementById('home');


function popSound() {
    klikin.play();

    klikin.onended = function() {
        window.location.href = targetHome;
    };
}

function easy() {
    klikin.play();

    klikin.onended = function() {
        window.location.href = targetEasy;
    };
}

function medium() {
    klikin.play();

    klikin.onended = function() {
        window.location.href = targetMedium;
    };
}

function hard() {
    klikin.play();

    klikin.onended = function() {
        window.location.href = targetHard;
    };
}