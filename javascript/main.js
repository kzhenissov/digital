document.querySelector('.menu__btn').addEventListener('click', () => {
    document.querySelector('.menu__list').classList.toggle('menu__active');
});
// document.querySelector('.application__choose-item').onclick = () => {
//     this.onclick.style.color = "backgorund: red";
// }
// console.log('clicked')

document.querySelector('.application__choose-list').addEventListener('click', (event) => {
    if (!event.target.classList.contains('application__choose-btn')) return;
    event.target.classList.toggle('application__choose-select')
});

