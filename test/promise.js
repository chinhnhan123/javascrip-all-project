// const sumCal = (num1, num2, cb) => {
//     if((num1 + num2) % 2 == 0)
//         return cb({error: false, message:'even'});
//     return cb({error: true, message:'0dd'});    
//   }
  
//   sumCal(1,2, sum  => {
//     if(sum.error){
//       console.log("loi")
//       console.log(sum)
//     }else{
//       console.log("dung")
//       console.log(sum)
//     }
  
//   })

const someArr = [1,2,3,4,5,6,7,];
// const myMap = (arr, cb ) => {
//     let newArr = [];
//     for (const index in arr) {
//        newArr.push(cb(arr[index] ) +1 );
//     }
//     return newArr
// }

// let newArrWithMap = myMap(someArr, x => x * 2);
// console.log(newArrWithMap);

const myFilter = (arr, cb ) => {
    let newArr = [];
    for (const index in arr) {
        if(cb(arr[index])){
       newArr.push(arr[index] );
        }
    }
    return newArr
}

let newArrWithMyFilter = myFilter(someArr, x => x >= 4 );
console.log(newArrWithMyFilter);