var ganti = document.getElementById('zaidan')
var targetUrl = "../games/Punch Game/tutorial-punch/tutorial.html"; // Simpan URL tujuan di sini

function ubah() {
    ganti = document.getElementById('i')
    console.log(ganti)
}

function sound() {
    const pilih = document.getElementById('mouseover');
    pilih.play();
}

function klik() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = "../games/Punch Game/tutorial-punch/tutorial.html";
    };
}

function klik1() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = "Flappy-Bird-Game-main/Flappy-Bird-Game-main/index.html";
    };
}

let audio = document.getElementById('homeMusic')
let music = document.getElementById('mucik')

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        music.classList.add("rotating"); // Menambahkan kelas untuk memulai animasi
    } else {
        audio.pause();
        music.classList.remove("rotating"); // Menghapus kelas untuk menghentikan animasi
    }
}