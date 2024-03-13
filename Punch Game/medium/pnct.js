// Mengambil semua tombol dengan id 'button'
let buttons = document.querySelectorAll('#button');
let resetBtn = document.querySelector('#reset');
let retak = document.querySelector('.retak');
let hancur = document.querySelector('.hancur');
let scoreDisplay = document.querySelector('.score-display');
let tombolHome = document.getElementById('home-btn');


let score = 0; // Inisialisasi skor awal

// Sembunyikan tombol reset secara default
resetBtn.style.display = 'none';

// Atur jumlah tombol yang dibutuhkan untuk menampilkan tombol reset
let requiredButtonClicks = window.innerWidth > 768 ? 9 : 8;

// Loop melalui setiap tombol dan menambahkan event listener
buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
        if (!this.classList.contains('clicked')) { // Periksa apakah tombol sudah diklik sebelumnya
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
                alert("SKOR: 100, Selamat Kamu Menyelesaikan Level Medium");
                // Redirect to home page after the alert is closed
                let targetHome = "../../index.html";
                window.location.href = targetHome;
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
    resetGame();
});

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
    resetBtn.style.display = 'none';
}

const klikin = document.getElementById('Home');

function popSound() {
    klikin.play();

    klikin.onended = function() {
        let targetHome = "../../index.html";
        window.location.href = targetHome;
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

