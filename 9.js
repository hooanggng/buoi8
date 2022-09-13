let n = 123454321;
n = n.toString();
let reverseNum = n.split("").reverse().join("");

let flag = false;
if (reverseNum === n){
    flag = true;
}

if (flag == true){
    console.log("YES");
}else{
    console.log("No");
}