// Дано відсортований масив (мінімум 10 елементів)
// Необхідно модифікувати масив так, що б дублікати зустрічалися не більше 2х разів підряд.
//
//     Example:
// [1, 1, 1, 2, 3, 3, 3, 3] -> [ 1, 1, 2, 3, 3, 1, 3, 3]
//
//     [0, 0, 1, 1, 1, 2, 2] -> [0, 0, 1, 1, 2, 2, 1]
// function twoValue(arr) {
//     for (let i = arr.length-1; i >= 2; i--) {
//         if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2])
//             {
//                 arr.splice(i,1)
//             }
//         }
// return arr;
// }
// let arr = twoValue([1, 1, 1, 2, 3, 3, 3, 3]);
// console.log(arr)

// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"
// function decompose(number) {
//     let decomposedNum = `${number%10}`;
//     number = parseInt(number / 10)
//     let counter = 1;
//     while (number !== 0) {
//         let temp = (number % 10) * (10 ** counter);
//         number = parseInt(number / 10)
//         decomposedNum =`${temp} + ${decomposedNum}`;
//         counter++;
//     }
//     return decomposedNum;
// }
//
// let str = decompose(3275);
// console.log(str);


// ____________________________________________________________
//
// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз
//     [1,2,3,4,5,2,4,1,3] -> 5
// let arr = [1,2,3,4,5,5,2,4,1,1,3,9,9];
// let oddTimes;
// let counter= {};
// for(let i = 0; i<arr.length; i++) {
//     if(counter[arr[i]]){
//         counter[arr[i]] +=1;
//     }
//     else{
//         counter[arr[i]] =1;
//
//     }
// }
//
// for (const key in counter) {
//     if(counter[key]%2){
//         oddTimes = parseInt(key);
//         break;
//     }
// }
// console.log(oddTimes);

// _______________________________________________________________
// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

// function isAnagram(str1,str2) {
//     if (str1.length !== str2.length) {
//         return false
//     }
//     str1.split('').sort().join((''));
//     str2.split('').sort().join((''));
//
//     return str1 === str2;
// }
//
// console.log(isAnagram('aaea','aasa'));
// _______________________________________________________________
//
// Точная степень двойки
// Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
// function isPow2(number) {
//     while (number!==1)
//     {
//         if((number%2)!==0){
//             return false;
//         }
//         number =parseInt(number/2);
//     }
//     return true;
// }
// const isPowOf2 = isPow2(16);
// console.log(isPowOf2)

//     ______________________________________________________________
//
// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//     Рекурсія)

// let number = 714;
//
// function sumOfNumber(number) {
//     if (number !== 0) {
//         const remainder = number % 10;
//         number = parseInt(number / 10);
//         return remainder + sumOfNumber(number);
//     }
//     return 0;
// }
//
// const sum = sumOfNumber(number);
// console.log(sum);

// ______________________________________________________________
//
// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
// function isPalindrom(string) {
//     if(!string) {
//         return 'Enter string'
//     }
//     if(string.length === 1) {
//         return true;
//     }
//     if(string.length === 2) {
//         return string[0] === string[1];
//     }
//     const first =string[0];
//     const last = string[string.length-1];
//     if(first === last) {
//         return isPalindrom(string.slice(1, -1))
//     }
//     return false;
//
// }
//
// let str = 'bob';
// let flag = isPalindrom(str)
// console.log(flag);

// _______________________________________________________________
//
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд.
// Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей,
// необходимо игнорировать.
//
// 2176491947586100 -> 3

// function countOne(strOfNums) {
//     let count = 0;
//     for (let i = 0; i < strOfNums.length-1; i++) {
//         if(strOfNums.charAt(i) === '1') {
//             count++
//         }
//         if(strOfNums.charAt(i) === '0' && strOfNums.charAt(i+1) ==='0') {
//             return count;
//         }
//     }
//     return count;
// }
//
// console.log(countOne('2176491947586111100111'));

// _________________________________________________________________
//
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.
// let arr = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];
//
// function flatArr(arr) {
//     let flatArray =[];
//     for (const item of arr) {
//         if(Array.isArray(item)) {
//            flatArray.push(...flatArr(item))
//         }
//         else {
//             flatArray.push(item)
//         }
//     }
//     return  flatArray
// }
//
// let flat = flatArr(arr);
// console.log(flat);

//     ___________________________________________________________________
//
// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
// let arr = [1, 6, 9, 0, 17, 88, 4, 7];
// let maxN = arr.reduce((previousValue, currentValue) =>
//     previousValue < currentValue ? currentValue : previousValue);
// console.log(maxN);

// ____________________________________________________________________
//
//
// Отримати масив лише унікальних значень за допомогою reduce
//     [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]
// let array = [1, 9, 0, 1, 5, 9, 1, 6];
// let uniqArr = array.reduce((acc, value) => {
//     if(!acc.includes(value)){
//         acc.push(value);
//     }
//     return acc;
//
// },[])
// console.log(uniqArr);
// ____________________________________________________________________
// Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.
// function addPrimes() {
//     let primes = [];
//
//     for (let i = 100000; i < 1000000; i++) {
//         let isPrime = true;
//         let len = parseInt(i ** 0.5);
//         for (let j = 2; j < len; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//             }
//
//         }
//         if (isPrime) {
//             primes.push(i);
//         }
//     }
//     return primes;
// }
//
// // function isPalindrom(string) {
// // return string === string.split('').reverse().join('');
// //
// //     // let len = string.length;
// //     // let len2 = parseInt(len/2)
// //     // for (let i = 0; i < len2; i++) {
// //     //     if (string[i] !== string[len - 1 - i]) {
// //     //         return false;
// //     //     }
// //     // }
// //     // return true;
// //
// // }
//
// function maxPalindrome(array) {
//     let max = 0;
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             let product = array[i] * array[j];
//             if (`${product}` === `${product}`.split('').reverse().join('') && product > max) {
//                 max = product;
//             }
//         }
//
//     }
//     return max;
// }
//
//
// const primes = addPrimes();
// const max = maxPalindrome(primes);
// console.log(max)




// name no change
// age >
// password login password newpassword >8 and specsymbol



function userBuilder() {
    let _name = 'user1';
    let _password = 'password';
    let _age = 30;

    function getName() {
        return _name;
    }

    function getPassword() {
        return _password;
    }

    function getAge() {
        return _age;
    }

    function setAge(newAge) {
        if (newAge < _age) {
            return alert('New age should be bigger then current age');
        }
        _age = newAge;
    }

    function setPassword(name, password, newPassword) {
        const specSymbols = '!@#$%^&*()-_';
        if (name !== _name || password !== _password) {
            return alert('name or password don\'t match')
        }
        if (newPassword.length < 8) {
            return alert('the password should be 8 symbols or longer');
        }
        let flag = false;
        for (let i = 0; i < specSymbols.length; i++) {
            if (newPassword.includes(specSymbols[i])) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            return alert('Password should include at least one special symbol(!@#$%^&*()-_)')
        }

        _password = newPassword;
    }

    return {
        getAge, getName, getPassword, setPassword, setAge

    }

}


const user = userBuilder();

user.setPassword('user1', 'password', 'password');
console.log(user.getPassword());

user.setAge(28);
console.log(user.getAge());