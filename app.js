'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fibonacci(n) {
    if(memo.has(n)) {
        return memo.get(n);
    } else {
        const value = fibonacci(n-1) + fibonacci(n-2);
        memo.set(n, value);
        return value;
    }
}

const length = process.argv[2] || 0;
for (let i = 0; i <= length; i++) {
    console.log(`${i+1} 項目は ${fibonacci(i)}`);
}


//fibonacci関数のテスト
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));