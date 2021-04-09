// 1) Створити масив з 20 чисел та:
let arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (200 - 1) + 1));
}
console.log(arr);

//    a) відсортувати його від меншого до більшого.
arr.sort((a, b) => (a - b));
console.log(arr);

//    b) відсортувати його від більшого до меншого.
arr.sort((a, b) => (b - a));
console.log(arr);

//    c) Відфілтрувати числа які є кратними 3.
const resDiv3 = arr.filter(value => !(value % 3));
console.log(resDiv3);

// d) Відфілтрувати числа які є більшими за 10.
const resGr10 = arr.filter(value => value > 10);
console.log(resGr10);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
arr.forEach((value, index) => {
    document.write(`${index + 1}: ${value}<br>`);
})

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
const resX3 = arr.map(value => value * 3);
console.log(resX3);

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
const arrSum = arr.reduce((acc, currentValue) => acc + currentValue);
console.log(arrSum);

// 2) Створити масив з 20 стрічок та:
let strings = ['bqeal', 'uvgec', 'huo', 'dwnko', 'kmxu', 'anyfh', 'svlzv', 'jjuac', 'ddfck', 'zsoff', 'osgzr', 'pxjbt', 'xrxid', 'lvejq', 'oifmm', 'zzmwr', 'Gsypk', 'hpxmg', 'qdyun', 'gjzra'];
//     a) Відсортувати його в алфавітному порядку
strings.sort((a,b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    if (aLower > bLower) {
        return 1;
    }
    if (aLower < bLower) {
        return -1;
    }
    return 0;
});

console.log(strings);

// b) Відсортувати в зворотньому порядку
strings.sort((a, b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    if (aLower < bLower) {
        return 1;
    }
    if (aLower > bLower) {
        return -1;
    }
    return 0;
});
console.log(strings);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
const resGr4 = strings.filter(value => value.length > 4);
console.log(resGr4);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
const resAddWord = strings.map(value => `Sam says ${value}`);
console.log(resAddWord);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a, b) => a.age - b.age);
// console.log(users);

// users.sort((a, b) => b.age - a.age);
// console.log(users);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let usersWithId = users.map((value, index) => {
//     const name = value.name;
//     const age = value.age;
//     const isMarried = value.isMarried;
//     return  {id: index + 1, name, age, isMarried};
//
// });
// console.log(users);
// console.log(usersWithId);


// d) відсортувати його за індентифікатором
// usersWithId.sort((a, b) => b.id - a.id);
// console.log(usersWithId);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// const marriedUsers = users.reduce((acc, currentValue) => {
//     if (currentValue.isMarried) {
//         const name = currentValue.name;
//         const age = currentValue.age;
//         const isMarried = currentValue.isMarried;
//         acc.push({name, age, isMarried,flat:true});
//     }
//     return acc;
// }, []);
// console.log(marriedUsers);
// console.log(users);

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

const autos = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];


// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// const result1 = autos.filter(value => value.volume > 3);
// console.log(result1);

// - двигун = 2л
// const result2 = autos.filter(value => (value.volume === 2));
// console.log(result2);

// - виробник мерс
// const result3 = autos.filter(value => (value.producer === 'mercedes'));
// console.log(result3);

// - двигун більше 3х літрів + виробник мерседес
// const result4 = autos.filter(value => (value.volume >= 3 && value.producer === 'mercedes'));
// console.log(result4);

// - двигун більше 3х літрів + виробник субару
// const result5 = autos.filter(value => (value.volume >= 3 && value.producer === 'subaru'));
// console.log(result5);

// - сили більше ніж 300
// const result6 = autos.filter(value => (value.power > 300));
// console.log(result6);

// - сили більше ніж 300 + виробник субару
// const result7 = autos.filter(value => (value.power > 300 && value.producer === 'subaru'));
// console.log(result7);

// - мотор серіі ej
// const result8 = autos.filter(value => (value.engine.startsWith('ej')));
// console.log(result8);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// const result9 = autos.filter(value => (value.power >= 300 && value.producer === 'subaru' && value.engine.startsWith('ej')));
// console.log(result9);

// - двигун меньше 3х літрів + виробник мерседес
// const result10 = autos.filter(value => (value.volume < 3 && value.producer === 'mercedes'));
// console.log(result10);

// - двигун більше 2л + сили більше 250
// const result11 = autos.filter(value => (value.volume >= 2 && value.power >= 250));
// console.log(result11);

// - сили більше 250  + виробник бмв
// const result12 = autos.filter(value => (value.power > 300 && value.producer === 'bmw'));
// console.log(result12);

//
// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID
// usersWithAddress.sort((a, b) => (a.id - b.id));
// console.log(usersWithAddress);

// -- Відсортувати їх по ID в зворотньому порядку
// usersWithAddress.sort((a, b) => (b.id - a.id));
// console.log(usersWithAddress);

// -- Відсортувати по віку
// usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(usersWithAddress);

// -- Відсортувати по віку в зворотньому порядку
// usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(usersWithAddress);

// // -- Відсорутвати по імені
// usersWithAddress.sort((a, b) => {
//     if (a.name > b.name ) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     return 0;
// })
// console.log(usersWithAddress);

// -- Відсорутвати по назві вулиці
// usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }
//     if (a.address.street < b.address.street) {
//         return -1;
//     }
//     return 0;
// })
// console.log(usersWithAddress);

// -- Відсорутвати по номеру будинку
// usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(usersWithAddress);

// -- Залигити тільки тих, хт
// о молодший ніж 30 (filter)
// const users1 = usersWithAddress.filter(value => value.age < 30);
// console.log(users1);

// -- Залишити тільки одружених
// const users2 = usersWithAddress.filter(value => value.isMarried);
// console.log(users2);

// -- Залишити тільки одружених, які молодні за 30
// const users3 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
// console.log(users3);

// -- Залишити лише тих, в кого парні номери будинків.
// const users4 = usersWithAddress.filter(value => !(value.address.number % 2));
// console.log(users4);

// -- Порахувати загальний вік всіх людей. (reduce)
// const ageSum = usersWithAddress.reduce((acc, currentValue) => {
//     return acc + currentValue.age
// }, 0);
// console.log(ageSum);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// const usersWithChild = usersWithAddress.reduce((acc, currentValue) => {
//     if (currentValue.isMarried && currentValue.age > 30) {
//         currentValue.child = true;
//         acc.push(currentValue);
//     }
//     return acc;
// }, [])
// console.log(usersWithChild);

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.

let car1 = {
    'carBrand': 'Porshe',
    'power': 300,
    'driver': {'name': 'Serhii', 'age': 40, 'drivingExp': 15},
    'price': 50000,
    'regYear': 2013
};
let car2 = {
    'carBrand': 'Renault',
    'power': 150,
    'driver': {'name': 'Ivan', 'age': 28, 'drivingExp': 3},
    'price': 13000,
    'regYear': 2017
};
let car3 = {
    'carBrand': 'Dodge',
    'power': 180,
    'driver': {'name': 'Petro', 'age': 30, 'drivingExp': 10},
    'price': 7000,
    'regYear': 2005
};
let car4 = {
    'carBrand': 'Jeep',
    'power': 210,
    'driver': {'name': 'Dima', 'age': 35, 'drivingExp': 13},
    'price': 15000,
    'regYear': 2019
};
let car5 = {
    'carBrand': 'Mersedes',
    'power': 320,
    'driver': {'name': 'Michael', 'age': 50, 'drivingExp': 30},
    'price': 550000,
    'regYear': 2020
};
let car6 = {
    'carBrand': 'BMW',
    'power': 140,
    'driver': {'name': 'Roman', 'age': 29, 'drivingExp': 4},
    'price': 20000,
    'regYear': 2010
};
let car7 = {
    'carBrand': 'Nissan',
    'power': 120,
    'driver': {'name': 'Yura', 'age': 28, 'drivingExp': 8},
    'price': 9000,
    'regYear': 2014
};

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
car1.power = parseInt(car1.power * 1.1);
car2.power = parseInt(car2.power * 1.1);
car3.power = parseInt(car3.power * 1.1);
car4.power = parseInt(car4.power * 1.1);

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
car1.driver = {name: 'Stepan', age: 55, drivingExp: 30};
car2.driver = {name: 'Ivan', age: 43, drivingExp: 22};
car3.driver = {name: 'Oleh', age: 45, drivingExp: 6};
car4.driver = {name: 'Denis', age: 33, drivingExp: 3};

// Для початку вкладіть всі наші створені автомобілі в масив cars.
// let cars = [];
// cars.push(car1);
// cars.push(car2);
// cars.push(car3);
// cars.push(car4);
// cars.push(car5);
// cars.push(car6);
// cars.push(car7);
//console.log(cars);

//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// for (let i = 0; i < cars.length; i += 2) {
//     cars[i].power = parseInt(cars[i].power * 1.1);
//     cars[i].price = parseInt(cars[i].price * 1.05);
// }
// console.log(cars);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// cars.forEach(value => {
//     if (value.driver.drivingExp < 5 && value.driver.age > 25) {
//         console.log(`Driver ${value.driver.name} passed advanced training courses`)
//         value.driver.drivingExp += 1;
//     }
// })
// console.log(cars);

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
arr1 = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
let key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let findMinMaxKey = (arr, key) => {
//     let keys = []
//     arr.forEach((value, index) => {
//         if (value === key) {
//             keys.push(index);
//         }
//     })
//     if (!(keys.length)) {
//         return -1;
//     }
//     return `minIndex: ${keys[0]}, maxIndex: ${keys[keys.length - 1]}`;
// }
//
// const minMaxKey = findMinMaxKey(arr1, key);
// console.log(minMaxKey);
