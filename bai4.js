let MinX = [
    ["Vũ Tuấn Long","20 tuổi", 5000000, "Nhân viên"],
    [ "Đồng Hoài Bắc", "21 tuổi", 5500000, "Trưởng nhóm"],
    ["Nguyễn Đức Thắng", "22 tuổi", 8000000, "Phó phòng"],
]
// read
for (let i = 0; i < MinX.length; i++) {
    console.log(MinX[i])
}
// create
let MinX = [
    ["Vũ Tuấn Long","20 tuổi", 5000000, "Nhân viên"],
    [ "Đồng Hoài Bắc", "21 tuổi", 5500000, "Trưởng nhóm"],
    ["Nguyễn Đức Thắng", "22 tuổi", 8000000, "Phó phòng"],
]

let a = []

while (true) {
    let name = prompt("Nhập Tên")
    a.push(name)
    let old = prompt("Nhập tuổi")
    a.push(old)
    let salary = parseInt(prompt("Nhập tiền lương"))
    a.push(salary)
    let LV = prompt ("Nhập chức vụ")
    a.push(LV)

    MinX.push(a)
    
    if (name = '-1') {
        break
    }
}
console.log(MinX)
// update
MinX[1][2] = 6000000

console.log(MinX)
// dalate
MinX.pop(MinX[1])

console.log(MinX)