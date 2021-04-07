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


//-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     model:' Corolla',
//     manufacturer: 'Toyota',
//     year: 2006,
//     maxSpeed:240,
//     motorVol: 2.4,
//       drive () {
//         console.log(`Ми їдемо зі швидкістю ${this.maxSpeed} на годину`)
//       },
// info: function() {
//         console.log(`model: ${this.model}`)
//         console.log(`manufacturer: ${this.manufacturer}`)
//         console.log(`year: ${this.year}`)
//         console.log(`maxSpeed: ${this.maxSpeed}`)
//         console.log(`motor Volume: ${this.motorVol}`)
// },
//
// increaseMaxSpeed: function(newSpeed) {
//         this.maxSpeed += newSpeed;
// },
//
// changeYear: function(newValue) {
//         this.year = newValue;
// },
// addDriver (driver) {
//        this.driver = driver;
// }
// }
//
//
// car.increaseMaxSpeed(30);
// car.changeYear(2008);
// car.addDriver({name:'Vova', age:28})
// car.addDriver({name:'Vova', age:28})
// car.info();
// console.log(car);

// function Car(model,manufacturer,year,maxSpeed,motorVol) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.motorVol = motorVol;
//     function drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     function info () {
//         //         console.log(`model: ${this.model}`)
// //         console.log(`manufacturer: ${this.manufacturer}`)
// //         console.log(`year: ${this.year}`)
// //         console.log(`maxSpeed: ${this.maxSpeed}`)
// //         console.log(`motor Volume: ${this.motorVol}`)
//     }
//
//     function increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     function changeYear (newValue) {
//         this.year = newValue;
//     }
//     function addDriver (driver) {
//         car.driver = driver;
//     }
//
// }

//}

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
// let ken = new Prince('Ken',25,36.1);
// let cinderellas = [];
// let anya = new Cinderella('Anya',20,35.1);
//
// let vika = new Cinderella('Anya',20,35.1);
// let zena = new Cinderella('Anya',20,35.1);
// let olya = new Cinderella('Anya',20,35.1);
// let ira = new Cinderella('Anya',20,36.1);
// let lilya = new Cinderella('Anya',20,35.1);
// let tonya = new Cinderella('Anya',20,35.1);
// let kola = new Cinderella('Anya',20,35.1);
// let bona = new Cinderella('Anya',20,35.1);
// cinderellas.push(vika);
// cinderellas.push(zena);
// cinderellas.push(olya);
// cinderellas.push(ira);
// cinderellas.push(lilya);
// cinderellas.push(kola);
// cinderellas.push(tonya);
// cinderellas.push(bona);
// for (const cinderella of cinderellas) {
//     if(ken.shoe === cinderella.foot) {
//         console.log(`${ken.name} will be with ${cinderella.name}`)
//     }
// }


// let cinderellas = [];
//
// function Cinderella(name,age,foot){
//
// this.name = name;
// this.age = age;
// this.foot = foot;
// }
//
// function Prince(name,age,shoe){
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
//     function cinderellaSearch(cinderellas) {
//         for (const cinderella of Cinderellas) {
//             if(cinderella.foot ===this.shoe) {
//                 return cinderella;
//             }
//         }
//         return false;
//     }
// }
//
// let anya = new Cinderella('Anya',20,35.1);
// let vika = new Cinderella('Anya',20,35.1);
// let zena = new Cinderella('Anya',20,35.1);
// let olya = new Cinderella('Anya',20,35.1);
// let ira = new Cinderella('Anya',20,36.1);
// let lilya = new Cinderella('Anya',20,35.1);
// let tonya = new Cinderella('Anya',20,35.1);
// let kola = new Cinderella('Anya',20,35.1);
// let bona = new Cinderella('Anya',20,35.1);
// cinderellas.push(vika);
// cinderellas.push(zena);
// cinderellas.push(olya);
// cinderellas.push(ira);
// cinderellas.push(lilya);
// cinderellas.push(kola);
// cinderellas.push(tonya);
// cinderellas.push(bona);
//
// let ken = new Prince('ken', 26,36.1);
// console.log(ken.cinderellaSearch(cinderellas));

// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

class Computer {
    constructor(ram, proc) {
        this.ram = ram;
        this.proc = proc;
        if (this.proc > 1000) {
            this.proc = 1000
        }
        if (this.proc < 0) {
            this.proc = 0
        }
    }

    on() {
        console.log('Computer is on')
    }


}

// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends Computer {
    constructor(ram, proc, monitor) {
        super(ram, proc);
        this.monitor = monitor
        this.battaryTime = this.proc / (this.monitor * this.ram);
    }

}

// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Laptop {
    constructor(ram, proc, monitor, weight) {
        super(ram, proc, monitor);
        // this.battaryTime = this.proc/(this.monitor*this.ram);
        this.weight = weight;
    }
    on() {
        console.log('Ultrabuk is on')
        if(this.weight >2 && this.battaryTime >4){
            this.battaryTime = 4
            console.error('Weight is too big')
        }
    }

}

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
    constructor(ram, proc) {
        super(ram, proc);
        this.fps = this.proc/this.ram;
    }

    gameLaunch(game) {
        console.log(`You are playing ${game} with ${this.fps} FSP`);
    }

    upgrade(newRam,newProc) {
        if(newRam > this.ram) {
            this.ram = 2*this.ram
        }
        else {
            this.ram += newRam
        }

        if(newProc > 0.1*this.proc) {
            this.proc = 1.1*this.proc
        }
        else {
            this.proc += newProc;
        }


    }
}


// ===
// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.
class GamerPC extends BasicPC {
    constructor(ram, proc) {
        super(ram, proc);
        this.fps = this.fps *2;
    }
    gameLaunch(game) {
        if(this.proc <500 && this.ram <8) {
            console.error('Your comp is too slow')
        }
        else {
            super.gameLaunch(game);
            this.proc = 0, 9 * this.proc
        }
    }
}