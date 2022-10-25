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
    }
}

document.querySelector('.menu__btn').addEventListener('click', () => {
    document.querySelector('.menu__list').classList.toggle('menu__active');
});
document.querySelector('.application__choose-item').onclick = () => {
    this.onclick.style.color = "backgorund: red";
}


document.querySelector('.application__choose-list').addEventListener('click', (event) => {
    if (!event.target.classList.contains('application__choose-btn')) return;
    event.target.classList.toggle('application__choose-select')
});


// var myCheck = document.getElementById('myCheck');

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