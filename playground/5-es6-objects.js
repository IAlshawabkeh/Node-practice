// Object property shorthand

const name = 'Ihab';
const age = 27;

const user = {
    name,
    age,
    location: 'Jordan'
}

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 2.4
};

// const {label:productLabel, stock, rating = 5} = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock);
};

transaction('order', product);