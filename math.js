function suma(a, b){
    return a + b;
}

module.exports = {
    suma: function (a, b) {
        return a+b;
    },
    resta: function (a, b){
        return a-b;
    },
    division: function (a, b){
        return a / b;
    },
    multiplicacion: function (a, b){
        return a * b;
    },
    par: function (a){
        if(a % 2 == 0){
            return true;
        }else {
            return false;
        }
    },
    elevado: function(a, b){
        return a ** b;
    }
}