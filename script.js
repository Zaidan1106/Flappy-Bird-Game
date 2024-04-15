var ganti = document.getElementById('zaidan')
var targetLuas = "luas-bangun-datar/index.html"
var targetPunch = "Punch Game/tutorial-punch/tutorial.html"; // Simpan URL tujuan di sini
var targetTuting = "tutingtas/index.html"; // Simpan URL tujuan di sini
var targetAngka = "tebakangka/index.html"; // Simpan URL tujuan di sini
var targetXox = "TIC-TAC-TOE/index.html"; // Simpan URL tujuan di sini
var targetNext = "https://forms.gle/VE7CyvsRi7jDNi7p8"; // Simpan URL tujuan di sini
let saweria = "https://saweria.co/Zaidan1106"

function ubah() {
    ganti = document.getElementById('i')
    console.log(ganti)
}

function sound() {
    const pilih = document.getElementById('mouseover');
    pilih.play();
}

function klik0() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = targetLuas;
    };
}

function klik1() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = targetPunch;
    };
}

function klik2() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = targetTuting;
    };
}

function klik3() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = targetAngka;
    };
}

function klik4() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = targetXox;
    };
}

function klik5() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = "Flappy-Bird-Game-main/Flappy-Bird-Game-main/index.html";
    };
}

function klik6() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = targetNext;
    };
}

function sawer() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = saweria;
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

// Modal start
function muncul() {
    const modal = document.querySelector('.gform');
    const form = document.querySelector('.wrap-gf');
    const gbs = document.getElementById('gbs')
    
    gbs.play();
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        // Menambahkan kelas active setelah browser melakukan rendering ulang
        form.classList.add('active');
    });
}

function exit() {
    const modal = document.querySelector('.gform');
    const form = document.querySelector('.wrap-gf');
    const klikin = document.getElementById('klik');
    
    klikin.play();
    form.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000); // Waktu timeout sama dengan durasi transisi
}
// Modal end
