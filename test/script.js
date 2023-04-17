let isPrime = a => {
    if(isNaN(a)) return false;
    if( a < 2) return false;
    if (a === 2) return true;
    for (let i = 2; i < a; i++) {
        if(a % i === 0) return false;
    }
    return true;
}
for(let i = 0; i < 10; i++) {
    if(isPrime(i)) console.log(i);
}