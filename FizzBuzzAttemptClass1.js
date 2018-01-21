


for (var i = 1; i<100; i++) {
    var x = i % 3 == 0;
    var y = i % 5 == 0;

    console.log(i, x, y);

    if (x && y) {
        console.log(i, 'FizzBuzz');
    }
    else if (x) {
        console.log(i, 'Fizz')
    }
    else if (y) {
        console.log(i, 'Buzz');
    }
}



