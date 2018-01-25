for (var i = 1; i <= 100; i++) {
    var output = "";

   // if (i % 3 && i % 5) {
      //  console.log('FizzBuzz');
     //   console.log(i);

     //   if (x && y) {
      //      console.log(i, 'FizzBuzz');
       // }

        if (i % 3 === 0) {
            output += 'Fizz';
        }

     //   else if (x) {
        //    console.log(i, 'Fizz')
     //   }

        else if (i % 5 === 0) {
            output += "Buzz";
        }

        if (i % 3 === 0 && i % 5 === 0) {
            output += "buzz";
        }

    //    else if (y) {
    //        console.log(i, 'Buzz');
    //    }

    console.log(output || i);

}
