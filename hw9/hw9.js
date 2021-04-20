// розклад дня на callback, promise, async..await

//=====================================callback===========================================
const energy = 1000;
const money = 500;

// function wakingUp(isDisease, callback) {
//     setTimeout(() => {
//             if (!isDisease) {
//                 callback(null, 'what a beatiful day');
//
//             } else {
//                 callback('I have to sleep more');
//             }
//         }, 50);
// }
//
// function watchVideo(isVideoDowloaded, callback) {
//     setTimeout(() => {
//             if (isVideoDowloaded) {
//                 callback(null, 'I kwow much more now');
//             } else {
//                 callback('Waiting.......');
//             }
//         }, 2000);
// }
//
// function eating(productNumber, callback) {
//     setTimeout(() => {
//             if (productNumber > 2) {
//                 console.log('I\'m full now');
//                 callback(null, energy);
//             } else {
//                 callback('You have to buy food');
//
//             }
//         }, 150);
// }
//
// function walking(energy, callback) {
//     setTimeout(() => {
//             if (energy > 300) {
//                 console.log('It was a long walk.' );
//                 callback(null, energy - 300);
//             } else {
//                 callback('I have to relax');
//             }
//         }, 1500);
// }
//
// function doingExerxises(energy, callback) {
//     setTimeout(() => {
//             if (energy > 200) {
//                 console.log('Now i\'m tired a bit.');
//                 callback(null, energy - 200);
//             } else {
//                 console.log('I\'ll do it tomorrow');
//             }
//         }, 300);
// }
//
// function doingHomework(energy, callback) {
//     setTimeout(() => {
//             if (energy > 400) {
//                 console.log(`So it can be done that way..`);
//                 callback(null, energy - 400);
//             } else {
//                 callback('I have to watch video one more time');
//             }
//         }, 3000);
// }
//
// function shopping(money, callback) {
//     setTimeout(() => {
//             if (money > 100) {
//                 console.log('Now I have products for a few days.');
//                 callback(null,money - 100);
//             } else {
//                 callback('I can eat bread with mayonnaise');
//             }
//         }, 500);
// }
//
//
// wakingUp(false, (error, data) => {
//     if (!error) {
//         console.log(data);
//         watchVideo(true, (error, data) => {
//             if (!error) {
//                 console.log(data);
//                 eating(3, (error, energy) => {
//                     if (!error) {
//                         console.log(`Energy: ${energy}`);
//                         walking(energy, (error, energy) => {
//                             if (!error) {
//                                 console.log(`Energy: ${energy}`);
//                                 doingHomework(energy, (error, energy) => {
//                                     if (!error) {
//                                         console.log(`Energy: ${energy}`);
//                                         doingExerxises(energy, (error, energy) => {
//                                             if (!error) {
//                                                 console.log(`Energy: ${energy}`);
//                                                 shopping(money, (error, money) => {
//                                                     if (!error) {
//                                                         console.log(`Money ${money}`);
//                                                     } else {
//                                                         console.log(error);
//                                                     }
//                                                 });
//                                             } else {
//                                                 console.log(error);
//                                             }
//                                         });
//                                     } else {
//                                         console.log(error);
//                                     }
//                                 });
//                             } else {
//                                 console.log(error);
//                             }
//                         });
//                     } else {
//                         console.log(error);
//                     }
//                 });
//             } else {
//                 console.log(error);
//             }
//         });
//     } else {
//         console.log(error);
//     }
// });

//==================================Promise========================================================================

// function wakingUp(isDisease) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (!isDisease) {
//                     resolve( 'what a beautiful day');
//                 } else {
//                     reject('I have to sleep more');
//                 }
//             }, 50)
//     })
// }
//
// function watchVideo(isVideoDownloaded) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (isVideoDownloaded) {
//                     resolve( 'I kwow much more now');
//                 } else {
//                     reject('Waiting.......');
//                 }
//             }, 2000)
//     })
// }
//
// function eating(productNumber) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (productNumber > 2) {
//                     console.log('I\'m full now');
//                     resolve(energy);
//                 } else {
//                     reject('You have to buy food');
//                 }
//             }, 150);
//     });
// }
//
// function walking(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (energy > 300) {
//                     console.log('It was a long walk.');
//                     resolve( energy - 300);
//                 } else {
//                     reject('I have to relax');
//                 }
//             }, 1500);
//     });
// }
//
// function doingExercises(energy) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//                 if (energy > 200) {
//                     console.log('Now i\'m tired a bit.');
//                     resolve( energy - 200);
//                 } else {
//                     reject('I\'ll do it tomorrow');
//                 }
//             }, 300);
//     } );
// }
//
// function doingHomework(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (energy > 400) {
//                     console.log(`So it can be done that way..`);
//                     resolve(energy - 400);
//                 } else {
//                     reject('I have to watch video one more time');
//                 }
//             }, 3000);
//     });
// }
//
// function shopping(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (money > 100) {
//                     console.log('Now I have products for a few days.');
//                     resolve(money - 100 );
//                 } else {
//                     reject('I can eat bread with mayonnaise');
//                 }
//             }, 500);
//     });
// }
//
// wakingUp(false)
// .then(text => {
//     console.log(text);
// return watchVideo(true);
// })
//     .then(text => {
//         console.log(text);
//         return eating(3);
//     })
//     .then(energy => {
//         console.log(`Energy: ${energy}`);
//         return walking(energy);
//     })
//     .then(energy => {
//         console.log(`Energy: ${energy}`);
//         return doingExercises(energy);
//     })
//     .then(energy => {
//         console.log(`Energy: ${energy}`);
//         return doingHomework(energy);
//     })
//
//     .then(energy => {
//         console.log(`Energy: ${energy}`);
//         return shopping(money);
//     })
//     .then(money => {
//         console.log(`Money: ${money}`);
//
//     })
//     .catch(err =>{
//         console.log(err);
//     });

//================================Async...await=========================================================================

// function wakingUp(isDisease) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (!isDisease) {
//                     resolve( 'what a beautiful day');
//                 } else {
//                     reject('I have to sleep more');
//                 }
//             }, 50)
//     })
// }
//
// function watchVideo(isVideoDownloaded) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (isVideoDownloaded) {
//                     resolve( 'I kwow much more now');
//                 } else {
//                     reject('Waiting.......');
//                 }
//             }, 2000)
//     })
// }
//
// function eating(productNumber) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (productNumber > 2) {
//                     console.log('I\'m full now');
//                     resolve(energy);
//                 } else {
//                     reject('You have to buy food');
//                 }
//             }, 150);
//     });
// }
//
// function walking(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (energy > 300) {
//                     console.log('It was a long walk.');
//                     resolve( energy - 300);
//                 } else {
//                     reject('I have to relax');
//                 }
//             }, 1500);
//     });
// }
//
// function doingExercises(energy) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//                 if (energy > 200) {
//                     console.log('Now i\'m tired a bit.');
//                     resolve( energy - 200);
//                 } else {
//                     reject('I\'ll do it tomorrow');
//                 }
//             }, 300);
//     } );
// }
//
// function doingHomework(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (energy > 400) {
//                     console.log(`So it can be done that way..`);
//                     resolve(energy - 400);
//                 } else {
//                     reject('I have to watch video one more time');
//                 }
//             }, 3000);
//     });
// }
//
// function shopping(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (money > 100) {
//                     console.log('Now I have products for a few days.');
//                     resolve(money - 100 );
//                 } else {
//                     reject('I can eat bread with mayonnaise');
//                 }
//             }, 500);
//     });
// }
//
// async function dayActivity() {
//     try {
//        const wakeUp = await wakingUp(false);
//         console.log(wakeUp);
//         const watch = await watchVideo(true);
//         console.log(watch);
//         let energy = await eating(3);
//         console.log(`Energy: ${energy}`);
//         energy = await walking(energy);
//         console.log(`Energy: ${energy}`);
//         energy = await doingHomework(energy);
//         console.log(`Energy: ${energy}`);
//         energy = await doingExercises(energy);
//         console.log(`Energy: ${energy}`);
//         const mon = await  shopping(money);
//         console.log(`Money: ${mon}`);
//     } catch (err) {
//         console.warn(err);
//     }
//
//
//
// }
//
// dayActivity();


//=======================Друкарська машинка==================================================================================

// function  printLetter(letter) {
//     return new Promise((resolve) =>
//     {
//         setTimeout(() => {
//               if(letter)  {
//                   resolve(letter);
//               }
//             }, Math.floor(Math.random() * (1000 - 100) + 100));
//     });
// }
//
// let string = 'Hello,world';
// async function printingMachine(str) {
//         for (const letter  of str) {
//             let lett = await printLetter(letter);
//             document.write(lett);
//         }
// }
//
// printingMachine(string);