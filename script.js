var data = [
    "Minyak 2Liter",
    "Beras ",
    "Garam",
    "Kecap"
];


function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nama Produk</th><th>Harga</th><th>Jumlah</th><th>Keterangan</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + "-" + "<td>" +  "-" + "<td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

function tambah() {
    var input = document.querySelector("input[name=produk]");
    data.push(input.value);
    tampil();
    input.value = "";
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();
