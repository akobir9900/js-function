/*
//funksiyani parametrsiz e'lon qilish
function functionName() {
  console.log("function run");
}
functionName(); // funksiyani nomi va qavslar bilan chaqirish

function square() {
  let num = 8;
  let sq = num * num;
  console.log(sq);
}
square();

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(2));

// functionName(parm1, parm2) // funksiyani chaqirish paytida ikkita argument berish kerak
// // Parametrsiz funktsiya kiritilmaydi, shuning uchun ruxsat beramiz parametrlari bilan
// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo
//   console.log(sum)
// }
// sumTwoNumbers(10, 20) // funksiyalarni chaqirish

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5, 6];
//funktsiyani chaqirish
console.log(sumArrayValues(numbers))


// const areaOfCircle = (radius) => {
//     let area = Math.PI * radius * radius;
//     return area;
//   }
// console.log(areaOfCircle(10))
*/

console.log('%s Wolrd !!!', 'Hello')
console.log('%d place', 32)
console.log('%c Hello!', 'color:red; background-color:yellow')
console.warn('ogohlantirish')
console.error('xatolik')
console.table(['java', 'javascript', 'python', 'php', 'c++', 'c#', 23, true, 23.5])

const countries = [['Russian', 'Moscow', ['Sankt-Peterburg']], ['Uzbekistan', 'Tashkent'], ['USA', 'Vashington']];
// console.log(countries.length)
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.table(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')