// 1) створити функцію яка приймає масив та виводить його
function arrOut(arr){
console.log(arr);
}
arrOut([52,45,88,55]);
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function randomOut() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr[i] = Math.random();
    }
    arrOut(arr)
}
randomOut();
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minFunc(first,second,third) {
    if(first<second && first <third) {
        console.log(first);
    }
    else if(second <first && second < third) {
        console.log(second);
    }
    else {
        console.log(third);
    }
}
minFunc(5,7,8);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxFunc(first,second,third) {
    if(first>second && first >third) {
        console.log(first);
    }
    else if(second >first && second > third) {
        console.log(second);
    }
    else {
        console.log(third);
    }
}
maxFunc(5,7,8);
// 5) створити функцію яка повертає найбільше число з масиву
function maxArray(arr) {
    let max = arr[0];
    for (const arrElement of arr) {
        if(arrElement > max) {
            max = arrElement;
        }
    }
    return max;
}
let max = maxArray([4,55,44,6,9,7,8]);
console.log(max);

// 6) створити функцію яка повертає найменьше число з масиву
function minArray(arr) {
    let min = arr[0];
    for (const arrElement of arr) {
        if(arrElement < min) {
            min = arrElement;
        }
    }
    return min;
}
let min = minArray([4,55,44,6,9,7,8]);
console.log(min);
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function arrSum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
let sum = arrSum([5,3,2]);
console.log(sum);
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrAvg(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum / arr.length;
}
let avg = arrAvg([5,3,2]);
console.log(avg);
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function ObjectKeys(arr) {
    let objKeysArr = [];
    for (const field of arr) {
        for (const key in field) {
            objKeysArr.push(key);
        }
    }
    return objKeysArr;
}
let objKeyArr = ObjectKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(objKeyArr);
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function ObjectValues(arr) {
    let objValuesArr = [];
    for (const field of arr) {

        for (const key in field) {
            objValuesArr.push(field[key]);
        }
    }
    return objValuesArr;
}
let objValuesArr = ObjectValues([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(objValuesArr);
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sumOfArrs(arr1,arr2) {
    let sumArr = [];
    for (let i = 0; i < arr1.length; i++) {
        sumArr[i] = arr1[i] + arr2[i];
    }
    return sumArr;
}
let sumArr = sumOfArrs( [1,2,3,4],[2,3,4,5]);
console.log(sumArr);

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMaxArray() {
    let max = arguments[0];
    let min = arguments[0]
    for (const argument of arguments) {
        if(argument > max) {
            max = argument;
        }
        if(argument < min ) {
            min = argument;
        }
    }
    console.log(max);
    return min;
}
let arrMin = minMaxArray(4,55,44,6,9,7,8);
console.log(arrMin);

//- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//    Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

function objKeysOrValues(arr,choice) {
    let objArr = [];

    if(choice ==='keys') {
        for (const field of arr) {

            for (const key in field) {
                objArr.push(key);
            }
        }
        return objArr;
    }
    if(choice ==='values') {
        for (const field of arr) {
            for (const key in field) {
                objArr.push(field[key]);
            }
        }
        return objArr;
    }

        return false

}
let objArr = objKeysOrValues([{name: 'Dima', age: 13}, {model: 'Camry'}], 'values');
console.log(objArr);

//- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function iPosChange(arr,i) {
    let temp = arr[i+1];
    arr[i+1] = arr[i];
    arr[i] = temp;
    return arr;
}
let arrChanged = iPosChange([5,2,9,4,88,22],2)
console.log(arrChanged);

//- Сворити функцію яка буде переносити елементи з chaзначенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]
//
function endZero(arr) {
    for (let i = arr.length-1; i >=0; i--) {
        if(arr[i] === 0) {
            arr.push(arr[i]);
            arr.splice(i,1);

        }

    }
    return arr;
}
let arrEndZero =endZero([0,0,1,0]);
console.log(arrEndZero);
//- Дано список імен.
//let n1 = '    Harry       Potter      '
//let n2 = '    Ron       Whisley      '
//let n3 = '    Hermione       Granger      '
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'

function normilizeText(str){
    str = str.trim();
    let spacestart = str.indexOf(' ');
    let spaceEnd = str.lastIndexOf(' ');
    let slice = str.slice(spacestart,spaceEnd+1);
    str = str.replace(slice,' ')
    return str;
}

let normStr = normilizeText('    Harry       Potter      ');
console.log(normStr);


// ******************* НАЗАД В МИНУЛЕ *********************** //
//Створити функцію яка :
//    - Додає в боді блок з текстом "Hello owu"
function textToBody(){
let divEl = document.createElement('div');
divEl.innerText = 'Hello owu';
document.body.appendChild(divEl);

}
textToBody();

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function textWithTagToBody(elTag, str){
    let El = document.createElement(elTag);
    El.innerText = str;
    document.body.appendChild(El);

}
textWithTagToBody('h1','hello owu');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//    Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let cars = [
    {'carBrand':'Porshe', 'owner':'Serhii','regYear':2013},
    {'carBrand':'Renault','owner':'Ivan', 'regYear':2017},
    {'carBrand':'Dodge', 'owner':'Petro', 'regYear':2005},
    {'carBrand':'Jeep', 'owner':'Dima', 'regYear':2019},
    {'carBrand':'Mersedes', 'owner':'Michael', 'regYear':2020}
];
function carsToElId(arr, elId) {
    for (const arrElement of arr) {
        let divElemnt = document.createElement('div');
        divElemnt.innerText = `${arrElement.carBrand} ${arrElement.owner} ${arrElement.regYear}`;
        document.getElementById(elId).appendChild(divElemnt)
    }

}
carsToElId(cars,'Cars1');
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//    Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//    Для кожної властивості створити всередені блока автомоблія свій блок

function addCarsToElId(arr, elId) {
    for (const field of arr) {
        let divElemnt = document.createElement('div');
        divElemnt.style.margin = '20px';
        divElemnt.style.width = '200px';
        divElemnt.style.backgroundColor = 'cornFlowerBlue';
        for (const key in field) {
            let divEl = document.createElement('div');

            divEl.innerText = `${field[key]}`;
            divElemnt.appendChild(divEl);
        }

        document.getElementById(elId).appendChild(divElemnt)
    }

}
addCarsToElId(cars, 'Cars2')