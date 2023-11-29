//  files

const fs = require('fs')


// // reading a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log('data of file 1 -> '+fileContent)

// //writing in a file

// fs.writeFileSync('f2.txt', 'this is file 2')  //this will overwrites the content present in f2 file with new content
//                                             // if file does not exists then it ceates file f2
// console.log('file has been written.')

// // append a file 

// fs.appendFileSync('f3.txt', 'this is updated file')  //adds new data to previously written file

// console.log('file has been appended')

// //deleting a file

// fs.unlinkSync('f2.txt')

// console.log('file has been deleted')






//Directories

// creating a directoy

// fs.mkdirSync('myDirectory')


// check the content inside of a directory

// let folderPath = 'D:\\NODE\\1_Node Module System\\myDirectory'


// let folderContent = fs.readdirSync(folderPath)

// console.log('folder content ', folderContent)


// check whether a directory exists or not

let doesExist = fs.existsSync('myDirectory')   //this can also be used for files

console.log(doesExist)


// Remove directory

fs.rmdirSync('myDirectory')

console.log('directory has been deleted')