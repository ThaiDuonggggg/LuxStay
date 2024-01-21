/* Viết sự kiện thêm class vào change__language
 khi click vào header__nav-language */

const headerLanguage = document.querySelector('.header__nav-language');
const changeLanguage = document.querySelector('.change__languages');

// toggle: Nếu click vào chưa có class show thì thêm vào, lần click tiếp theo nếu có class show thì sẽ xóa đi class đó

// Cách 1
headerLanguage.onclick = function () {
    changeLanguage.classList.toggle('show');   
}

// Cách 2

// function showChanguageLanguages() {
//     changeLanguage.classList.toggle('show');
// }

// headerLanguage.addEventListener('click', showChanguageLanguages);

/* Bắt sự kiện khi click vào nút bars thì hiện ra language */

const btnMobile = document.querySelector('.nav__mobile--show-btn');
const overlayMobile = document.querySelector('.nav__overlay');
const navMobile = document.querySelector('.nav__mobile');
const btnClose = document.querySelector('.nav__mobile-close');
const mobileLanguages = document.querySelector('.nav__mobile-language');
const mobileChangeLanguages = document.querySelector('.nav__mobile-change-languages');

/* Lắng nghe sự kiện click
    - Khi click vào nút btnMobile thì sẽ thêm class vào over lay
*/ 
btnMobile.onclick = function () {
    overlayMobile.classList.add('show-overlay');
    navMobile.classList.add('show-nav__mobile');
}

function hideNavMobile() {
    navMobile.classList.remove('show-nav__mobile');
    overlayMobile.classList.remove('show-overlay');
}

btnClose.addEventListener('click', hideNavMobile);

overlayMobile.addEventListener('click', hideNavMobile);


function onChangeLanguages() {
    mobileChangeLanguages.classList.toggle('show-languages__moblie');
}

mobileLanguages.addEventListener('click', onChangeLanguages);