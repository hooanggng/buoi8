let n = 10;

for (let i = 0; i <= n; i++) {
    let flag = true;
    if (i < 2) {
        flag = false;
    }
    for (let index = 2; index <= Math.sqrt(i); index++) {
        if (i % index === 0) {
            flag = false;
            break;
        }
        else flag = true;
    }
    if (flag == true) {
        console.log(i);
    } 
}