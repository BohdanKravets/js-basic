//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let isNumber = true;
let isString = false;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(isNumber);
console.log(isString);
alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(num6);
alert(num7);
alert(isNumber);
alert(isString);
document.write('<p>' + str1 + '</p>');
document.write('<p>' + str2 + '</p>');
document.write('<p>' + str3 + '</p>');
document.write('<p>' + str4 + '</p>');
document.write('<p>' + num1 + '</p>');
document.write('<p>' + num2 + '</p>');
document.write('<p>' + num3 + '</p>');
document.write('<p>' + num4 + '</p>');
document.write('<p>' + num5 + '</p>');
document.write('<p>' + num6 + '</p>');
document.write('<p>' + num7 + '</p>');
document.write('<p>' + isNumber + '</p>');
document.write('<p>' + isString + '</p>');

//- Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write
str1 = 'Hi';
str2 ='en';
str3 = 'wikipedia';
str4 = 'org';
num1 = 2;
num2 = 11;
num3 = -998;
num4 = 124;
num5 = 4.14;
num6 = 3.7;
num7 = 17;
isNumber = false;
isString = true;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(isNumber);
console.log(isString);
alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(num6);
alert(num7);
alert(isNumber);
alert(isString);
document.write(str1 + ' ');
document.write(str2 + ' ');
document.write(str3 + ' ');
document.write(str4 + ' ');
document.write(num1 + ' ');
document.write(num2 + ' ');
document.write(num3 + ' ');
document.write(num4 + ' ');
document.write(num5 + ' ');
document.write(num6 + ' ');
document.write(num7 + ' ');
document.write(isNumber + ' ');
document.write(isString);

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let firstName = prompt('Як тебе звати?');
let patronim = prompt('По Батькові?');
let age = prompt('Скільки тобі років?');
console.log('Вітаю ' + firstName + ' ' + patronim + '. ' + 'Тобі ' + age + ' років.' );

//- Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
let nameAndAge = firstName + patronim + age;
console.log(nameAndAge);

//- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
let firstNumber = prompt('Write first number:');
let secondNumber = prompt('Write second number:');
let thirdNumber = prompt('Write third number:');
firstNumber = parseInt(firstNumber,10);
secondNumber = parseInt(secondNumber, 10);
thirdNumber = parseInt(thirdNumber, 10);
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

//- За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt.
//    Додати їх всі мож собою і результат вивести в консоль.
let iNum1 = prompt('Write first integer number:');
let iNum2 = prompt('Write second  integer number:');
let iNum3= prompt('Write third  integer number:');
let iNum4 = prompt('Write fourth integer number:');
iNum1 = parseInt(iNum1,10);
iNum2 = parseInt(iNum2, 10);
iNum3 = parseInt(iNum3, 10);
iNum4 = parseInt(iNum4, 10);
let sum4 = iNum1 + iNum2 + iNum3 + iNum4;
console.log(sum4);

//- За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//    Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
let fNum1 = prompt('Write first float number:');
let fNum2 = prompt('Write second float  number:');
let fNum3 = prompt('Write third float number:');
fNum1 = parseFloat(fNum1);
fNum2 = parseFloat(fNum2);
fNum3 = parseFloat(fNum3);
let result = fNum1 + fNum2 + fNum3;
console.log(result);

//- За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS").
//Просумувати їх між собою. Результат вивести в консоль.
let fNum1Rounded = prompt('Write first float number:');
let fNum2Rounded = prompt('Write second float  number:');
let fNum3Rounded = prompt('Write third float number:');
fNum1Rounded = parseFloat(fNum1Rounded);
fNum2Rounded = parseFloat(fNum2Rounded);
fNum3Rounded = parseFloat(fNum3Rounded);
fNum1Rounded = Math.round(fNum1Rounded);
fNum2Rounded = Math.round(fNum2Rounded);
fNum3Rounded = Math.round(fNum3Rounded);
let resultRounded = fNum1Rounded + fNum2Rounded + fNum3Rounded;
console.log(resultRounded);

//- За допомогою prompt() отримати 2 цілих числа.
//    Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//    За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//    Example. Число 1 = 5. Число 2 = 2. Результат = 25
let num = prompt('Enter number:');
let power = prompt('Enter power');
num = parseInt(num);
power = parseInt(power);
let resultPow = Math.pow(num, power);
console.log(resultPow);

//    - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//- Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//    В однакових виразаї не використовувати однакові оператори!!!
//    5 ? 6 -> true
console.log(5 < 6);
//5 ? 6 -> false
console.log(5 > 6);
//5 ? 6 -> false
console.log(5 >= 6);
//5 ? 6 -> false
console.log(5 === 6 );
//10 ? 10 -> true
console.log(10 === 10);
//10 ? 10 -> true
console.log(10 <= 10);
//10 ? 10 -> false
console.log( 10 < 10);
//10 ? 10 -> false
console.log(10 > 10);
//10 ? 10 -> false
console.log(10 !== 10);
//123 ? '123' -> false
console.log(123 === '123');
//123 ? '123' -> true
console.log(123 == '123');





