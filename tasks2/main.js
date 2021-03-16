/* 1. */

var title="Smartacademy"
for(var i=title.length; i>=0; i--){
    console.log('index', title[i])
}

/* 2 */

var numbers = '123456789' 
for(var i=0; i<numbers.length; i++){
    console.log('index', numbers[i]**numbers[i])
}


/* 3 */
let startingnum = "123456789"
var numbers = startingnum.split``.map(x=>+x);

for(j=0; j <= numbers.length-1; j++) {
    for(g=1; g <= numbers.length; g++){

     console.log(Math.pow(numbers[j],g))
    }
}
