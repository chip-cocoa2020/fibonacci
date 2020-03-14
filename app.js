'use strict';

function fibonacci(n){
    if(n === 0){
        return 0;
    } else if(n === 1){
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(`${i+1} 項目は ${fibonacci(i)}`);
}


//fibonacci関数のテスト
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));