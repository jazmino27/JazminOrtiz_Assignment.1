


for (var i = 1; i<100; i++) {
    var x = i % 3 == 0;
    var y = i % 5 == 0;

    if (i % 3 && i%5) {
        console.log('FizzBuzz');
    }
    else if (i % 3) {
        console.log('Fizz')
    }

    else if (i % 5) {
        console.log('Buzz');
    }
}



