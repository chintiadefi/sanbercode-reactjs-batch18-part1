// soal 1

class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }
    get name() {
        return this._name;
    }
    get legs() {
        return this._legs;
    }
    set legs(amount) {
        this._legs = amount
    }
    get cold_blooded() {
        return this._cold_blooded
    }
}
    class Ape extends Animal {
        constructor (name, amount) {
            super (name);
            this._legs = amount
        }
        yell() {
            return "Auooo"
        }
    }

    class Frog extends Animal {
        constructor (name) {
            super (name);
        }
        jump() {
            return "hop hop"
        }
    }

var sheep = new Animal("shaun");
var sungokong = new Ape("kera sakti")
var kodok = new Frog("buduk")
 
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);
console.log(sungokong.yell())
console.log(kodok.jump())

// soal 2

class Clock {
    constructor ({template}, timer) {
        this._template = template;
        this._timer = timer
    }
  
    render = () => {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this._template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this._timer);
    };
  
    start() {
      this.render();
      this._timer = setInterval(() => this.render(), 1000)
    };
  
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 