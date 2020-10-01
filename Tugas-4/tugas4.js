// soal 1

console.log('LOOPING PERTAMA');
var deret1 = 2;
while (deret1 <= 20) {
    console.log (deret1 + ' - I love coding')
    deret1 += 2;
}
console.log('LOOPING KEDUA');
var deret2 = 20;
while (deret2 >= 2) {
    console.log (deret2 + ' - I will become a frontend developer')
    deret2 -= 2;
}

// soal 2

for (var angka = 1 ; angka <= 20 ; angka++) {
    if (((angka % 3) === 0) && ((angka % 2) !== 0)) {
        console.log('I Love Coding')
    } else if ((angka % 2) !== 0) {
        console.log('Santai')
    } else {
        console.log('Berkualitas')
    }}

// soal 3

for (var vertikal = 1 ; vertikal <= 7 ; vertikal++) {
    var hastag = '';
    for (var horizontal = vertikal ; horizontal >= 1 ; horizontal--) {
        hastag+='#';
}
console.log(hastag);
}


// soal 4

var kalimat="saya sangat senang belajar javascript"
console.log(kalimat.split(' '));

// soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urut = daftarBuah.sort();

for (var angka = 0; angka <= 4 ; angka++){
    console.log (urut[(angka)])
}