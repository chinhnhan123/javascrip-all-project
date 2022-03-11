let students = [
    {fullname: 'a', age: 11, gender: 1 },
    {fullname: 'b', age: 12, gender: 0 },
    {fullname: 'c', age: 13, gender: 0 },
    {fullname: 'd', age: 14, gender: 0 },
    {fullname: 'd', age: 15, gender: 0 },
    {fullname: 'g', age: 16, gender: 1 },
    {fullname: 'y', age: 17, gender: 1 },
    {fullname: 'h', age: 18, gender: 1 },
    ];

    // my foreach2 function
// Array.prototype.forEach2 = function(callback) {
// for (var index in this) {
//     if (this.hasOwnProperty( index)) {
//         callback(this[index], index, this);
//     }
// }
// }


// students.forEach2(function(course,index,array){
//    console.log(course,index);
// })

// my  filter2 function
Array.prototype.filter2 = function(callback) {
    var output = [];

for (var index in this) {
    if (this.hasOwnProperty( index)) {
        var result =  callback(this[index], index, this);
        if (result){
            output.push(this[index]);
        }
    }  
}
return output;
}

var newstudents = students.filter2(function(course,index){
     return course.age > 15;
})
console.log(newstudents);