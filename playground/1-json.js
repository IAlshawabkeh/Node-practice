const fs = require('fs');




// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holidy'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-jsonn.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-jsonn.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.author);


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
user.name = 'Ihab';
user.age = '27';
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);