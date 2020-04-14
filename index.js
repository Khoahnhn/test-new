// 1 show all student
// 2 Create a new student
// 3 save & exit

// const readlineSync = require('readline-sync');
// const fs = require('fs');

// let students =[];

// function loadData(){
// 	let fileContent = fs.readFileSync('./data.json');
// 	students = JSON.parse(fileContent);
// }

// function showAllStudents(){
// 	for(let student of students){
// 		console.log(student.name,student.age);
// 	}
// }

// function createNewStudent(){
// 	let name = readlineSync.question('Name: ');
// 	let age = readlineSync.question('Age: ');
// 	let student = {
// 		name : name,
// 		age : parseInt(age)
// 	};
// 	students.push(student);
// }

// function saveAndExit(){
// 	let content = JSON.stringify(students);
// 	fs.writeFileSync('./data.json',content, {encoding:'utf8'});
// }

// function showMenu(){
// 	console.log('1. Show all students');
// 	console.log('2. Create a new student');
// 	console.log('3. Save & Exit');

// 	let option = readlineSync.question('> ');
// 	switch(option){
// 		case '1':
// 		   showAllStudents();
// 		   showMenu();
// 		   break;
// 		case '2':
// 		   createNewStudent();
// 		   showMenu();
// 		   break;
// 		case '3':
// 		   saveAndExit();
// 		   break;
// 		default :
// 		   console.log('Wrong option');
// 		   break;         
// 	}
// }

// function main(){
// 	loadData();
// 	showMenu();
// }

const axios = require('axios');

let url1 = 'https://jsonplaceholder.typicode.com/todos/1';
let url2 = 'https://jsonplaceholder.typicode.com/todos/2';
let url3 = 'https://jsonplaceholder.typicode.com/todos/3';

function getData(url){
  return new Promise(function(resolve,reject){
    axios.get(url).then(function(res,error){
    	if(error){
    		reject(error);   	
    	} else {
    		resolve(res.data);
    	}
    });
  });
}

Promise.all([
  getData(url1),
  getData(url2),
  getData(url3)
]).then(function(values){
  console.log(values);
}).catch(function(error) {
  console.log(error);
});


// /**
//  * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
//  * https://jsonplaceholder.typicode.com/todos/1
//  * https://jsonplaceholder.typicode.com/todos/2
//  * https://jsonplaceholder.typicode.com/todos/3
//  */


// var ax = require('axios');

// function downLinkPromise(link) {
//     return new Promise(function (resolve, reject) {
//         ax.get(link, function (err, data) {
//             if (link == null) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };
// Promise.all([
//     ax.get('https://jsonplaceholder.typicode.com/todos/1'),
//     ax.get('https://jsonplaceholder.typicode.com/todos/2'),
//     ax.get('https://jsonplaceholder.typicode.com/todos/3')
// ]).then(function (values) {
//     console.log(values);
// }).catch(function (err) {
//     console.log(err);
// })