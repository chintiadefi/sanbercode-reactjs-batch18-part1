// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var newKataKedua = ((kataKedua.charAt(0).toUpperCase()).concat(kataKedua.substr(1)));

console.log(kataPertama.concat(" " + newKataKedua.concat(" " + kataKetiga).concat(" " + (kataKeempat.toUpperCase()))));

// soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var number = (Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat));
console.log (number);

// soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua= kalimat.substr(4, 10); 
var kataKetiga= kalimat.substr(15, 3); 
var kataKeempat= kalimat.substr(19, 5); 
var kataKelima= kalimat.substr(25, 6); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4

var nilai = 72;

if (nilai >= 80) {
    console.log ("Nilai A")
} else if (nilai >= 70 && nilai < 80) {
    console.log ("Nilai B")
} else if (nilai >= 60 && nilai < 70) {
    console.log ("Nilai C")
} else if (nilai >= 50 && nilai < 60) {
    console.log ("Nilai D")
} else {
    console.log ("Nilai E")
};

// soal 5

var tanggal = 1;
var bulan = 1;
var tahun = 1998;

switch (bulan) {
    case 1 : {var bulan = "Januari"; break;}
    case 2 : {var bulan = "Februari"; break;}
    case 3 : {var bulan = "Maret"; break;}
    case 4 : {var bulan = "April"; break;}
    case 5 : {var bulan = "Mei"; break;}
    case 6 : {var bulan = "Juni"; break;}
    case 7 : {var bulan = "Juli"; break;}
    case 8 : {var bulan = "Agustus"; break;}
    case 9 : {var bulan = "September"; break;}
    case 10 : {var bulan = "Oktober"; break;}
    case 11 : {var bulan = "November"; break;}
    case 12 : {var bulan = "Desember"; break;}
    default : {var bulan = "No match";}
}

console.log((String (tanggal)).concat(" " + bulan).concat(" "+(String (tahun))));