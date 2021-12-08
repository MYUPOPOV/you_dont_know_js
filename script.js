"use strick";

const book = document.querySelectorAll(".book");
console.log("~ books", book);

book[0].before(book[1]);
book[5].after(book[2]);
book[3].before(book[4]);

document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

const titleBook3 = book[4].querySelector("a");
console.log("~ titleBook3", titleBook3);
titleBook3.textContent = "Книга 3. this и Прототипы Объектов";

const adv = document.querySelector(".adv");
adv.style.display = "none";

const chaptersBook2 = book[0].querySelectorAll("li");
console.log("~ chaptersBook2", chaptersBook2);

chaptersBook2[3].after(chaptersBook2[6]);
chaptersBook2[6].after(chaptersBook2[8]);
chaptersBook2[6].after(chaptersBook2[8]);
chaptersBook2[9].after(chaptersBook2[2]);

const chaptersBook5 = book[5].querySelectorAll("li");
console.log("~ chaptersBook5", chaptersBook5);

chaptersBook5[1].after(chaptersBook5[9]);
chaptersBook5[9].after(chaptersBook5[3]);
chaptersBook5[3].after(chaptersBook5[4]);
chaptersBook5[7].after(chaptersBook5[5]);

const chaptersBook6 = book[2].querySelectorAll("li");
console.log("~ chaptersBook6", chaptersBook6);

const newChapter8Book6 = document.createElement("li");
newChapter8Book6.innerHTML = "Глава 8: За пределами ES6";
chaptersBook6[8].after(newChapter8Book6);
