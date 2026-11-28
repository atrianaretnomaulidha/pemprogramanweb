// Indikator bahwa file JS berhasil dimuat
console.log("Javascript Poliban DigiCraft Studio siap digunakan.");


/* A. LOGIKA UNTUK HALAMAN PRODUK (produk.html)*/

// 1. Fungsi Konfirmasi Pemesanan Paket Layanan 
function pesanpaket(namapaket, harga) {
    let konfirmasi = confirm(
        "Anda memilih paket: " + namapaket + " (" + harga + ")\n" +
        "Apakah Anda ingin melanjutkan ke hlaman formulir kontak?"
    );

    if (konfirmasi) {
        // Redirect ke halama kontak jika pengguna menyetujui
        window.location.href = "kontak.html";
    }
}

// 2. Fungsi Simulassi Hitung Estimasi Biaya
function hitungEstimasi() {
    let paketSelect = document.getElementById("pilihan-paket");
    let addonSelect = document.getElementById("layanan-tambahan");
    let hasilText = document.getElementById("hasil-estimasi");

    // Validasi pemilihan paket dasar
    if (!paketSelect.value) {
        alert("Peringatan: Silahkan pilih salah satu paket layanan terlebih dahulu!");
        return;
    }

    let hargaDasar = parseInt(paketSelect.value);
    let biayaTambahan = parseInt(addonSelect.value);
    let total = hargaDasar + biayaTambahan;

    // Tampilkan hasil ke DOM dengan format Rupiah
    hasilText.innerText = "Rp " + total.toLocaleString("id-ID");
    hasilText.style.color = "#008080"; // Aksen warna Teal Poliban
}


/* B. LOGIKA UNTUK HALAMAN KONTAK (kontak.html) - DYNAMIC FORM INPUT */

// Hitungan indeks untuk penomoran field dinamis
let jumlahLink = 1;

// Fungsi Menambah Inputan Link Referensi Baru
function tambahInputLink() {
    jumlahLink++;

    // 1. Ambil elemen wadah penampung 
    let container = document.getElementById("wadah-referensi");

    // 2. Buat elemen baris wrapper baru (<div>)
    let divBaru = document.createElement("div");
    divBaru.className = "dynamic-input-row";
    divBaru.id = "referensi-row-" + jumlahLink;

    // 3. Masukkan template HTML untuk inputan baru beserta tombol hapus
    divBaru.innerHTML = `
    <input type="url" name="referensi_Link[]" placeholder="https://contoh-website-acuan-$ (jumlahLink).com" class="input-dynamic">
    <button type="button" classs="btn-hapus" onclick="hapusInputLink(`${ divBaru.id } `) ">/button>
    `;

    // 4. Sisipkan elemen baru ke dalam container DOM
    container.appendChild(divBaru);

    console.log("Input link referensi ke-" + jumlahLink + " berhasil ditambahkan.");
}

// Fungsi Menghapus Baris Inputan Tertentu
function hapusInputLink(rowld) {
    let barisTarget = document.getElementById(rowld);
    if (barisTarget) {
        barisTarget.remove();
        console.log("Elemen " + rowld + " berhasil dihapus.");
    }
}