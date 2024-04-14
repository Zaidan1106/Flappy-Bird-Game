/* 
TUGAS BESAR (FUNCTION):
1. MEMBUAT PERHITUNGAN MATEMATIKA
    -luas lingkaran
    -luas segitiga
    -luas persegi panjang
    -luas jajargenjang

2. Menghitung total gaji yang di dapat dalam satu hulan dengan input minimal:
    -nama karyawan
    -gaji perhari
    -jumlah hari masuk kerja
*/

//*****************************************************//
const targetHome =  "../index.html"

function klik() {
    const klikin = document.getElementById('keklik');
    klikin.play();

    // When the audio finishes playing, navigate to the target URL
    klikin.onended = function() {
        window.location.href = targetHome;
    };
}

function klikah() {
    const klikin = document.getElementById('klik');
    klikin.play();
}

// Modal start
function muncul() {
    const modal = document.querySelector('.gform');
    const form = document.querySelector('.wrap-gf');
    const gbs = document.getElementById('gbs')
    const klik = document.getElementById('klik')
    
    klik.play()
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

// music start
function wmusic() {
    const wmusic = document.getElementById('yes')
    const nmusic = document.getElementById('no')
    const sfx = document.getElementById('klik')
    const bg = document.getElementById('bg-ms')
    
    bg.pause()
    sfx.play()
    wmusic.style.display = 'none'
    nmusic.style.display = 'flex'
}

function nomusic() {
    const wmusic = document.getElementById('yes')
    const nmusic = document.getElementById('no')
    const sfx = document.getElementById('klik')
    const bg = document.getElementById('bg-ms')
    
    bg.play()
    sfx.play()
    wmusic.style.display = 'flex'
    nmusic.style.display = 'none'
}
// music end









//1 MEMBUAT PERHITUNGAN MATEMATIKA

//********************************************lingkaran start
let pi //konsep "hoisting" atau "scope"
piSelected = false

function pilih(pilihan) {
    if (pilihan === 'desimal') {
        let bg1 = document.querySelector('#desimal')
        let bg2 = document.querySelector('#pecahan')
        bg1.style.background = 'green'
        bg1.style.color = 'white'
        bg2.style.background = 'white'
        bg2.style.color = 'black'
        piSelected = true; // Menandai bahwa nilai pi telah dipilih
        pi = 3.14;
        console.log('ente milih',pi, 'sebagai π')
    } else if (pilihan === 'pecahan') {
        let bg1 = document.querySelector('#pecahan')
        let bg2 = document.querySelector('#desimal')
        bg1.style.background = 'green'
        bg1.style.color = 'white'
        bg2.style.background = 'white'
        bg2.style.color = 'black'
        piSelected = true; // Menandai bahwa nilai pi telah dipilih
        pi = 22/7;
        console.log('ente milih',pi, 'sebagai π')
    } else {
        let bg1 = document.querySelector('#desimal');
        let bg2 = document.querySelector('#pecahan');
        bg1.style.background = ''; // Menghapus background yang diatur sebelumnya
        bg1.style.color = ''; // Menghapus warna teks yang diatur sebelumnya
        bg2.style.background = ''; // Menghapus background yang diatur sebelumnya
        bg2.style.color = ''; // Menghapus warna teks yang diatur sebelumnya
        piSelected = false; // Menandai bahwa nilai pi belum dipilih jika bukan desimal atau pecahan yang dipilih

    }
}

document.addEventListener('click', function(event) {
    const phiButton = document.querySelector('#desimal');
    const phiuButton = document.querySelector('#pecahan');
    const hitungButton = document.querySelector('#btn-hitung');
    const resultInput = document.querySelector('#result');
    const inputR = document.querySelector('#r');

    // Cek apakah yang diklik bukanlah tombol "desimal", "pecahan", "hitung", "result", atau input "r"
    if (event.target !== phiButton && event.target !== phiuButton && event.target !== hitungButton && event.target !== resultInput && event.target !== inputR) {
        phiButton.style.background = 'white';
        phiButton.style.color = 'black';
        phiuButton.style.background = 'white';
        phiuButton.style.color = 'black';
        piSelected = false
    }
});

function hitung() {
    const phi = document.querySelector('#desimal');
    const phiu = document.querySelector('#pecahan');
    const input = document.querySelector('#r');
    const merah = document.querySelector('.input-r')
    const red = document.querySelector('.red')
    const red1 = document.querySelector('.red1')
    const gbs = document.getElementById('gbs')

    if (input === null || input.value === '' || (!phi && !phiu)) {
        merah.classList.add('active')
        gbs.play()
    } else if (!piSelected) {
        red.classList.add('active')
        red1.classList.add('active')
        gbs.play()
    } else {
        // Lakukan perhitungan jika semua syarat terpenuhi
        const jariJari = parseFloat(input.value);
        const hasil = jariJari * jariJari * pi;
        const bnr = document.getElementById('bnr')
        document.querySelector('#result').value = hasil;
        console.log('Luas Lingkarannya adalah',hasil)
        bnr.play()
    }
}

function remove() {
    const merah = document.querySelector('.input-r')
    merah.classList.remove('active')
}

const red = document.querySelector('.red')
const red1 = document.querySelector('.red1')
const resetih = document.querySelector('.btn-reset')
const klikin = document.getElementById('klik');
const hasil = document.getElementById('btn-hitung')

red.addEventListener('click', function() {
    red.classList.remove('active')
    red1.classList.remove('active')
    klikin.play()
})

red1.addEventListener('click', function() {
    red.classList.remove('active')
    red1.classList.remove('active')
    klikin.play()
})

resetih.addEventListener('click', function () {
    klikin.play()
})

hasil.addEventListener('click', function() {
    klikin.play()
})

// Simpan nilai awal dan kelas awal
const initialValue = document.getElementById('inputText').value;
const initialClass = 'myClass'; // Ganti 'myClass' dengan kelas awal yang digunakan

// Fungsi reset
function reset() {
    // Mengembalikan nilai input ke nilai awal
    document.getElementById('inputText').value = initialValue;

    // Menghapus kelas yang ditambahkan sebelumnya
    const myElement = document.getElementById('myElement');
    myElement.classList.remove('myClass');
}

// Menambahkan event listener untuk tombol "Reset"
document.getElementById('resetButton').addEventListener('click', reset);


function reset() {
    document.getElementById('r').value = ''; // Mengatur nilai input kembali kosong
    document.getElementById('result').value = ''; // Mengatur teksarea kembali kosong

    const phiButton = document.querySelector('#desimal');
    const phiuButton = document.querySelector('#pecahan');
    phiButton.style.background = ''; // Menghapus warna latar belakang yang mungkin diatur sebelumnya
    phiButton.style.color = ''; // Menghapus warna teks yang mungkin diatur sebelumnya
    phiuButton.style.background = ''; // Menghapus warna latar belakang yang mungkin diatur sebelumnya
    phiuButton.style.color = ''; // Menghapus warna teks yang mungkin diatur sebelumnya

    piSelected = false; // Mengatur kembali piSelected ke false

    const merah = document.querySelector('.input-r')
    merah.classList.remove('active')
    red.classList.remove('active')
    red1.classList.remove('active')
}

//********************************************lingkaran end




//********************************************segitiga start 
function hitung1() {
    const alas = parseFloat(document.getElementById('alas').value); //parseFloat gunanya untuk mengkonversi string menjadi angka float
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    

    if (alas === '' || isNaN(alas) ) {
        const gbs = document.getElementById('gbs')
        const t = document.querySelector('.tinggi')
        const a = document.querySelector('.alas')

        t.classList.remove('active')
        a.classList.add('active')
        gbs.play()
        return; // Hentikan perhitungan jika salah satu masukan kosong atau bukan angka
    } else if (tinggi === '' || isNaN(tinggi)) {
        const gbs = document.getElementById('gbs')
        const t = document.querySelector('.tinggi')
        const a = document.querySelector('.alas')

        a.classList.remove('active')
        t.classList.add('active')
        gbs.play()
        return; // Hentikan perhitungan jika salah satu masukan kosong atau bukan angka
    } 
    const hasil = alas * tinggi * 1 / 2;
    const t = document.querySelector('.tinggi')
    const a = document.querySelector('.alas')
    
    t.classList.remove('active')
    a.classList.remove('active')

    document.querySelector('#hasilS').value = hasil;
    console.log('Luas Segitiganya adalah', hasil);
    const klikS = document.querySelector('#klik')
    const bnr = document.getElementById('bnr')
    bnr.play()
    klikS.play()
}

function hilang() {
    const t = document.querySelector('.tinggi')
    const a = document.querySelector('.alas')
    
    t.classList.remove('active')
    a.classList.remove('active')
}

function reset1() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilS').value = '';
    const t = document.querySelector('.tinggi')
    const a = document.querySelector('.alas')
    
    t.classList.remove('active')
    a.classList.remove('active')

    const klikS = document.querySelector('#klik')
    klikS.play()
}

document.addEventListener('DOMContentLoaded', function() {
    const btnHitung = document.getElementById('btn-hitung');
    btnHitung.addEventListener('click', hitung1);
    //document.addEventListener('DOMContentLoaded', function() { ... });: Ini adalah cara untuk menambahkan event listener untuk event DOMContentLoaded. Saat event DOMContentLoaded dipicu, fungsi yang diberikan sebagai argumen akan dijalankan.
    // function() { ... }: Ini adalah fungsi yang akan dijalankan ketika event DOMContentLoaded dipicu. Isi dari fungsi ini adalah kode JavaScript Anda yang ingin dijalankan setelah dokumen HTML dimuat sepenuhnya.
    // const alas = document.getElementById('alas');: Ini adalah contoh kode JavaScript di dalam fungsi yang dijalankan setelah DOMContentLoaded dipicu. Di sini, kita mencoba mendapatkan elemen dengan ID "alas" menggunakan document.getElementById('alas').
    // console.log(alas);: Ini mencetak elemen dengan ID "alas" ke konsol. Hal ini dilakukan untuk memeriksa apakah elemen tersebut berhasil ditemukan dan dapat diakses oleh JavaScript.
});
//********************************************segitiga end 


//********************************************persegi panjang start 
function hilang4() {
    let p = document.getElementById('panjang')
    let l = document.getElementById('lebar')

    p.classList.remove('active')
    l.classList.remove('active')
}

function hitung2() {
    const panjang = parseFloat(document.getElementById('panjang').value); //parseFloat gunanya untuk mengkonversi string menjadi angka float
    const lebar = parseFloat(document.getElementById('lebar').value);

    if (panjang === '' || isNaN(panjang) ) {
        const gbs = document.getElementById('gbs')
        const p = document.querySelector('.panjang')
        const l = document.querySelector('.lebar')

        p.classList.add('active')
        l.classList.remove('active')
        gbs.play()
        return; // Hentikan perhitungan jika salah satu masukan kosong atau bukan angka
    } else if (lebar === '' || isNaN(lebar) ) {
        const gbs = document.getElementById('gbs')
        const p = document.querySelector('.panjang')
        const l = document.querySelector('.lebar')

        p.classList.remove('active')
        l.classList.add('active')
        gbs.play()
        return; // Hentikan perhitungan jika salah satu masukan kosong atau bukan angka
    } 
    const hasil = panjang * lebar;
    const p = document.querySelector('.panjang')
    const l = document.querySelector('.lebar')

    p.classList.remove('active')
    l.classList.remove('active')

    document.querySelector('#hasilP').value = hasil;
    console.log('Luas Persegi Panjangnya adalah', hasil);
    const klikS = document.querySelector('#klik')
    const bnr = document.getElementById('bnr')
    bnr.play()
    klikS.play()
}

function reset2() {
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    document.getElementById('hasilP').value = '';
    const p = document.querySelector('.panjang')
    const l = document.querySelector('.lebar')
    
    p.classList.remove('active')
    l.classList.remove('active')

    const klikP = document.querySelector('#klik')
    klikP.play()
}

//********************************************persegi panjang end 

//********************************************Jajargenjang start 
function hilang5() {
    let a = document.getElementById('alasJ')
    let t = document.getElementById('tinggiJ')

    a.classList.remove('active')
    t.classList.remove('active')
}

function hitung3() {
    const alasJ = parseFloat(document.getElementById('alasJ').value); //parseFloat gunanya untuk mengkonversi string menjadi angka float
    const tinggiJ = parseFloat(document.getElementById('tinggiJ').value);

    if (alasJ === '' || isNaN(alasJ) ) {
        const gbs = document.getElementById('gbs')
        const a = document.querySelector('.alasJ')
        const t = document.querySelector('.tinggiJ')

        a.classList.add('active')
        t.classList.remove('active')
        gbs.play()
        return; // Hentikan perhitungan jika salah satu masukan kosong atau bukan angka
    } else if (tinggiJ === '' || isNaN(tinggiJ) ) {
        const gbs = document.getElementById('gbs')
        const a = document.querySelector('.alasJ')
        const t = document.querySelector('.tinggiJ')

        a.classList.remove('active')
        t.classList.add('active')
        gbs.play()
        return; // Hentikan perhitungan jika salah satu masukan kosong atau bukan angka
    } 
    const hasilJ = alasJ * tinggiJ;
    const a = document.querySelector('.alasJ')
    const t = document.querySelector('.tinggiJ')

    a.classList.remove('active')
    t.classList.remove('active')

    document.querySelector('#hasilJ').value = hasilJ;
    console.log('Luas Jajargenjangnya adalah', hasilJ);
    const klikS = document.querySelector('#klik')
    const bnr = document.getElementById('bnr')
    bnr.play()
    klikS.play()
}

function reset3() {
    document.getElementById('alasJ').value = '';
    document.getElementById('tinggiJ').value = '';
    document.getElementById('hasilJ').value = '';
    const a = document.querySelector('.alasJ')
    const t = document.querySelector('.tinggiJ')
    
    a.classList.remove('active')
    t.classList.remove('active')

    const klikJ = document.querySelector('#klik')
    klikJ.play()
}
//********************************************Jajargenjang end 