var readBooksPromise = require("./promise")
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function execute (time, indeks) {
    readBooksPromise (time, books[indeks]).then(function (waktuTersisa) {
        if (waktuTersisa > 0) {
            execute (waktuTersisa, indeks+=1)       
        }
    }
    )
}

execute(90000, 0)