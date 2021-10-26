let a = []

while (true) {
    let n = prompt()
    if (n == -1) {
        break
    }
    a.push(n)
}
for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a.length; k++) {
        if ((a[i] == a[k])&&(i != k)) {
            a.pop(a[k])
        }
    }
}
console.log(a)