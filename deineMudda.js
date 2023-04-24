let obj = {
    name: 'deineMudda',
    age: 42,

    // Methoden
    sayName: function() {
        console.log(this.name);
    },

    sayxy: function(obj2) {
        return obj2.hand;
    }
}

let liste = [ 1, 2, 3, 'a', "a" ];
console.log(liste.map(x => ++x));