let year = parseInt(prompt("Nhap nam"))
let month = parseInt(prompt("Nhap thang"))
let day = parseInt(prompt("Nhap ngay"))

let value = true

if (month == 1 || month == 3 || month == 5||month == 7||month == 8||month == 10||month == 12) {
    if (day > 31) {
        value = false
    }
}
else if (month == 4|| month == 6|| month == 9||month ==11) {
    if (day >30) {
        value = false
    }
}
else if (month ==2) {
    if (((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) && (day > 29)) {
        value = false
    }
    else if (year % 4 != 0 && day > 28) {
        value = false
    }
}
if (value == false) {
    console.log("ngay:" +day+"/"+month+"/"+year+ "la ngay khong hop le")
}
else {
    console.log("ngay:" +day+"/"+month+"/"+year+ "la ngay hop le")
}
if (value == true) {
    if (month == 1 || month == 3 || month == 5||month == 7||month == 8||month == 10) {
        if (month = a[x] && month != 12 && day == 31) {
            day = 1
            month ++
        }
        else {
            day ++
        }
    }
    else if (month == 4|| month == 6|| month == 9||month ==11) {
        if (month = [y] && day == 30) {
            day = 1
            month ++
        }
        else {
            day ++
        }
    }
    else if (month == 12) {
        if (day == 31) {
            day = 1
            month = 1
            year ++
        }
        else {
            day ++
        }
    }
    else if (month == 2) {
        if ((year % 4 == 0 && year % 100 != 0)||(year % 400 == 0)) {
            if (day == 29) {
                day= 1
                month ++
            }
            else {
                day ++
            }
        }
        else {
            if (day == 28) {
                day = 1
                month ++
            }
            else {
                day ++
            }
        }
    }
}
console.log("ngay tiep theo la:"+day+"/"+month+"/"+year)