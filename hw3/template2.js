//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
//a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'February-2021';
//b) робить шириниу елементу ul 400px
let ulElemnt = document.getElementsByTagName("ul");
ulElemnt[0].style.width = '400px';
//c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName(`linkList`);
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}
//d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
//e) отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.getElementsByTagName('li');
for (let i = 0; i< liElements.length;i++ ){
    liElements[i].style.backgroundColor = 'gray';
}
//f) отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    aElement.classList.add('anchor')
}
//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    if(aElement === 'link') {
        aElement.style.fontSize = '40px';
    }

}
//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aElements = document.getElementsByTagName('a');
aElements.classList.add(aElements.innerText)
//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName('p');
for (const pElement of pElements) {
    pElement.style.padding = '20px';
}
