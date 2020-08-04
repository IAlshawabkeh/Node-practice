require('../src/db/mongoose');
const Task = require('../src/models/task');
const { findByIdAndDelete } = require('../src/models/task');

// Task.findByIdAndDelete('5f1fe4eff033fc462a0511bf').then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then(result => {
//     console.log(result);
// }).catch(e => {
//     console.log(e);
// });

//5f1fecae52937d5874d745b5

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed });
    return count;
};

deleteTaskAndCount('5f1fec9752937d5874d745b4', true).then(count => {
    console.log(count);
}).catch(e => {
    console.log(e);
});