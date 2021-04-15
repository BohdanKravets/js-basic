// - Створити довільний елемент с id = text. використовуючи JavaScript,
// зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// const text = document.getElementById('text');
// const button1 = document.getElementById('button1');
// button1.onclick = () => {
//    text.style.visibility = 'hidden';
// }

//    - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const button2 = document.getElementById('button2');
// button2.onclick = () => {
//     button2.hidden = 'true';
//  }

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//     та повідомити про це користувача
// const btn = document.getElementById('btn');
// btn.onclick = () => {
//     const input = document.getElementById('age');
//     const age = +input.value;
//     if (age < 18) {
//         alert('Access Forbiden');
//     }
//     else {
//         alert('Access granted');
//     }
// }

// - Створіть меню, яке розгортається/згортається при клику
// const li = document.getElementById('lishka');
// li.onclick = () => {
//     const ul = document.getElementById('ulka');
//     ul.hidden = !ul.hidden;
// }


// - Створити 2 форми  по 2 інпути в кожній.
// створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//  Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const forms = document.forms;
// const btn1 = document.getElementById('btnForm')
// btn1.onclick = () => {
//     for (const form of forms) {
//         for (const item of form) {
//
//             const value = item.value
//             console.log(value)
//         }
//     }
//
// }

// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст
// і робить збоку меню-зміст по всіх заголовках які є в тексті.
// При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// const content = document.getElementById('content');
// const h2Tags = document.getElementsByTagName('h2');
// const ulEl = document.createElement('ul');
// let wrap = document.getElementById('wrap');
// for (let i = 0; i < h2Tags.length; i++) {
//     let liEl = document.createElement('li');
//     let aEl = document.createElement('a');
//     aEl.setAttribute('href', `#link${i}`);
//     aEl.innerText = h2Tags[i].innerText;
//     h2Tags[i].setAttribute('id', `link${i}`);
//     liEl.appendChild(aEl);
//     ulEl.appendChild(liEl);
//     content.style.display = 'flex';
// }
//
// content.appendChild(ulEl)
// ulEl.style.width = '30%'
// wrap.style.width = '70%'
// content.style.display = 'flex';

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// const comments = [
//     {
//         'title': 'id labore ex et quam laborum',
//         'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
//     },
//     {
//         'title': 'quo vero reiciendis velit similique earum',
//         'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
//     },
//     {
//         'title': 'odio adipisci rerum aut animi',
//         'body': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
//     },
//     {
//         'title': 'alias odio sit',
//         'body': 'non et atquenoccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
//     },
//     {
//         'title': 'vero eaque aliquid doloribus et culpa',
//         'body': 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
//     }
// ]
//
// for (const comment of comments) {
//     const divEl = document.createElement('div')
//     const title = document.createElement('h1');
//     const body = document.createElement('p');
//     const btn2 = document.createElement('button');
//     title.innerText = `${comment.title}`;
//     body.innerText = `${comment.body}`;
//     btn2.innerText = 'Hide body';
//     btn2.onclick = () => {
//         body.hidden = !body.hidden;
//     }
//
//     divEl.appendChild(title);
//     divEl.appendChild(body);
//     divEl.appendChild(btn2);
//     document.body.appendChild(divEl);
//
// }


// - Створити функцію, яка генерує таблицю.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// function createTable(rows,columns) {
//     const table = document.createElement('table');
//     table.setAttribute('border', 1)
//
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             const td = document.createElement('td');
//             td.innerText = 10;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }
// createTable(5,7);

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
// let images = [
//     {
//         'name': 'orange',
//         'src': 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
//     },
//     {
//         'name': 'eye',
//         'src': 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'
//     },
//     {
//         'name': 'babyYoda',
//         'src': 'https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
//     }
// ];
//
// const divEl = document.createElement('div');
// let index = 0;
// const img = document.createElement('img');
// img.style.width = '200px';
// img.style.height = '200px';
// img.src = images[index].src;
// img.alt = images[index].name;
// const btnLeft = document.createElement('button');
// btnLeft.innerText = 'Left';
// const btnRight = document.createElement('button');
// btnRight.innerText = 'Right';
//
// btnLeft.onclick = () => {
//     if (index - 1 < 0) {
//         index = images.length - 1;
//     } else {
//         index--;
//     }
//     img.src = images[index].src;
//     img.alt = images[index].name;
// }
// btnRight.onclick = () => {
//     if (index + 1 > images.length - 1) {
//         index = 0;
//     } else {
//         index++;
//     }
//
//     img.src = images[index].src;
//     img.alt = images[index].name;
// }
// divEl.appendChild(btnLeft);
// divEl.appendChild(img);
// divEl.appendChild(btnRight);
// document.body.appendChild(divEl);

// _____________________________________________________________________________________________________________________________________________________
//  РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const words = ['xxx', 'xxxx', 'yyyy', 'yyy', 'zzz', 'zzzz'];
// const divEl = document.createElement('div');
// let buttonTag = document.createElement('button');
// let inputTag = document.createElement('input');
// buttonTag.innerText = 'check';
// inputTag.setAttribute('type', 'text');
// buttonTag.onclick = () => {
//     if (words.includes(inputTag.value)) {
//         alert('Dont do that');
//     }
// }
// divEl.appendChild(inputTag);
// divEl.appendChild(buttonTag);
// document.body.appendChild(divEl);

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// const words = ['xxx', 'xxxx', 'yyyy', 'yyy', 'zzz', 'zzzz'];
// const divEl = document.createElement('div');
// const buttonT = document.createElement('button');
// const inputT = document.createElement('input');
// buttonT.innerText = 'check';
// inputT.setAttribute('type', 'text');
// buttonT.onclick = () => {
//     const values = inputT.value.split(' ');
//     for (const value of values) {
//         if (words.includes(value)) {
//             alert('Dont do that');
//         }
//
//     }
// }
// divEl.appendChild(inputT);
// divEl.appendChild(buttonT);
// document.body.appendChild(divEl);


// -- Взяти масив юзерів
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
//  const content = document.createElement('div');
//
// const usersDiv = document.createElement('div');
// usersDiv.appendChild(printUsers(usersWithAddress));
//
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
// const label1 = document.createElement('label');
// const label2 = document.createElement('label');
// const label3 = document.createElement('label');
// label1.innerText = 'single';
// label2.innerText = 'age >= 29';
// label3.innerText = 'city Kyiv';
//
// input1.type = 'checkbox';
// input2.type = 'checkbox';
// input3.type = 'checkbox';
//
// content.appendChild(usersDiv);
// label1.appendChild(input1);
// content.appendChild(label1);
// label2.appendChild(input2);
// content.appendChild(label2);
// label3.appendChild(input3);
// content.appendChild(label3);
// document.body.appendChild(content);
//
// input1.onclick = (ev) => {
//     check();
//
// }
//
// input2.onclick = (ev) => {
//     check();
//
//
// }
// input3.onclick = (ev) => {
//     check();
//
// }
//
// function check() {
//     let users = JSON.parse(JSON.stringify(usersWithAddress));
//
//     if (input1.checked) {
//         users = users.filter(value => !(value.isMarried));
//     }
//
//     if (input2.checked) {
//         users = users.filter(value => value.age >= 29);
//     }
//
//     if (input3.checked) {
//         users = users.filter(value => value.address.city === 'Kyiv');
//     }
//
//
//
//     usersDiv.innerHTML = ''
//     usersDiv.appendChild(printUsers(users))
// }
//
//
// function printUsers(arr) {
//     arr.sort((a, b) => a.id - b.id)
//     const divEl = document.createElement('div');
//
//     arr.forEach(value => {
//         const pEl = document.createElement('p');
//         const status = value.isMarried ? 'married' : 'single';
//         pEl.innerText = `${value.id}: ${value.name}, ${value.age} year, ${status}, ${value.address.city} (${value.address.street}, ${value.address.number})`;
//         divEl.appendChild(pEl)
//     })
//     return divEl;
// }





