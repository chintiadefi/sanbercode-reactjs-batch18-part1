// soal 1

function halo() {
return "Halo Sanbers!" 
}

console.log(halo())

// soal 2

function kalikan(num1, num2) {
return num1 * num2
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

// soal 3

function introduce() {
    return"Nama saya " + name + ", umur saya " + age +" tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!"
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {}
objDaftarPeserta.nama = arrayDaftarPeserta[0]
objDaftarPeserta["jenis kelamin"] = arrayDaftarPeserta[1]
objDaftarPeserta.hobi = arrayDaftarPeserta[2]
objDaftarPeserta["tahun lahir"] = arrayDaftarPeserta[3]

// soal 5

var dataBuah = [
    {nama : "strawberry", warna : "merah", "ada bijinya" : "tidak", harga : 9000},
    {nama : "jeruk", warna : "oranye", "ada bijinya" : "ada", harga : 8000},
    {nama : "Semangka", warna : "Hijau & Merah", "ada bijinya" : "ada", harga : 10000},
    {nama : "Pisang", warna : "kuning", "ada bijinya" : "tidak", harga : 5000}
]

console.log (dataBuah[0])

// soal 6

var dataFilm = []

function inputData(nama, durasi, genre, tahun) {
    dataFilm.push ({nama, durasi, genre, tahun})
}

inputData("Nanti Kita Cerita Tentang Hari Ini", "60 menit", "Romance", 2019)
console.log(dataFilm)



