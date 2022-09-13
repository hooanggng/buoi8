let n = 135
while (n !==0) {
    let i = n % 10;
    n = Math.floor(n/10);
    if (i % 2 !== 1){
        console.log("NO");
        break
    }
}
if (n == 0){
console.log("Yes");
}