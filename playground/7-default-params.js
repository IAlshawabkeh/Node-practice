const greeting = (name, age) => {
    const user = {};

    if (typeof name == 'object') {
        user.name = name;
        user.age = age;
    } else {
        user.name = 'User',
        user.age = name
    }
    console.log('Hello ' + name);
};

greeting(20);