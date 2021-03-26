//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let chars = ['a', 'b', 'c'];
for (let i = 1; i < 4; i++) {
    chars[chars.length] = i;
}
console.log(chars);

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let digits = [1, 2, 3];
let backDigits = [];
for (let i = 0; i < digits.length; i++) {
    backDigits[i] = digits[digits.length - 1 - i];

}
console.log(backDigits);

//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
digits.push(4);
digits.push(5);
digits.push(6);
console.log(digits);

//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
digits = [1, 2, 3];
digits.unshift(6);
digits.unshift(5);
digits.unshift(4);
console.log(digits);

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let pLangs = ['js', 'css', 'jq'];
let el1 = pLangs.shift();
document.write('<p>' + el1 + '</p>');

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
pLangs = ['js', 'css', 'jq'];
let lastEl = pLangs.pop();
document.write('<p>' + lastEl + '</p>');

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let numbers = [1, 2, 3, 4, 5];
numbers = numbers.slice(3);
console.log(numbers);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
numbers = [1, 2, 3, 4, 5];
numbers = numbers.slice(0, 2);
console.log(numbers);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2);
console.log(numbers);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
numbers = [1, 2, 3, 4, 5];
numbers.splice(3, 0, 'a', 'b', 'c');
console.log(numbers);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 0, 'a', 'b');
numbers.splice(-1, 0, 'c');
numbers.splice(8, 0, 'e');
console.log(numbers);

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let nums = [55, 33, 20, 42, 74, 96, 77, 101, 1, 6];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
    }
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let numsCopy1 = [];
for (let i = 0; i < nums.length; i++) {
    numsCopy1.push(nums[i]);
}
console.log(numsCopy1);

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let numsCopy2 = [];
for (let i = 0; i < nums.length; i++) {
    numsCopy2[i] = nums[i];
}
console.log(numsCopy2);

//1. Створити пустий масив та :
//    a. заповнити його 50 парними числами за допомоги циклу.
let evenNums = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        evenNums.push(i);

    }
}
console.log(evenNums);

//    b. заповнити його 50 непарними числами за допомоги циклу.
let oddNums = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        oddNums.push(i);
    }
}
console.log(oddNums);

//    c. используя Math.random заполнить массив из ???(сколько хотите) элементов.
let rands = [];
for (let i = 0; i < 200; i++) {
    rands.push(Math.random());
}
console.log(rands);

//    диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
rands.length = 0;
let min = 8;
let max = 732;
for (let i = 0; i < 200; i++) {
    rands.push(Math.floor((Math.random() * (max - min)) + min));
}
console.log(rands);

//2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < rands.length; i += 3) {
    console.log(rands[i]);
}

//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < rands.length; i += 3) {
    if (rands[i] % 2 === 0) {

        console.log(rands[i]);
    }
}
//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let randsCpy = [];
for (let i = 0; i < rands.length; i += 3) {
    if (rands[i] % 2 === 0) {
        console.log(rands[i]);
        randsCpy.push(rands[i]);
    }
}
console.log(randsCpy);

//5. Вивести кожен елемент масиву, сусід справа якого є парним
//EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
nums = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] % 2 === 0) {
        console.log(nums[i]);
    }
}

//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let receipts = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i = 0; i < receipts.length; i++) {
    sum += receipts[i];
}
let avgReceipt = sum / receipts.length;
console.log(avgReceipt);

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randNums = [5, 2, 44, 4, 22, 55, 66, 56,]
let randNumsX5 = [];
for (i = 0; i < randNums.length; i++) {
    randNumsX5[i] = randNums[i] * 5;
}
console.log(randNumsX5);


//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr = [22, true, 'lenght', 5, 'false', 10, 22, 'heigth', "false"];
let arrNums = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        arrNums.push(arr[i]);
    }
}
console.log(arrNums);