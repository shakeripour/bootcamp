function session05() {
    // for loop
    console.log('for loop');
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }

    console.log('while loop');
    // while loop
    let j = 0;
    while (j == 5) {
        console.log(`j is: ${j}`);
        j++;
    }

    console.log('do...while loop');
    
    // // do...while loop
    let k = 0;
    do {
        console.log(`k is: ${k}`);
        k++;
    } while (5 == k);

}
session05();