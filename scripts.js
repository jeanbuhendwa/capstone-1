let openMenu = document.getElementById("menu-btn");
let closeMenu = document.getElementById("close-btn");
let navMenu = document.querySelector(".list-menu");
let menuItem = document.querySelectorAll(".menu-item");

function showMenu(){
    navMenu.style.display = 'block';
    navMenu.style.height = '100%';
}

function hideMenu(){
    navMenu.style.display = 'none';
}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

// for (let i = 1; i <= menuItem.length; i++){
//     menuItem[i].addEventListener('click', hideMenu);
// }