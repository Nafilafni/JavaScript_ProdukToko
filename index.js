const readline = require("readline");

let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menampilkan produk
function tampilkanProduk() {
    console.log("\n=== DAFTAR PRODUK ===");

    produkToko.forEach(function(produk, index) {
        console.log(
            (index + 1) + ". " +
            produk.nama +
            " | Harga: Rp" + produk.harga +
            " | Stok: " + produk.stok
        );
    });
}

// Fungsi untuk menambahkan produk
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length + 1;

    produkToko.push({
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    });

    console.log("\nProduk berhasil ditambahkan!");
}

// Fungsi untuk menghapus produk
function hapusProduk(id) {
    let jumlahAwal = produkToko.length;

    produkToko = produkToko.filter(function(produk) {
        return produk.id !== id;
    });

    if (produkToko.length < jumlahAwal) {
        console.log("\nProduk berhasil dihapus!");
    } else {
        console.log("\nProduk dengan ID tersebut tidak ditemukan!");
    }
}

// Menu utama
function menu() {
    console.log("\n=== MANAJEMEN PRODUK TOKO ===");
    console.log("1. Tampilkan Produk");
    console.log("2. Tambah Produk");
    console.log("3. Hapus Produk");
    console.log("4. Keluar");

    rl.question("\nPilih menu: ", function(pilihan) {

        if (pilihan === "1") {
            tampilkanProduk();
            menu();

        } else if (pilihan === "2") {
            rl.question("Masukkan nama produk: ", function(nama) {
                rl.question("Masukkan harga produk: ", function(harga) {
                    rl.question("Masukkan stok produk: ", function(stok) {

                        tambahProduk(
                            nama,
                            Number(harga),
                            Number(stok)
                        );

                        menu();
                    });
                });
            });

        } else if (pilihan === "3") {
            rl.question("Masukkan ID produk yang ingin dihapus: ", function(id) {

                hapusProduk(Number(id));

                menu();
            });

        } else if (pilihan === "4") {
            console.log("\nProgram selesai.");
            rl.close();

        } else {
            console.log("\nPilihan tidak tersedia!");
            menu();
        }
    });
}

// Menjalankan program
menu();