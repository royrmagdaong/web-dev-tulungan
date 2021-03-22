// const pi = 3.1416;
// let x = 2;

// sample array of fruits
// let y = [
//     'orange',
//     'apple',
//     'melon'
// ];
// sample for each loop
// y.forEach(fruit => {
//     console.log(fruit)
// })

// sample object
// let dog = {
//     foot: 4,
//     tail: true,
//     color: null,
//     hasOwner: true,
//     food:[
//         'dog food',
//         'cat food',
//         'bone',
//         'raw meat'
//     ],
//     food2:{
//         type: 'dog food',
//         name: 'kahit ano',
//         price: 129.00
//     },
//     food3:[
//        {
//            name: 'food 1',
//            price: 100
//        },
//        {
//             name: 'food 2',
//             price: 105
//        },
//        {
//             name: 'food 3',
//             price: 205
//        }
//     ]
// }

// console.log(dog.food3[1].name)

// call property in an object
// console.log(dog.color)
// 1 = true
// 0 = false
// null = false
// undefined = false
// '' = false or empty string = false

// if(null){
//     console.log('your dog has tail')
// }else{
//     console.log('your dog does not have a tail.')
// }

let fruits = [
    {
        name: 'apple',
        price: 20,
        ripe: true
    },
    {
        name: 'orange',
        price: 15,
        ripe: true
    },
    {
        name: 'pineapple',
        price: 45,
        ripe: false
    },
    {
        name: 'guava',
        price: 5,
        ripe: true
    }
]

let listOfFruits = document.getElementById('fruits');

// <li></li>
// li.textContent = 'apple - 15 - ripe: true';
// listOfFruits.appendChild(li);

// string concatenation
// var stringsample = 'hello' + ' world'
// 'hello world'

fruits.forEach(fruit => {
    let li = document.createElement('li');
    li.textContent = 'Name: ' + fruit.name + ', price: ' + fruit.price;
    listOfFruits.appendChild(li)
})

function addFruit(){

    let fruitname = document.getElementById('fruitname').value
    let price = document.getElementById('price').value

    let fruit = {
        name: fruitname,
        price: price
    }
    fruits.push(fruit)

    let li = document.createElement('li');
    li.textContent = 'Name: ' + fruit.name + ', price: ' + fruit.price;
    listOfFruits.appendChild(li)
}





