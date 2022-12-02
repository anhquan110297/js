const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 4,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];
/**
 * forEach, every, some, filter, find, map, reduce
 * every return ve boolean neu nhu 1 phan tu thoa man dieu kien, some return ve boolean khi tat ca cac phan tu thoa man dieu kien
 * filter return ve array chua cac phan tu thoa man dieu khien
 * find return ve 1 phan tu thoa man dieu kien
 * map don thua`n la` lap qua
 * reduce se co' value khoi tao expect output mong doi.
 * 
 * 
 * Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? 
 * (biết điểm trung bình là 5)

Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
Lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa

Tìm 1 sinh viên xếp loại giỏi

Cộng cho mỗi sinh viên 1 điểm toán

Tính tổng điểm toán của các sinh viên, và tính điểm toán trung bình của các sinh viên
 */




// Tính tổng điểm toán của các sinh viên, và tính điểm toán trung bình của các sinh viên
const totalMathScore = students.reduce((storesVar,value) =>
    storesVar + value.toan
,0);
const avgMathScore = totalMathScore / students.length;
console.log(avgMathScore);

//Cộng cho mỗi sinh viên 1 điểm toán
var newStutdents = students.map( student =>{
    return {
        ...student,
        toan : student.toan < 10 ? student.toan + 1 : student.toan
    }
});
console.log(newStudents);
// 3. Lọc ra các sinh viên xếp loại giỏi
var listGoodStudents = students.filter(function (student) {
    return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
});
console.log(listGoodStudents);

// let temp = students.forEach( student => student.toan++);
// console.log(temp); // log ra undefined
console.log(students); // thuoc tinh diem toan van thay doi

//Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
let isGood = students.some((student) => {
    return student.toan > 8 && student.ly > 8 && student.hoa > 8
});
console.log(isGood);


// Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? 
let isNormal = students.every((student) => {
    return student.toan > 5 && student.ly > 5 && student.hoa > 5
});
console.log(isNormal);

//Tìm 1 sinh viên xếp loại giỏi
let goodStudent = students.find((student) => {
    return student.toan > 8 && student.ly > 8 && student.hoa > 8
});
console.log(goodStudent);