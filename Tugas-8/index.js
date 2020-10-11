var readBooks = require('./callback')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]


function execute (time, indeks, booksQueue) {
    readBooks (time, books[indeks], function(waktuTersisa) {
        time = waktuTersisa;
        booksQueue = booksQueue - 1;
        if (booksQueue > 0) {
            execute (time, indeks+=1, booksQueue)
        }
    })
    }

execute(10000, 0, books.length);