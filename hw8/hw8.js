// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const element = document.getElementById('textarea');
//
// element.oninput = () =>{
// localStorage.setItem('text', element.value)
// }
// element.innerText = localStorage.getItem('text');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// const form = document.getElementById('form1');
//
// form.onchange = ({target}) => {
//
//     if (target.type === 'checkbox') {
//         localStorage.setItem(target.name, target.checked);
//     } else if (target.type === 'radio') {
//         localStorage.setItem(target.name, target.id);
//     } else {
//         localStorage.setItem(target.name, target.value);
//     }
// }
//
// for (const item of form) {
//     if (item.type === 'checkbox') {
//         item.checked = JSON.parse(localStorage.getItem(item.name))
//     } else if (item.type === 'radio') {
//         if (item.id === localStorage.getItem(item.name)) {
//             item.checked = true;
//         }
//     }
//
//     else {
//         item.value = localStorage.getItem(item.name)
//
//     }
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let textarea = document.getElementById('text5');
const save = document.getElementById('save');
const left = document.getElementById('left');
const right = document.getElementById('right');
let currentIndex = 0;

let arr = JSON.parse(localStorage.getItem('textarea'));
if (!arr || !Array.isArray(arr)) {
    localStorage.setItem('textarea', JSON.stringify([]));
} else {
    currentIndex = arr.length - 1
    textarea.value = arr[currentIndex];

}

save.onclick = () => {
    let arr = JSON.parse(localStorage.getItem('textarea'));
    arr.push(textarea.value);
    localStorage.setItem('textarea', JSON.stringify(arr));
    currentIndex = arr.length - 1;
}

left.onclick = () => {
    let arr = JSON.parse(localStorage.getItem('textarea'));

    if (currentIndex - 1 >= 0) {
        currentIndex--;
        textarea.value = arr[currentIndex];
    }
}

right.onclick = () => {
    let arr = JSON.parse(localStorage.getItem('textarea'));

    if (currentIndex + 1 < arr.length) {
        currentIndex++;
        textarea.value = arr[currentIndex];

    }
}


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//   Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const form = document.forms.user;
const saveBtn = document.getElementById('saveButton');
const users = 'users';
let id = null;

if (!localStorage.getItem('counter')) {            // for unique id
    localStorage.setItem('counter', '1');
}

const array = JSON.parse(localStorage.getItem(users));

if (!Array.isArray(array)) {
    localStorage.setItem(users, JSON.stringify([]));

}
if (array) {
    const wrap = formForUsers(array);
    wrap.onclick = ({target}) => {
        const btnId = target.id;   //get from div where all users placed, unique button id(can be editXXX or delXXX)
        console.log(target.type)
        if (target.type ==='submit' && btnId.includes('del')) {
            const userId = +btnId.substr(3)
            deleteUser(userId)
        }
        if (target.type ==='submit' && btnId.includes('edit')) {
            const userId = +btnId.substr(4)
            editUser(userId);
        }
    }
}


saveBtn.onclick = () => {
    const user = getUser(form);
    saveUserToLS(user);
    location.reload();
}


function getUser(form) {
    let counter = localStorage.getItem('counter');
    let user = {};
    for (const field of form) {
        user[field.name] = field.value;
    }

    user.id = id ? id : counter++; //if new user assign, if edited assign his id

    localStorage.setItem('counter', counter);
    id = null;
    return user;
}

function saveUserToLS(user) {
    let array = JSON.parse(localStorage.getItem(users));

    const index = array.findIndex(value => value.id === user.id)

    if (index !== -1 || !index) {  //if it's edited user
        array.splice(index, 1, user)
        localStorage.setItem(users, JSON.stringify(array));
        return;
    }

    array.push(user);
    localStorage.setItem(users, JSON.stringify(array));

}


function formForUsers(users) {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex'
    wrap.style.flexWrap = 'wrap'

    for (const user of users) {
        const outDiv = document.createElement('div')
        outDiv.style.width = '200px'
        outDiv.style.margin = '20px'
outDiv.style.overflow ='auto';
        for (const field in user) {
            if (field !== 'id') {
                const innerDiv = document.createElement('div');
                innerDiv.innerText = `${field}:${user[field]}`;
                outDiv.appendChild(innerDiv);
            }

        }
        const edit = document.createElement('button');
        edit.innerText = 'edit';
        edit.setAttribute('id', `edit${user.id}`);
        const del = document.createElement('button');
        del.innerText = 'delete';
        del.setAttribute('id', `del${user.id}`);
        outDiv.appendChild(edit);
        outDiv.appendChild(del);

        wrap.appendChild(outDiv);
    }
    document.body.appendChild(wrap)
    return wrap;
}

function editUser(userId) {
    const array = JSON.parse(localStorage.getItem(users));
    const user = array.find(value => value.id === userId);
    for (const item of form) {
        for (const field in user) {
            if (item.name === field) {
                item.value = user[field];
            }
        }

    }
    id = userId;
}

function deleteUser(userId) {
    let array = JSON.parse(localStorage.getItem(users));
    array = array.filter(value => value.id !== userId);
    localStorage.setItem(users, JSON.stringify(array));
    location.reload();
}