// soal 1

class Animal {
    constructor(name, legs = 4, cold_blooded = false) {
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded;
    }
    get mamal() {
        return this.name;
    }
}
    class Ape extends Animal {
        constructor (name, legs = 2, cold_blooded) {
            super (name, cold_blooded);
            this.legs = legs
        }
        yell() {
            return "Auooo"
        }
    }

    class Frog extends Animal {
        constructor (name, legs, cold_blooded) {
            super (name, legs, cold_blooded);
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