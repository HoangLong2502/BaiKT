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
MinX.push(["Khổng Văn Hiếu", "19 tuổi", 4000000,"Nhân viên"])

console.log(MinX)
// update
MinX[1][2] = 6000000

console.log(MinX)
// dalate
MinX.pop(MinX[1])

console.log(MinX)