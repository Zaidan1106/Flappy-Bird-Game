// Mengambil semua tombol dengan id 'button'
let buttons = document.querySelectorAll('#button');
let resetBtn = document.querySelector('#reset');
let retak = document.querySelector('.retak');
let hancur = document.querySelector('.hancur');
let scoreDisplay = document.querySelector('.score-display');
let tombolHome = document.getElementById('home-btn');
let modalEasy = document.getElementById('modal1')
let successEasy = document.getElementById('success')

let score = 0; // Inisialisasi skor awal

// Sembunyikan tombol reset secara default
modalEasy.style.display = 'none';
successEasy.style.display = 'none';

// Atur jumlah tombol yang dibutuhkan untuk menampilkan tombol reset
let requiredButtonClicks = window.innerWidth > 768 ? 9 : 8;

// Fungsi untuk mengatur ulang gambar tombol tanpa mereset skor
function resetGame() {
    // Reset gambar tombol menjadi gambar asli
    buttons.forEach(button => {
        button.src = "../img/tmbk.png";
        button.classList.remove('clicked'); // Menghapus kelas 'clicked' dari semua tombol
    });

    // Mainkan suara reset
    const clickSound = document.getElementById('popReset');
    clickSound.currentTime = 0; // Mulai dari awal setiap kali tombol reset diklik
    clickSound.play();

    // Sembunyikan tombol reset setelah direset
    modalEasy.style.display = 'none';
}

// Fungsi untuk mengatur ulang gambar tombol serta mereset skor
function resetGameWithScoreReset() {
    // Reset gambar tombol menjadi gambar asli
    buttons.forEach(button => {
        button.src = "../img/tmbk.png";
        button.classList.remove('clicked'); // Menghapus kelas 'clicked' dari semua tombol
    });

    // Reset skor menjadi 0
    score = 0;

    // Update tampilan skor
    scoreDisplay.textContent = 'SCORE: ' + score;

    // Mainkan suara reset
    const clickSound = document.getElementById('popReset');
    clickSound.currentTime = 0; // Mulai dari awal setiap kali tombol reset diklik
    clickSound.play();

    // Sembunyikan tombol reset setelah direset
    menangBg.style.display = 'none'
    modalEasy.style.display = 'none';
}

const menangSound = document.querySelector('#menangSound');
const menang = document.querySelector('.victory1');
const countDown = document.querySelector('.countdown');
const menangBg = document.querySelector('.finish-bg')
const loding = document.querySelector('.loding')
menang.style.display = 'none';
loding.style.display ='none'


function showModal() {
    loding.style.display = 'flex'

    // Tampilkan countdown terlebih dahulu
    setTimeout(function() {
        loding.style.display = 'none'
        // Memainkan suara menang
        menangSound.play();
        countDown.style.display = 'flex';
        // Setelah jeda 3 detik, jalankan animasi gsap
        gsap.from(".victory1", { duration: 1, opacity: 0, scale: 2, delay: 0 });
        menangBg.style.display = 'flex';
        menang.style.display = 'flex';
    }, 1500);


    // Setelah suara menang selesai diputar
    menangSound.addEventListener('ended', function() {
        // Menyembunyikan countdown dan victory1
        countDown.style.display = 'none';
        menang.style.display = 'none';

        // Menampilkan modal
        const soundEffect = document.querySelector('#victory2');
        soundEffect.play();
        modalEasy.style.display = 'flex';
        // Menjalankan animasi GSAP pada container
        gsap.from(".container-md", { duration: 1, opacity: 0, scale: 0.5, delay: 0 });

        setTimeout(function() {
            // Menampilkan elemen successEasy dan mengatur posisinya di luar layar bawah
            successEasy.style.display = 'block';
            successEasy.style.opacity = '0';
            successEasy.style.transform = 'translateY(100px)'; // Geser elemen ke bawah sejauh 100px

            // Menjalankan animasi GSAP untuk mengubah opasitas, posisi, dan menggeser elemen dari bawah ke atas
            gsap.to("#success", {
                duration: 1, // Durasi animasi (detik)
                opacity: 1, // Mengubah opacity dari 0 menjadi 1
                y: 0, // Menggeser elemen ke posisi default (tidak ada perubahan dalam sumbu y)
                ease: "power4.out" // Easing function
            });
        }, 1500);

        // Setelah suara victory2 selesai diputar

        // Fungsi untuk memulai perhitungan
        setTimeout(function() {
            const counter = document.getElementById('counter');
                const audio = document.getElementById('hitung');
                let count = 0;
    
                // Fungsi untuk mengubah nilai counter dari 0 hingga 100 dalam durasi audio
                function incrementCounter() {
                    if (count <= 100) {
                        counter.textContent = count;
                        count++;
                        setTimeout(incrementCounter, interval); // Ubah nilai setiap interval yang dihitung
                    }
                }
    
                // Mulai perhitungan setelah audio selesai diputar
                audio.addEventListener('play', function() {
                    incrementCounter();
                });
    
                // Dapatkan durasi audio
                const duration = audio.duration;
    
                // Hitung jumlah langkah (count) untuk mencapai 100 dalam durasi audio
                const steps = 100;
                const interval = duration / steps * 1000; // Konversi ke milidetik
    
                // Mulai pemutaran audio dan perhitungan saat fungsi dipanggil
                audio.play();
    
                audio.addEventListener('ended', function() {
                    // Panggil fungsi hitung() untuk memulai perhitungan
                    munculButton();
                });
        }, 3500)
    });
}


const baten1 = document.getElementById('baten1')
const baten3 = document.getElementById('baten3')
baten1.style.display = 'none'
resetBtn.style.display = 'none'
baten3.style.display = 'none'

function munculButton() {
    baten1.style.display = 'flex'
    resetBtn.style.display = 'flex'
    baten3.style.display = 'flex'
    baten1.style.opacity = '0'
    resetBtn.style.opacity = '0'
    baten3.style.opacity = '0'
    
    gsap.to(["#baten1", "#reset", "#baten3"], {
        duration: 1, // Durasi animasi (detik)
        opacity: 1, // Mengubah opacity dari 0 menjadi 1
        ease: "power4.out" // Easing function
    });    
}



// Loop melalui setiap tombol dan menambahkan event listener
buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
        if (!this.classList.contains('clicked') && score < 100) { // Periksa apakah tombol sudah diklik sebelumnya dan skor belum mencapai 100
            // Mengganti gambar pada tombol yang diklik menjadi gambar dengan kelas .retak
            this.src = hancur.src;

            // Mainkan suara
            const clickSound = document.getElementById('clickSound');
            clickSound.currentTime = 0; // Mulai dari awal setiap kali tombol diklik
            clickSound.play();

            // Menambahkan kelas 'clicked' pada tombol yang diklik
            this.classList.add('clicked');

            // Tambah skor setiap kali tombol diklik
            score++;
            scoreDisplay.textContent = 'SCORE: ' + score;

            // Check if score reaches 100
            if (score === 100) {
                // Hentikan musik latar
                const bgMusik = document.getElementById('gameplay');
                bgMusik.pause();
                bgMusik.currentTime = 0; // Mengembalikan ke awal untuk memulai kembali dari awal saat dimainkan lagi
            
                // Tampilkan modal
                showModal();
            }
        }

        // Reset semua tombol jika semua tombol sudah diklik
        if (document.querySelectorAll('.clicked').length === requiredButtonClicks) {
            resetGame();
        }
    });    
}); 

// Menambahkan event listener untuk tombol reset
resetBtn.addEventListener('click', function() {
    resetGameWithScoreReset();
});

const klikin = document.getElementById('Home');

function popSound1() {
    klikin.play();

    klikin.onended = function() {
        let targetHome = "../../index.html";
        window.location.href = targetHome;
    };
}

const sound = document.getElementById('Home');
const start1 = document.getElementById('start1')

function nextGame() {
    sound.play();

    sound.onended = function() {
        let targetNext = "/Punch Game/choose-difficulty-punch/choose.html";
        window.location.href = targetNext;
    };
}

let modalCd = document.querySelector('.countdown')
let tiga = document.querySelector('.tiga')
let dua = document.querySelector('.dua')
let satu = document.querySelector('.satu')
let mulai = document.querySelector('.MULAI')

function start() {
    const bgMusik = document.getElementById('gameplay')
    const setart = document.getElementById('popReset')
    setart.play()
    bgMusik.play()
    start1.play();
    modalCd.style.display = "flex";
    let modalStart = document.querySelector('.modals-start')
        let startBtn = document.querySelector('.alert-start');
        // gsap.to(".modals-start", {duration: 1, opacity: 0, scale: 0.5, delay: 0});
        modalStart.style.display = 'none';
        startBtn.style.display = 'none';

    setTimeout(function() {
        tiga.style.display = "flex";
    }, 500);

    setTimeout(function() {
        tiga.style.display = 'none';
        dua.style.display = "flex";
    }, 1500);

    setTimeout(function() {
        dua.style.display = "none";
        satu.style.display = "flex";
    }, 2500);

    setTimeout(function() {
        satu.style.display = "none";
        mulai.style.display = "flex";
    }, 3500);

    start1.onended = function() {
        modalCd.style.display = "none";
        mulai.style.display = 'none'
    };
}

let targetEasy = "../Punch Game/game-pencet.html"

function easy() {
    klikin.play();

    klikin.onended = function() {
        window.location.href = targetEasy;
    };
}





















// penjelasan
// Tentu, mari saya jelaskan langkah demi langkah:

// 1. **Pemantauan Klik Tombol (mousedown)**:
//    - Ketika pengguna mengklik (mousedown) salah satu tombol, event listener yang ditambahkan pada masing-masing tombol akan diaktifkan.
//    - Di dalam event listener ini, kita menetapkan `isButtonClicked` menjadi `true` untuk menandakan bahwa sebuah tombol telah diklik.

// 2. **Pemantauan Lepas Klik (mouseup) di Seluruh Dokumen**:
//    - Kita menambahkan event listener pada seluruh dokumen (document) untuk memantau ketika pengguna melepaskan klik (mouseup) dari tombol di mana pun di dalam dokumen.
//    - Saat event mouseup terjadi di dokumen, kita memeriksa apakah sebelumnya ada tombol yang diklik (`isButtonClicked` bernilai `true`).
//    - Jika ya, kita mengubah status `isButtonClicked` kembali menjadi `false`. Ini penting untuk memastikan bahwa kita tidak secara tidak sengaja menganggap tombol tetap dalam keadaan diklik saat pengguna melepaskan klik di luar area tombol.

// 3. **Perilaku Ketika ResetGame Dipanggil**:
//    - Saat fungsi `resetGame()` dipanggil, kita mengatur kembali opacity dari semua tombol menjadi 1, sehingga membuat mereka kembali sensitif.

// Dengan pendekatan ini, tombol akan tetap dalam keadaan tidak sensitif (opacity tetap 0) setelah diklik, bahkan jika pengguna menarik kursor mereka keluar dari area tombol. Dan ketika fungsi `resetGame()` dipanggil, tombol akan kembali sensitif dengan mengembalikan opacity mereka ke 1.

