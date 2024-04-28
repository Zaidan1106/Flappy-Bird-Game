var ganti = document.getElementById('zaidan')
var targetLuas = "luas-bangun-datar/index.html"
var targetPunch = "Punch Game/tutorial-punch/tutorial.html"; // Simpan URL tujuan di sini
var targetTuting = "tutingtas/index.html"; // Simpan URL tujuan di sini
var targetAngka = "tebakangka/index.html"; // Simpan URL tujuan di sini
var targetXox = "TIC-TAC-TOE/index.html"; // Simpan URL tujuan di sini
var targetNext = "https://forms.gle/VE7CyvsRi7jDNi7p8"; // Simpan URL tujuan di sini
let saweria = "https://saweria.co/Zaidan1106"
let klikk = document.getElementById('klik')


// typed text start**********************************
// Teks yang akan ditampilkan dengan animasi ketik
var textToType = ["Zaidan's Games", "Our Games", "Tempat NgeGame"];
var currentIndex = 0;

// Fungsi untuk menampilkan teks secara animasi
function typeWriter(text, i, cb) {
    if (i < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        // Geser posisi garis berkedip agar selalu berada di sebelah kanan huruf terakhir
        var cursor = document.querySelector('.blinking-cursor');
        var textElement = document.getElementById('typed-text');
        cursor.style.top = textElement.offsetTop + 'px';
        cursor.style.left = textElement.offsetWidth + textElement.offsetLeft - 2 + 'px';
        setTimeout(function() {
            typeWriter(text, i, cb);
        }, 50); // Kecepatan ketik (dalam milidetik)
    } else {
        setTimeout(function() {
            deleteText(cb); // Setelah mengetik selesai, hapus teks
        }, 2000); // Jeda 2 detik sebelum menghapus teks
    }
}

// Fungsi untuk menghapus teks secara animasi
function deleteText(cb) {
    var text = document.getElementById("typed-text").innerHTML;
    var length = text.length;
    if (length > 0) {
        text = text.slice(0, -1);
        document.getElementById("typed-text").innerHTML = text;
        // Geser posisi garis berkedip agar selalu berada di sebelah kanan huruf terakhir
        var cursor = document.querySelector('.blinking-cursor');
        var textElement = document.getElementById('typed-text');
        cursor.style.top = textElement.offsetTop + 'px';
        cursor.style.left = textElement.offsetWidth + textElement.offsetLeft - 2 + 'px';
        setTimeout(function() {
            deleteText(cb);
        }, 50); // Kecepatan penghapusan (dalam milidetik)
    } else {
        currentIndex++;
        if (currentIndex < textToType.length) {
            startTyping(); // Jika masih ada teks berikutnya, mulai mengetik lagi
        } else {
            currentIndex = 0; // Jika sudah sampai pada teks terakhir, kembali ke teks pertama
            startTyping(); // Mulai dari awal lagi
        }
    }
}

// Fungsi untuk menjalankan animasi dan pengulangan
function startTyping() {
    document.getElementById("typed-text").innerHTML = ""; // Bersihkan teks sebelum mengetik teks baru
    typeWriter(textToType[currentIndex], 0, function() {
        // Ketika animasi selesai, panggil fungsi startTyping kembali setelah jeda 2 detik
        setTimeout(startTyping, 2000);
    });
}

// Memulai animasi dan pengulangan
startTyping();
// type text end**********************************


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
audio.pause();
music.classList.remove("rotating"); // Menghapus kelas untuk menghentikan animasi
let welkam = document.querySelector('.welcome');
let animasiAktif = true; // Variabel untuk mengontrol apakah animasi aktif atau tidak
let cwc = document.querySelector('.container-wc')
let pop = document.getElementById('pope')
let star = document.getElementById('start')
star.style.opacity = 0


let wiggleAnimation; // Variabel untuk menyimpan animasi wiggle
let flickerTimeline; // Variabel untuk menyimpan animasi flicker

// Fungsi untuk memulai animasi
function mulaiAnimasi() {
    // Animasi hanya dimulai jika tidak sedang berjalan
    if (!isAnimasiBerjalan()) {
        setTimeout(() => {
            gsap.to('.welcome', { duration: 0.5, opacity: 1, scale: 1, ease: "back.out(1.7)" });
        }, 500);

        setTimeout(() => {
            gsap.to(".container-wc", { 
                duration: 1,
                scale: 1.25,
                opacity: 1,
                ease: "elastic.out(1, 0.3)",
                onComplete: function() {
                    gsap.to(".container-wc", {
                        duration: 0.5,
                        scale: 1,
                        ease: "back.inOut"
                    });
                }
            });

            let wc = document.querySelector('.container-wc');
            let wci = document.querySelector('.img-wc');
            let wcs = document.querySelector('#start');

            setTimeout(() => {
                wc.style.transition = 'box-shadow .5s ease-in-out';
                wc.style["box-shadow"] = '0rem .4rem 1rem orange';
                
                wci.style.transition = 'box-shadow .5s ease-in-out';
                wci.style["box-shadow"] = '-.6rem .5rem .9rem orange';
                
                wcs.style.transition = 'box-shadow .5s ease-in-out';
                wcs.style["box-shadow"] = '3px 3px 5px 0px red, -3px 3px 5px 0px blue';

                setTimeout(() => {
                    let start = document.querySelector('#start');
                    start.style.transition = '.2s';
                    start.style.opacity = 1;
                    start.style.transform = 'scale(1)';
                    
                    // Inisialisasi animasi wiggle jika belum ada
                    if (!wiggleAnimation) {
                        wiggleAnimation = gsap.to("#start", {
                            scale: 1.3,
                            repeat: -1,
                            yoyo: true,
                            duration: 0.5,
                            ease: "power1.inOut",
                            delay: 0.5,
                            onStart: function() {
                                flickerAnimation();
                            }
                        });
                    }
                    
                    function flickerAnimation() {
                        flickerTimeline = gsap.timeline({ repeat: -1 });
                        flickerTimeline
                            .to("#start", { duration: 1, color: "white", backgroundColor: "rgba(0, 0, 0, 0.8)" })
                            .to("#start", { duration: 1, color: "white", backgroundColor: "rgba(0, 0, 0, .8)" });
                    }

                }, 1000);
            }, 1300);
        },1600);
    }
}

// Panggil fungsi untuk memulai animasi
mulaiAnimasi();

// Fungsi untuk menghentikan animasi
function stope() {
    let start = document.querySelector('#start');
    start.style.backgroundColor = 'black';
    start.style.color = 'white';

    // Menonaktifkan animasi
    disableAnimations();
}

// Fungsi untuk menonaktifkan kedua animasi
function disableAnimations() {
    if (wiggleAnimation) {
        wiggleAnimation.pause(); // Jeda animasi wiggle
        wiggleAnimation.kill(); // Hentikan animasi wiggle
        wiggleAnimation = null; // Set wiggleAnimation ke null setelah dihentikan
    }
    
    // Jika ada animasi flicker yang berjalan, hentikan
    if (flickerTimeline && flickerTimeline.isActive()) {
        flickerTimeline.pause(); // Jeda animasi flicker
    }
}

// Fungsi untuk mengecek apakah animasi sedang berjalan
function isAnimasiBerjalan() {
    return (wiggleAnimation && wiggleAnimation.isActive()) || (flickerTimeline && flickerTimeline.isActive());
}

function mucik() {
    audio.play()
    pop.play();
    gsap.to(".container-wc", { 
        duration: 1, // Durasi animasi dalam detik
        scale: 1.2, // Skala akhir yang lebih besar dari normal
        opacity: 1, // Opacity akhir (1 = penuh)
        ease: "elastic.out(1, 0.3)", // Efek elastis untuk efek memantul
        onComplete: function() { // Ketika animasi selesai
          gsap.to(".container-wc", {
            duration: 0.5, // Durasi animasi kembali ke ukuran normal
            opacity: 0,
            scale: .1, // Skala kembali ke ukuran normal
            ease: "back.inOut" // Efek kembali ke ukuran normal
          });
        }
      });
    setTimeout(() => {
       // Set opacity ke 0 untuk mulai
        welkam.style.opacity = '0';

        // Set transition untuk opacity
        welkam.style.transition = 'opacity 1s ease-in-out';

        // Tunggu sedikit sebelum memulai transisi
        setTimeout(() => {
            welkam.style.opacity = '0'; // Set opacity kembali ke 1 untuk membuat elemen muncul
            music.classList.add("rotating"); // Menambahkan kelas untuk memulai animasi
        }, 100);

        // Set timeout untuk mengubah display menjadi 'none' setelah transisi selesai
        setTimeout(() => {
            welkam.style.opacity = '0'; // Set opacity ke 0 lagi sebelum mengubah display
            setTimeout(() => {
                welkam.style.display = 'none'; // Set display ke 'none' setelah transisi selesai
            }, 500); // Sesuaikan dengan durasi transisi
        }, 500); // Tunggu 3 detik sebelum memulai transisi keluar
    },1500);
}

// Tambahkan event listener untuk memulai kembali animasi wiggle dan flicker saat mouse meninggalkan tombol
document.querySelector('#start').addEventListener("mouseleave", function() {
    mulaiWiggleDanFlicker();
});

// Fungsi untuk memulai kembali animasi wiggle dan flicker
function mulaiWiggleDanFlicker() {
    let start = document.querySelector('#start');
    start.style.backgroundColor = 'rgba(26, 26, 26, 0.579)';
    start.style.color = 'white';
    start.style.transform = 'scale(1)'
     // Memulai animasi wiggle jika belum ada
     if (!wiggleAnimation || wiggleAnimation.isActive()) {
        wiggleAnimation = gsap.to("#start", {
            scale: 1, // Menetapkan skala awal ke 1
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "power1.inOut",
            delay: 0.5,
            onStart: function() {
                flickerAnimation();
            }
        });
    }

    // Memulai animasi flicker jika belum ada
    if (!flickerTimeline || !flickerTimeline.isActive()) {
        flickerTimeline = gsap.timeline({ repeat: -1 });
        flickerTimeline
            .to("#start", { duration: 1.5, color: "white", backgroundColor: "rgba(0, 0, 0, 0.8)" })
            .to("#start", { duration: 1.5, color: "white", backgroundColor: "rgba(26, 26, 26, 0.579)" });
    }
}


let img = document.getElementById('pos')

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        klikk.play();
        img.src = 'img/musik.png';
        music.classList.add("rotating"); // Menambahkan kelas untuk memulai animasi
    } else {
        audio.pause();
        klikk.play();
        img.src = 'img/pause.png';
        music.classList.remove("rotating"); // Menambahkan kelas untuk memulai animasi
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
