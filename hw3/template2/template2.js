// //Взяти файл template_2.html та працювати в ньому

//1) Напишіть код, який :

//a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
let idMainHeader = document.getElementById('main_header');
idMainHeader.style.color = 'brown';

//b) робить шириниу елементу ul 400px
let ulElemnt = document.getElementsByTagName("ul");
ulElemnt[0].style.width = '400px';

//c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName(`linkList`);
for (const linkElement of linkList) {
    linkElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
for (const listEl of listElement2) {
    console.log(listEl.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.getElementsByTagName('li');
for (let i = 0; i < liElements.length; i++) {
    liElements[i].style.backgroundColor = 'gray';
}

//f) отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    aElement.classList.add('anchor')
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aElems = document.getElementsByTagName('a');
for (const aElement of aElems) {
    if (aElement.innerText === 'link3') {
        aElement.style.fontSize = '40px';
    }
}

// //h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aEls = document.getElementsByTagName('a');
for (const aElement of aEls) {
    aElement.classList.add(aElement.innerText)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaderBColor = prompt('Enter background color to class sub-header');
let subHeaders = document.getElementsByClassName('sub-header');
for (const subHeader of subHeaders) {
    subHeader.style.backgroundColor = subHeaderBColor;
}

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeaderColor = prompt('Enter color to class sub-header');
subHeaders = document.getElementsByClassName('sub-header');
for (const subHeader of subHeaders) {
    if (subHeader.innerText === 'content 2 segment') {
        subHeader.style.color = subHeaderColor;
    }
}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1Classes = document.getElementsByClassName('content_1');
for (const content1Class of content1Classes) {
    content1Class.innerText = 'February2021';
}

//l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName('p');
for (const pElement of pElements) {
    pElement.style.padding = '20px';
}

/////////////////////////////////////////////////////////////

//2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

let wrap = document.createElement('div');

for (let i = 0; i < rules.length; i++) {
    ruleDiv = document.createElement('div');
    ruleDiv.classList.add('rules');
    ruleDiv.classList.add(`rule${i}`);
    ruleDiv.innerHTML = `<h2>${rules[i].title}</h2>
                         <p>${rules[i].body}</p>`;
    wrap.appendChild(ruleDiv);
}
document.body.appendChild(wrap);

//- Дано 2 масиви з рівною кількістю об'єктів.
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//   Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let newUser = [];
for (let i = 0; i < usersWithId.length; i++) {

    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            newUser[i] = usersWithId[i];
            newUser[i].address = citiesWithId[i];

        }
    }

}

console.log(newUser);

