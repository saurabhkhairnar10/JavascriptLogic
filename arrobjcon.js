const names = ["Rahul", "Sneha", "Amit"];

const obj = names.reduce((acc, name, index) => {
    acc[index] = name;
    return acc;
}, {});

console.log(obj);
// { '0': 'Rahul', '1': 'Sneha', '2': 'Amit' }