// Находим кнопку мобильного меню
const navButton = document.querySelector('.nav-button');

const mobileNav = document.querySelector('.mobile-nav');

// Вешаем на найденную кнопку событие КЛИК
navButton.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-nav-active')
    navButton.classList.toggle('nav-button-close')
})

// classList - это такое свойство, которое содержит методы для работы с классами элементами (добавить, удалить, включить или выключить)