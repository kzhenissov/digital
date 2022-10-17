// document.querySelector('.menu__btn').addEventListener('click', () => {
//     document.querySelector('.menu__list').classList.toggle('menu__active');
// });
// document.querySelector('.application__choose-item').onclick = () => {
//     this.onclick.style.color = "backgorund: red";
// }
// console.log('clicked')

// document.querySelector('.application__choose-list').addEventListener('click', (event) => {
//     if (!event.target.classList.contains('application__choose-btn')) return;
//     event.target.classList.toggle('application__choose-select')
// });
var myCheck = document.getElementById('myCheck');

// if(myCheck.checked) {
//     document.getElementById("header").classList.add("bg-dark");
//         document.getElementById("header").style.backgroundImage = 'url(images/header-bg-dark-1.jpg)'

//         document.getElementById("achievement").classList.add('bg-dark')
//         document.getElementById("services").classList.add('bg-dark')
// } else {
//     document.getElementById("header").classList.remove("bg-dark");
//     document.getElementById("header").style.backgroundImage = 'url(images/header-bg-light.jpg)'
//     document.getElementById("achievement").classList.remove("bg-dark");
//     document.getElementById("services").classList.remove("bg-dark");
// }
changeTheme = () => {
    if (myCheck.checked) {
        document.getElementById("header").classList.add("bg-dark");
        document.getElementById("header").style.backgroundImage = 'url(images/header-bg-dark-1.jpg)'

        document.getElementById("achievement").classList.add('bg-dark')
        document.getElementById("services").classList.add('bg-dark')
        
    } else {
        document.getElementById("header").classList.remove("bg-dark");
        document.getElementById("header").style.backgroundImage = 'url(images/header-bg-light.jpg)'
        document.getElementById("achievement").classList.remove("bg-dark");
        document.getElementById("services").classList.remove("bg-dark");
        
        // background-image: url(../images/services-bg.svg);
    }
}

//проверяем при загрузке наличие ключа, если первый запуск, то устанавливаем дефолтное значение
// if (!localStorage.getItem('todos')) localStorage.setItem('todos','sun')
                     
// //запускаем функцию смены темы при загрузке страницы
// changeTheme()
        
// //Функция смены значения в `lcoalStorage`, срабатывает при нажатии вашей кнопки
// let moon = document.getElementById("moonA");
// moon.onclick = function () {
//    if (localStorage.getItem('todos') == 'moon') 
//        localStorage.setItem('todos','sun')
//    else localStorage.setItem('todos','moon')
//    changeTheme()
// }
                
// //назовите стили `sunStyle.css` и `moonStyle.css`, чтобы сразу подставлять нужные значения.
// //Сама функция смены стилей
// function changeTheme(){            
//    let theme = localStorage.getItem('todos')
//    document.getElementById("glownystyle").href = `${theme}Style.css`
//    document.getElementById("moon").src = `${theme}.svg`
// }
