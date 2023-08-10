// console.log("Connecting to HTML file")

const products = document.querySelector('#products');

products.addEventListener('click', (event) =>{
    // console.log(event.target.tagName)
    if(event.target.tagName=='LI'){
        window.location.href += '#' + event.target.id;
    }
})

//Flatten the array
// [1, 2, 3, 4, 5, 6, 7, 8]
let arr = [
    [1, 2],
    [3, 4, 5, 6, ["ram", "shyam"], 6],
    [7, 8, 11],
    [12, 13]
]

// let flattened = [].concat(...arr);
let levelFlatten = arr.flat(2) //we have to pass the level to flatt since there is two level of array. i am passing to 2.

// console.log(flattened)
// console.log(levelFlatten)

//make a custom func to flatten the array


function flattenArray(arr, level) {
    let results = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            results.push(...flattenArray(element, level-1))
        }else{
            results.push(element)
        }
    });
    return results;
}

// console.log(flattenArray(arr, 2))

function a(){
    for(var i = 0; i < 3; i){
        setTimeout(function log(){
            console.log(i)
        }, i * 1000)
    }
}

// a()

//composition polyfill function

function addFive(a){
    return a+5;
}

function subtractTwo(a){
    return a -2;
}

function multiplyFour(a){
    return a*4;
}

const compose = (...functions) =>{
    return (args) =>{
        return functions.reduceRight((args, func)=>func(args),args)
    }
}

let result = compose(addFive, subtractTwo, multiplyFour);

// console.log(result(5))

function restParameter(...args){
    const result = args.reduce((acc, init) => {
        return acc + init;
    },0)

    return result;
}

// console.log(restParameter(1, 2, 3, 4));



// key value pairs
const array = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6];

const countMap = {};

for (const value of array) {
    if(countMap[value]){
        countMap[value]++;
    }else{
        countMap[value] = 1;
    }
}

for (const key in countMap) {
    // console.log(key, countMap[key]);
}


// filter the array

let filteredArray = [...new Set(array)]
// console.log(filteredArray)

const filterByFilterMethod = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
})

// console.log(filterByFilterMethod)

// implement PromiseAll

function hello(text, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, time);
    })
}

Promise.all([hello("hello world",1000), Promise.resolve("hi")]).then((values) => console.log(values))




