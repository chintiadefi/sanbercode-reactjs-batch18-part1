// soal 1

const luasLingkaran = (jari2) => {
    let phi = ((jari2%7) === 0) ? 22/7 : 3.14
    return phi * (jari2 * jari2)
}

const kllLingkaran = (jari2) => {
    let phi = ((jari2%7) === 0) ? 22/7 : 3.14
    return 2 * phi * jari2
}

console.log(luasLingkaran(7))
console.log(kllLingkaran(7))

// soal 2

let kalimat = ""

const tambahKalimat = (kata) => {
  const kalimat = {kalimat} + kata
}

console.log(tambahKalimat("ayam"))


// soal 3

const newFunction = function literal(firstName, lastName){
  return {
    fullName: function(){
      console.log(`${firstName} ${lastName}`)
      return 
    }
  }
}
 
newFunction("William", "Imoh").fullName() 

// soal 4

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject
console.log(newObject)

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west, ...east]
console.log(combined)