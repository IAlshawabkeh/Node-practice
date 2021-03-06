const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get request is not enabled!');
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('The site is under maintenance, please try again later');
// });

app.use(express.json());

app.use(userRouter, taskRouter);

app.listen(port, () => {
    console.log('Server is up on port : ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('5f21bd3db8abc5331233f65c');
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);

    const user = await User.findById('5f21bc9d670b46322439731a');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
}

main();