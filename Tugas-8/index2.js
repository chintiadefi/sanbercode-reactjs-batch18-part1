var readBooksPromise = require("./promise")
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function execute (time, indeks, booksQueue) {
    readBooksPromise (time, books[indeks]).then(function (waktuTersisa) {
        time = waktuTersisa;
        booksQueue = booksQueue - 1;
        if (booksQueue > 0) {
            execute (time, indeks+=1, booksQueue)       
        }
    }
    )
}

execute(7000, 0, books.length);