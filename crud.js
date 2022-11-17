let students = [
    {
        id: 1,
        name: "Dinh",
        diachi: "hue"
    },
    {
        id: 2,
        name: "Nam",
        diachi: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        diachi: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        diachi: "hue"
    },
    {
        id: 5,
        name: "Tri",
        diachi: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        diachi: "hue"
    },
    {
        id: 7,
        name: "Binh",
        diachi: "da nang"
    }
];

// pop, shift, push, unshift, splice, concat, slice;
// Create
let studentName = prompt("please input student's name");
let studentAddress = prompt("please input student's address");

if (students.length == 0){
    students.push({
        id : 1,
        name : studentName,
        diachi : studentAddress
    });
} else {
    students.push({
        id : (students[students.length-1].id + 1),
        name : studentName,
        diachi : studentAddress
    })
}
console.log(students);


// edit
// gia su o day e chi cho edit name thoi
let tempArray = [];
students.forEach(student => tempArray.push(student.id));
console.log(tempArray);
let studentIdEdit = parseInt(prompt("please input student id for edit"));
console.log(studentIdEdit);
if (isNaN(studentIdEdit)){
    alert("please input a number test");
};
if (!tempArray.includes(studentIdEdit)){
    alert("don't have student have id " + studentIdEdit);
}
for (let i = 0; i < students.length ; i++){
    if (students[i].id == studentIdEdit ){
        students[i].name = prompt("please input student's name");
    }
};
console.log(students);

let studentIdDelete = parseInt(prompt("please input student's id for delete"));
console.log(students);
if (!tempArray.includes(studentIdDelete)){
    alert("on't have student have id " + studentIdDelete);
} else {
    students.forEach((student, index) => {
        if (student.id == studentIdDelete){
            students.splice(index, 1)
            return;
        }
    });
}

console.log(students);

// tim 1 sinh vien 

let studentIdSearch = parseInt(prompt("please input student id for search"));

if (!tempArray.includes(studentIdSearch)){
    alert("don't have student have id " + studentIdSearch);
} else {
    students.forEach((student) => {
        if (student.id == studentIdDelete){
            console.log(student);
            return;
        }
    });
}

