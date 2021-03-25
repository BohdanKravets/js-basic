//--створити масив та вивести його в консоль:
// - з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
let nums = [1, 2, 3, 4, 5];
console.log(nums);
let strings = ['ab', 'cd', 'ef', 'gh', 'ij'];
console.log(strings);
let arr = [34, true, 87, 'dkd', 'ju', false];
console.log(arr);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let sites = [];
sites[0] = 'google';
sites[1] = 'facebook';
sites[3] = 'yahoo';
sites[4] = 'okten';
console.log(sites);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> Hello world! </div>`)
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (i = 0; i < 10; i++) {
    document.write(`<div>Product - ${i}</div>`);
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let counter = 0;
while (counter < 20) {
    document.write(`<h1>while cycle</h1>`)
    counter++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let count = 0;
while (count < 20) {
    document.write(`<h1>while cycle ${count}</h1>`)
    count++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums1.length; i++) {
    console.log(nums1[i]);
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strings1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (i = 0; i < strings1.length; i++) {
    console.log(strings1[i]);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr1 = [1, 5, 'ki', false, 'le', true, 4, 76, 're', false];
let c = 0;
while (c < arr1.length) {
    console.log(arr1[c]);
    c++;
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr2 = [1, 5, 'ki', false, 'le', true, 4, 76, 're', false];
for (let element of arr2) {
    if ((typeof element) === 'boolean') {
        console.log(element);
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr3 = [1, 5, 'ki', false, 'le', true, 4, 76, 're', false];
for (let element of arr3) {
    if ((typeof element) === 'number') {
        console.log(element);
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr4 = [1, 5, 'ki', false, 'le', true, 4, 76, 're', false];
for (let element of arr4) {
    if ((typeof element) === 'string') {
        console.log(element);
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr5 = [];
arr5[0] = true;
arr5[1] = 5;
arr5[2] = 67;
arr5[3] = 'true';
arr5[4] = 'let';
arr5[5] = false;
arr5[6] = 23;
arr5[7] = 22;
arr5[8] = 'ked';
arr5[9] = true;
for (let element of arr5) {
    console.log(element)
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if ((i % 2) !== 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}

//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        document.write(`<div>${i} : ${j}</div>`)
    }
}

//- Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        for (let k = 0; k < 60; k++) {
            document.write(`<div>${i} : ${j} : ${k}</div>`)
        }
    }
}

//Додатково
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let strs = ['a', 'b', 'c'];
let str = '';
for (let i = 0; i < strs.length; i++) {
    str += strs[i];
}
console.log(str);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let strs1 = ['a', 'b', 'c']
let str1 = '';
counter = 0;
while (counter < strs1.length) {
    str1 += strs1[counter];
    counter++;
}
console.log(str1);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let strs2 = ['a', 'b', 'c'];
let str2 = '';
for (let str of strs2) {
    str2 += str;
}
console.log(str2);

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//    1. перебрати його циклом while
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
counter = 0;
while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
}

//    2. перебрати його циклом for
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//    3. перебрати циклом while та вивести  числа тільки з непарним індексом
counter = 0;
while (counter < numbers.length) {
    if ((counter % 2) !== 0) {
        console.log(numbers[counter]);
    }
    counter++;
}
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < numbers.length; i++) {
    if ((i % 2) !== 0) {
        console.log(numbers[i]);
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення
counter = 0;
while (counter < numbers.length) {
    if ((numbers[counter] % 2) === 0) {
        console.log(numbers[counter]);
    }
    counter++;
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
        console.log(numbers[i]);
    }
}

//7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 3) === 0) {
        numbers[i] = 'okten';
    }

}
console.log(numbers);

//8. вивести масив в зворотньому порядку.
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
    //  1. перебрати його циклом while
    numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
counter = numbers.length-1;
while (counter >= 0) {
    console.log(numbers[counter]);
    counter--;
}

    //    2. перебрати його циклом for
for (let i = numbers.length-1; i >= 0; i--) {
    console.log(numbers[i]);
}

//    3. перебрати циклом while та вивести  числа тільки з непарним індексом
counter = numbers.length-1;
while (counter >= 0) {
    if ((counter % 2) !== 0) {
        console.log(numbers[counter]);
    }
    counter--;
}
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = numbers.length-1; i >= 0; i--) {
    if ((i % 2) !== 0) {
        console.log(numbers[i]);
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення
counter = numbers.length-1;
while (counter >= 0) {
    if ((numbers[counter] % 2) === 0) {
        console.log(numbers[counter]);
    }
    counter--;
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = numbers.length - 1; i >= 0; i--) {
    if ((numbers[i] % 2) === 0) {
        console.log(numbers[i]);
    }
}

//7. замінити кожне число кратне 3 на слово "okten"
for (let i = numbers.length - 1; i >= 0; i--) {
    if ((numbers[i] % 3) === 0) {
        numbers[i] = 'okten';
    }
}
    console.log(numbers);

//10
//створити пустий масив та :
//    - заповнити його 50 парними числами за допомоги циклу.
let evenNums = [];
for(let i =0; i<100; i++) {
    if((i%2) === 0)
    {
        evenNums[i/2] = i;
    }
}
console.log(evenNums);

//- заповнити його 50 непарними числами за допомоги циклу.
let oddNums = [];
for(let i =0; i<100; i++) {
    if ((i % 2) !== 0) {
        oddNums[(i-1)/ 2] = i;
    }
}
console.log(oddNums);