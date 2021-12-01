let list = "19 798 753 40 1028 1023 1149 1269 764 749 53 1056 256 240 1167 167 518 81 258 183 881 601 288 116 544 395 502 197 257 247 1190 867 417 1077 573 1253 799 65 692 1085 137 384 88 753";
let a = [];
a = list.split(' ');
let b = [];
for (let i = 0; i <= a.length; i++) {
    b.push(Number(a[i]));
}

function loopSum(c, d) {
    let sum = 0;
    for (let j = 0; j < c; j++) {
        sum += d[j];
    }
    return sum;
}

console.log(loopSum(44, b));