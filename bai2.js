let n = prompt()

let m = n.split(" ")

let result = ''

for (let i = 0; i < m.length; i++) {
    let a = m[i][0].toUpperCase()
    result = result + a
    for (let k = 1; k < m[i].length; k ++) {
        result = result + m[i][k]
    }
}
console.log(result)