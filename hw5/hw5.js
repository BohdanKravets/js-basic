//-  Створити функцію конструктор для об'єкту який описує теги
//Властивості
//-назва тегу
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru
//Таким чином описати теги
//-a
//-div
//-h1
//-span
//-input
//-form
//-option
//-select
//Приклад результату
//{
//    titleOfTag: 'area',
//        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//    attrs: [
//    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//    {/*some props and values*/},
//    {/*...*/},
//    {/*...*/},
//]
//})

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let aTag = new Tag('a',
//     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',
//     [
//         {
//             titleOfAttr: 'accesskey',
//             actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'
//         },
//         {
//             titleOfAttr: 'coords',
//             actionOfAttr: 'Устанавливает координаты активной области'
//         },
//         {
//             titleOfAttr: 'href',
//             actionOfAttr: 'Задает адрес документа, на который следует перейти'
//         }
//     ]);
// console.log(aTag);
//
// let divTag = new Tag('div',
//     'Элемент <div>  предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//     [
//         {
//             titleOfAttr: 'title',
//             actionOfAttr: 'Задает выравнивание содержимого тега <div>'
//         },
//         {
//             titleOfAttr: 'align',
//             actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'
//         }
//     ]);
// console.log(divTag);
//
//
// let h1Tag = new Tag('h1',
//     'Тег <h1> представляет собой наиболее важный заголовок первого уровня, ',
//     [
//         {
//             titleOfAttr: 'align',
//             actionOfAttr: 'Определяет выравнивание заголовка'
//         }
//     ]);
// console.log(h1Tag);
// let spanTag = new Tag('span',
//     'Каждый элемент <area> определяет активные области изображения, которые являются ссылками...',
//     [{
//         actionOfAttr: 'Переход к области с помощью комбинации клавиш',
//         titleOfAttr: 'accesskey'
//     }]);
//
//
// console.log(spanTag);
// let inputTag = new Tag('input',
//     'Тег <input> позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{
//         titleOfAttr: 'accept',
//         actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
//     }]);
// console.log(inputTag);
// let formTag = new Tag('form',
//     'Каждый элемент <area> определяет активные области изображения, которые являются ссылками...',
//     [
//         {
//             titleOfAttr: 'accept',
//             actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'
//         },
//         {
//             titleOfAttr: 'align',
//             actionOfAttr: 'Определяет выравнивание изображения'
//         }
//
//     ]);
// console.log(formTag);
//
// let optionsTag = new Tag('options',
//     'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//     [
//         {
//             titleOfAttr: 'disabled',
//             actionOfAttr: 'Заблокировать для доступа элемент списка'
//         },
//         {
//             titleOfAttr: 'label',
//             actionOfAttr: 'Указание метки пункта списка'
//         },
//         {
//             titleOfAttr: 'selected',
//             actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'
//         }
//     ]);
// console.log(optionsTag);
//
// let selectionTag = new Tag('selection',
//     'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//     [
//         {
//             titleOfAttr: 'autofocus',
//             actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
//         },
//         {
//             titleOfAttr: 'form',
//             actionOfAttr: 'Связывает список с формой'
//         }
//     ]);
// console.log(selectionTag);


// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//
// let aTag = new Tag('a',
//     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',
//     [
//         {
//             titleOfAttr: 'accesskey',
//             actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'
//         },
//         {
//             titleOfAttr: 'coords',
//             actionOfAttr: 'Устанавливает координаты активной области'
//         },
//         {
//             titleOfAttr: 'href',
//             actionOfAttr: 'Задает адрес документа, на который следует перейти'
//         }
//     ]);
// console.log(aTag);
//
// let divTag = new Tag('div',
//     'Элемент <div>  предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//     [
//         {
//             titleOfAttr: 'title',
//             actionOfAttr: 'Задает выравнивание содержимого тега <div>'
//         },
//         {
//             titleOfAttr: 'align',
//             actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'
//         }
//     ]);
// console.log(divTag);
//
//
// let h1Tag = new Tag('h1',
//     'Тег <h1> представляет собой наиболее важный заголовок первого уровня, ',
//     [
//         {
//             titleOfAttr: 'align',
//             actionOfAttr: 'Определяет выравнивание заголовка'
//         }
//     ]);
// console.log(h1Tag);
//
// let spanTag = new Tag('span',
//     'Каждый элемент <area> определяет активные области изображения, которые являются ссылками...',
//     [{
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Переход к области с помощью комбинации клавиш'
//     }]);
// console.log(spanTag);
// let inputTag = new Tag('input',
//     'Тег <input> позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{
//         titleOfAttr: 'accept',
//         actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
//     }]);
// console.log(inputTag);
// let formTag = new Tag('form',
//     'Каждый элемент <area> определяет активные области изображения, которые являются ссылками...',
//     [
//         {
//             titleOfAttr: 'accept',
//             actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'
//         },
//         {
//             titleOfAttr: 'align',
//             actionOfAttr: 'Определяет выравнивание изображения'
//         }
//
//     ]);
// console.log(formTag);
//
// let optionsTag = new Tag('options',
//     'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//     [
//         {
//             titleOfAttr: 'disabled',
//             actionOfAttr: 'Заблокировать для доступа элемент списка'
//         },
//         {
//             titleOfAttr: 'label',
//             actionOfAttr: 'Указание метки пункта списка'
//         },
//         {
//             titleOfAttr: 'selected',
//             actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'
//         }
//     ]);
// console.log(optionsTag);
//
// let selectionTag = new Tag('selection',
//     'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//     [
//         {
//             titleOfAttr: 'autofocus',
//             actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
//         },
//         {
//             titleOfAttr: 'form',
//             actionOfAttr: 'Связывает список с формой'
//         }
//     ]);
// console.log(selectionTag);


//-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: ' Corolla',
//     manufacturer: 'Toyota',
//     year: 2006,
//     maxSpeed: 240,
//     motorVol: 2.4,
//     driver: null,
//
//     drive: function () {
//         console.log(`Ми їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//
//     info: function () {
//         console.log(`model: ${this.model}`)
//         console.log(`manufacturer: ${this.manufacturer}`)
//         console.log(`year: ${this.year}`)
//         console.log(`maxSpeed: ${this.maxSpeed}`)
//         console.log(`motor Volume: ${this.motorVol}`)
//         for (const key in this.driver) {
//             console.log(`Driver ${key}: ${this.driver[key]}`)
//         }
//     },
//
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//
//     changeYear: function (newYear) {
//         this.year = newYear;
//     },
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// car.drive();
// car.increaseMaxSpeed(30);
// car.changeYear(2008);
// car.addDriver({name: 'Vova', age: 28})
//
// car.info();
// console.log(car);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, motorVol) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.motorVol = motorVol;
//     this.driver = null;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     this.info = function () {
//         console.log(`model: ${this.model}`)
//         console.log(`manufacturer: ${this.manufacturer}`)
//         console.log(`year: ${this.year}`)
//         console.log(`maxSpeed: ${this.maxSpeed}`)
//         console.log(`motor Volume: ${this.motorVol}`)
//         for (const key in this.driver) {
//             console.log(`Driver ${key}: ${this.driver[key]}`)
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newYear) {
//         this.year = newYear;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// let car1 = new Car(911, 'Porshe', 2011, 270, 3.0);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(30);
// car1.changeYear(2013);
// car1.addDriver({name: 'Vanya'});
// car1.info();

// class Car {
//     constructor(model, manufacturer, year, maxSpeed, motorVol) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.motorVol = motorVol;
//         this.driver = null;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         console.log(`model: ${this.model}`)
//         console.log(`manufacturer: ${this.manufacturer}`)
//         console.log(`year: ${this.year}`)
//         console.log(`maxSpeed: ${this.maxSpeed}`)
//         console.log(`motor Volume: ${this.motorVol}`)
//         for (const key in this.driver) {
//             console.log(`Driver ${key}: ${this.driver[key]}`)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newYear) {
//         this.year = newYear;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
//
// let car1 = new Car('Lanos', 'Dewoo', 2006, 180, 1.6);
// car1.drive();
// car1.info();
// car1.changeYear(2005);
// car1.increaseMaxSpeed(10);
// car1.addDriver({name: 'Anirii', age: 40})
// car1.info();

// створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Human {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human{
//     constructor(name,age,foot) {
//         super(name,age);
//         this.foot = foot;
//     }
// }
//
// class Prince extends Human{
//     constructor(name,age,shoe) {
//         super(name,age);
//         this.shoe = shoe;
//     }
// }
//
// let vanya = new Prince('Vanya',25,36);
// let cinderellas = [];
// let anya = new Cinderella('Anya',20,34);
// let vika = new Cinderella('Vika',24,34.5);
// let zena = new Cinderella('Zena',20,35);
// let olya = new Cinderella('Olya',19,35.5);
// let ira = new Cinderella('Ira',20,36);
// let lilya = new Cinderella('Lilya',36.5);
// let tonya = new Cinderella('Tonya',22,37);
// let kat = new Cinderella('Kat',20,37.5);
// let bona = new Cinderella('Bona',19,38);
// let masha = new Cinderella('Masha',21,38.5)
// cinderellas.push(anya)
// cinderellas.push(vika);
// cinderellas.push(zena);
// cinderellas.push(olya);
// cinderellas.push(ira);
// cinderellas.push(lilya);
// cinderellas.push(tonya);
// cinderellas.push(kat);
// cinderellas.push(bona);
// cinderellas.push(masha);
// for (const cinderella of cinderellas) {
//     if(vanya.shoe === cinderella.foot) {
//         console.log(`${vanya.name} will be with ${cinderella.name}`)
//     }
// }


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// let cinderellas = [];
//
// function Cinderella(name, age, foot) {
//     this.name = name;
//     this.age = age;
//     this.foot = foot;
// }
//
// function Prince(name, age, shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
//
//     this.cinderellaSearch = function (cinderellas) {
//         for (const cinderella of cinderellas) {
//             if (cinderella.foot === this.shoe) {
//                 return cinderella;
//             }
//         }
//         return 'Not found';
//     }
// }
//
// let cinderella1 = new Cinderella('Anya', 20, 34);
// let cinderella2 = new Cinderella('Vika', 24, 34.5);
// let cinderella3 = new Cinderella('Zena', 20, 35);
// let cinderella4 = new Cinderella('Olya', 19, 35.5);
// let cinderella5 = new Cinderella('Ira', 20, 36);
// let cinderella6 = new Cinderella('Lilya', 36.5);
// let cinderella7 = new Cinderella('Tonya', 22, 37);
// let cinderella8 = new Cinderella('Kat', 20, 37.5);
// let cinderella9 = new Cinderella('Bona', 19, 38);
// let cinderella10 = new Cinderella('Masha', 21, 38.5)
// cinderellas.push(cinderella1);
// cinderellas.push(cinderella2);
// cinderellas.push(cinderella3);
// cinderellas.push(cinderella4);
// cinderellas.push(cinderella5);
// cinderellas.push(cinderella6);
// cinderellas.push(cinderella7);
// cinderellas.push(cinderella8);
// cinderellas.push(cinderella9);
// cinderellas.push(cinderella10);
//
// let prince1 = new Prince('Misha', 26, 34.5);
// console.log(prince1.cinderellaSearch(cinderellas));


// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

class Computer {
    constructor(ram, procPow) {
        this.ram = ram;
        this.procPow = procPow;
        if (this.procPow > 1000) {
            this.procPow = 1000
        }
        if (this.proc < 0) {
            this.proc = 0
        }
    }

    turnOn() {
        console.log('Computer is on')
    }
}

const comp1 = new Computer(4, 1020);
comp1.turnOn();
console.log(comp1);

// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends Computer {
    constructor(ram, procPow, monitorDiag) {
        super(ram, procPow);
        this.monitorDiag = monitorDiag
        this.batteryTime = this.procPow / (this.monitorDiag * this.ram);
    }

}

const laptop1 = new Laptop(8, 500, 15.6);
console.log(laptop1);

// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Laptop {
    constructor(ram, procPow, monitor, weight) {
        super(ram, procPow, monitor);
        this.weight = weight;
    }

    turnOn() {
        if (this.weight > 2 && this.batteryTime < 4) {
            console.error('Weight is too big')
        } else {
            console.log('Ultrabook is on')
        }
    }

}

const ultrabook1 = new Ultrabook(4, 100, 12, 2.5);
ultrabook1.turnOn();
console.log(ultrabook1);

// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// Компютер можна апгрейдити.
//     Потужність процесора мramожна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class BasicPC extends Computer {
    constructor(ram, procPow) {
        super(ram, procPow);
        this.fps = this.procPow / this.ram;
    }

    gameLaunch(game) {
        console.log(`You are playing ${game} with ${this.fps} FSP`);
    }

    upgradeRam(newRam) {
        if (newRam > (2.0 * this.ram)) {
            newRam = 2.0 * this.ram
        } else if (newRam < this.ram) {
            newRam = this.ram;
        }
        this.ram = newRam;
    }

    upgradeProc(newProc) {
        if (newProc > (1.1 * this.procPow)) {
            newProc = 1.1 * this.procPow
        } else if (newProc < this.procPow) {
            newProc = this.procPow;
        }
        this.procPow = newProc;
    }

}

const baseComp1 = new BasicPC(16, 700);
baseComp1.gameLaunch('GTA');
console.log(baseComp1);
baseComp1.upgradeRam(33);
baseComp1.upgradeProc(600);
console.log(baseComp1);
// ===
// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.
class GamerPC extends BasicPC {
    constructor(ram, procPow) {
        super(ram, procPow);
        this.fps = 2 * this.fps;
    }

    gameLaunch(game) {
        if (this.procPow < 500 && this.ram < 8) {
            console.error('Your comp is too slow')
        } else {
            console.log(`You are playing ${game} with ${this.fps} FSP`);
            this.procPow = 0.9 * this.procPow
        }
    }
}

const gameComp1 = new GamerPC(6, 600);
console.log(gameComp1);
gameComp1.gameLaunch('NFS');
gameComp1.gameLaunch('FIFA');
console.log(gameComp1);
gameComp1.gameLaunch('Gothic');
console.log(gameComp1);