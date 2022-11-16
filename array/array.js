// ## Cho mảng các số từ 1 đến 10 như sau:

// ```js
var arrNumber = [1, 2, 10, 4, 5, 6, 7, 8, 9, 3];
// ```

// 1. in mảng theo thứ tự tăng dần
// var increaseArray = arrNumber.sort((a,b) => a-b)
// console.log(increaseArray);
// increaseArray.forEach(element => {
//     console.log(element);
// })
// 2. in mảng theo thứ tự giảm dần
// var decreaseArray = arrNumber.sort((a,b) => b-a)
// console.log(decreaseArray);
// decreaseArray.forEach(element => {
//     console.log(element);
// })
// 3. Xóa phần tử cuối cùng của mảng
arrNumber.pop();
console.log(arrNumber);
// 4. Xóa phần tử đầu tiên của mảng
// arrNumber.shift();
console.log(arrNumber);
// 5. Thêm phần tử 0 vào cuối mảng
arrNumber.push(0);
console.log(arrNumber);
// 6. Thêm phần tử 0 vào đầu mảng
arrNumber.unshift(0);
console.log(arrNumber);
// 7. Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới
arrNumber.slice(0,5);
// 8. Chèn thêm số 100 vào vị trí thứ 5 của mảng
arrNumber.splice(4,1,100);
console.log(arrNumber);
// 9. Thay thế phần tử thứ 5 bằng số 100
arrNumber[4] = 100;
console.log(arrNumber[4]);
// 10. copy từ mảng arrNumber thành 1 mảng mới từ vị trí 5 đến hết
var newArr = arrNumber.slice(5, arrNumber.length-1);
console.log(newArr);
// 11. copy từ mảng arrNumber thành 1 mảng mới từ vị trí đầu tiên đến vị trí thứ 5
var newArr2 = arrNumber.slice(0, 4);
// 12. Cho mảng sau:
// ```js
var arrNumber2 = [11, 22, 33, 44, 55];
// ```
// - Nối mảng arrNumber2 vào mảng arrNumber
arrNumber2.concat(arrNumber);
console.log(arrNumber2);