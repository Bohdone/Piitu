"use strict";
// создаем <link rel="stylesheet" href="light|dark.css">
let head = document.head,
  link = document.createElement("link");
link.rel = "stylesheet";
// проверяем значение из localStorage если dark то темная тема
if (localStorage.getItem("themeStyle") === "light") {
  link.href = "./css/light.css"; // ссылка на темный стиль
  document.getElementById("toggle--daynight").setAttribute("checked", true); // переключаем чекбокс в положение "темная тема"
}
// по умолчанию светлая тема
else {
  link.href = "./css/dark.css"; // ссылка на светлый стиль
}
head.appendChild(link); // вставляем <link rel="stylesheet" href="light|dark.css"> в шапку страницы между темаги head

// событие при переключении чекбокса
document.getElementById("toggle--daynight").addEventListener("change", ev => {
  let btn = ev.target;
  // если чекбокс включен
  if (btn.checked) {
    link.href = "./css/light.css"; // сключаем темную тему
    localStorage.setItem("themeStyle", "light"); // записываем значение в localStorage
  } else {
    link.href = "./css/dark.css"; // включаем светлую тему
    localStorage.setItem("themeStyle", "dark"); // записываем значение в localStorage
  }
});
