require('../src/db/mongoose');
const User = require('../src/models/user');

// 5edb9d6ab318b4bd80dabc1f

// User.findByIdAndUpdate('5edb9d6ab318b4bd80dabc1f', { age: 1 }).then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1});
// }).then(result => {
//     console.log(result);
// }).catch(e => {
//     console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments(age);
    return count;
};

updateAgeAndCount('5f1fe506f033fc462a0511c0', 2).then(count => {
    console.log(count);
}).catch(e => {
    console.log(e);
});
