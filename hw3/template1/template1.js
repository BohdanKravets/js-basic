//- Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
//1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//a) отримує текст з параграфа з id "content"
let idContent = document.getElementById('content');

//b) отримує текст з блоку з id "rules"
let idRules = document.getElementById('rules');

//c) замініть текст параграфа з id 'content' на будь-який інший
idContent.innerText = 'Feb';

//d) замініть текст параграфа з id 'rules' на будь-який інший
idRules.innerText = 'Rules';

//e) змініть кожному елементу колір фону на червоний
idContent.style.backgroundColor = 'red';
idRules.style.backgroundColor = 'red';

//f) змініть кожному елементу колір тексту на синій
idContent.style.color = 'blue';
idRules.style.color = 'blue';

//g) отримати весь список класів елемента з id=rules і вивести їх в console.log
idRulesClasses = idRules.classList;
console.log(idRulesClasses);

//h) отримати всі елементи з класом fc_rules
let fcRules = document.getElementsByClassName('fc_rules');

//i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (const fcRule of fcRules) {
    fcRule.style.color = 'red';
}

//2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//  Вставити цей блок на сторінку

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

for (const user of users) {
    let userDiv = document.createElement('div');
    let jsonUser = JSON.stringify(user);
    userDiv.innerText = `${jsonUser}`;
    document.body.appendChild(userDiv);
}

//3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//  Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.style.width ='300px';
    userDiv.style.backgroundColor = 'silver';
    userDiv.style.marginBottom = '10px';
    let userNameDiv = document.createElement('div');
    userNameDiv.innerText = `${user.name}`;
    let userAgeDiv = document.createElement('div');
    userAgeDiv.innerText = `${user.age}`;
    let userStatusDiv = document.createElement('div');
    userStatusDiv.innerText = `${user.status}`;
    let userAddressDiv = document.createElement('div');

    for (const field in user.address) {
        let fieldDiv = document.createElement('div');
        fieldDiv.innerText = `${user.address[field]}`;
        userAddressDiv.appendChild(fieldDiv);
    }

    userDiv.appendChild(userNameDiv);
    userDiv.appendChild(userAgeDiv);
    userDiv.appendChild(userStatusDiv);
    userDiv.appendChild(userAddressDiv);
    document.body.appendChild(userDiv);

}



