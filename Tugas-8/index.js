var readBooks = require('./callback')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]


function execute (time, indeks) {
    readBooks (time, books[indeks], function(waktuTersisa) {
        if (waktuTersisa > 0) {
            execute (waktuTersisa , indeks+=1)
        }
    })
    }

execute(10000, 0);