////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// Array Methods ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////// No./1 findIndex()  /////////////////////////////////////////////////////
// let arr = [1, 2, 3, 10, 5, 6, 7, 8, 9]
// let index = 0
// function x(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       index = i
//       break
//     }
//   }
//   return index
// }
// let findIndex_my = x(arr, (element) => {
//   return element > 4
// })
// console.log(findIndex_my);

////////////////////////////////////////////// No./2 find()  /////////////////////////////////////////////////////
// let arr2 = [
//   {
//     name: "name1",
//     age: 14,
//     region: "qayergadir1"
//   }, {
//     name: "name2",
//     age: 25,
//     region: "qayergadir2"
//   }, {
//     name: "name3",
//     age: 92,
//     region: "qayergadir3"
//   }
// ]
// function y(arr, func) {
//   let a = ''
//   for (let i of arr) {
//     if (func(i)) {
//       a = i;
//     }
//   }
//   return a
// }
// let find_my = y(arr2, (obj) => obj.age === 14)
// console.log(find_my);

////////////////////////////////////////////// No./3 includes()  /////////////////////////////////////////////////////
// let arr3 = [156, 43, 4, 3, 'odilbek', 24567, 'salom',]
// function z(arr, func) {
//   let b = false
//   for (const i of arr) {
//     if(func(i)){
//       b = true
//     }
//   }
//   return b
// }
// let includes_my = z(arr3,(item)=> item == "odilbek")
// console.log(includes_my);

////////////////////////////////////////////// No.4/ forEach()  /////////////////////////////////////////////////////
// let arr10 = [
//   {
//     index: 0,
//     id: 1,
//   }, {
//     index: 1,
//     id: 2,
//   }, {
//     index: 2,
//     id: 3,
//   }, {
//     index: 3,
//     id: 4,
//   }, {
//     index: 4,
//     id: 5,
//   }, {
//     index: 5,
//     id: 6,
//   },
// ]

// let c = ''

// arr10.forEach((item,index)=> {
// if(item.index > 3) {
//   c = item.index
// }
// })
// console.log(c);

////////////////////////////////////////////// No.5/ split()  /////////////////////////////////////////////////////
// let str = '1,2,3,4,5,6,7,8,9'
// let arr5 = []
// function w(arr) {
//   return arr5 = [str]
// }
// let split_my = w(str)
// console.log(split_my);

////////////////////////////////////////////// No.6/ join()  /////////////////////////////////////////////////////
// let arr6 = ['salom', 'hayr']
// let str2 = ''
// function q(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     str2 += arr[i] + '\n'
//   }
//   return str2
// }
// let join_my = q(arr6)
// console.log(join_my);

////////////////////////////////////////////// No.7/ filter()  /////////////////////////////////////////////////////
// let arr7 = [
//   {
//     index: 0,
//     id: 1,
//   }, {
//     index: 1,
//     id: 2,
//   }, {
//     index: 2,
//     id: 3,
//   }, {
//     index: 3,
//     id: 2,
//   }, {
//     index: 4,
//     id: 5,
//   }, {
//     index: 5,
//     id: 2,
//   },
// ]
// let newarr = []
// function p(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       newarr.push(arr[i])
//     }
//   }
//   return newarr
// }
// let filter_my = p(arr7, (item) => item.id != 2)
// console.log(filter_my);

////////////////////////////////////////////// No.8/ flat()  /////////////////////////////////////////////////////
// let arr8 = [[1],[2],[3]]
// let newarr2 = []
// function e(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     newarr2[newarr2.length] = Number(arr[i]+'')
//   }
//   return newarr2
// }
// let flat_my = e(arr8)
// console.log(flat_my);

////////////////////////////////////////////// No.9/ splice()  /////////////////////////////////////////////////////
// let arr9 = [
//   {
//     index: 0,
//     id: 1,
//   }, {
//     index: 1,
//     id: 2,
//   }, {
//     index: 2,
//     id: 3,
//   }, {
//     index: 3,
//     id: 4,
//   }, {
//     index: 4,
//     id: 5,
//   }, {
//     index: 5,
//     id: 6,
//   },
// ]

//-------------------------------------- 1-usul --------------------------------------//

// function a(arr, i1, i2) {
//   let i = i1
//   for (i; i < arr.length; i++) {
//     delete arr[i]
//     if (i == i2-1) {
//       break
//     }

//   } 
//   return arr9
// }
// let splice_my = a(arr9, 1, 3)
// console.log(splice_my);

//-------------------------------------- 2-usul --------------------------------------//

// function a(arr, i1, i2) {
//   let newarr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (i+1 <= i1) {
//       newarr[newarr.length] = arr[i]
//     }
//     if (i-1 >= i2) {
//       newarr[newarr.length] = arr[i]
//     }

//   }
//   return newarr
// }
// let splice_my = a(arr9, 1, 3)
// console.log(splice_my);

////////////////////////////////////////////// No.10/ slice()  /////////////////////////////////////////////////////
// let arr4 = [
//   {
//     index: 0,
//     id: 1,
//   }, {
//     index: 1,
//     id: 2,
//   }, {
//     index: 2,
//     id: 3,
//   }, {
//     index: 3,
//     id: 4,
//   }, {
//     index: 4,
//     id: 5,
//   }, {
//     index: 5,
//     id: 6,
//   },
// ]
// function a(arr, i1, i2) {
//   let i = i1
//   let all = []
//   for (i; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (i == i2 - 2) {
//       all = arr[i + 1]
//       break
//     }

//   } 
//   if (arr.length < i2) {
//     console.log('2-kiritilgan son xato arrayda bunga length yo\'q');
//   }
//   return all
// }
// let slice_my = a(arr4, 0, 7)
// console.log(slice_my);
// console.log(arr4.slice(0, 7));





