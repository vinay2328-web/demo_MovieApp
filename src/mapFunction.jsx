/*
    The map() method creates a new array with the result of calling a function of every array element
    The map() method calls the provided function once for each element in an array, in order.

    Syntax:
    array.map(function(currentValue, index, arr), thisvalue)

    Argument                        Description
    currentValue                    Required. The value of the current element
    index optional                  The array index of the current element
    arr optional                    The array object the current element belongs to.
*/

const oldArr = ['Vinay', 'Kuhoo', 'Pallavi'];

const newArr = oldArr.map(function(cvalue, ind, arr){
    return ind + ":" + cvalue + " " + "new Array " + " " + arr;
});

// console.log(newArr);

const Students = [
    {name: "Vinay", age: 28, experience: 10, degree: "MCA"},
    {name: "Pallavi", age: 26, experience: 5, degree: "BCA"},
    {name: "Kuhoo", age: 18, experience: 1, degree: "CS"}
];

const stdList = Students.map((cval, idx, arr) => {
    return `${idx}: My name is ${cval.name} and my heighest degree is ${cval.degree} and I have ${cval.experience} yrs exp.`;
});

console.log(stdList);

// console.log(oldArr);

export default oldArr;