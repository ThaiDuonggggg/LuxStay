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


/* Slider*/

// const listImage = document.querySelector('.list-image');
// const images = document.querySelectorAll('.slider__img');
// const length = images.length;
// let current = 0;


// setInterval(() => {
//     if (current == length - 1) {
//         current = 0;
//         // let imgWidth = images[0].offsetWidth;
//         listImage.style.transform = `translateX(0px)`;
//     } else {
//         current ++
//         let imgWidth = images[0].offsetWidth
//         listImage.style.transform = `translateX(${imgWidth * - 1 * current}px )`;
//     }
// }, 5000)

/* Nút bấm slider*/



/* Slide 2 */

// const locationSlider = document.querySelector(".row-no-flex-wrap");
// fistImg = locationSlider.querySelectorAll('.location__img')[0];
// arrowIcons = document.querySelectorAll(".location__btn");

// let isDragStart = false, prevPageX, preveScrollLeft;
// let fistImgWidth = fistImg.clientWidth + 14;


// arrowIcons.forEach(icon => {
//     icon.addEventListener('click', () => {
//         locationSlider.scrollLeft += icon.id == "left" ? -fistImgWidth : fistImgWidth;
//     })
// })

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     preveScrollLeft = locationSlider.scrollLeft;
// }

// const dragging = (e) => {

//     if(!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     locationSlider.scrollLeft = preveScrollLeft - positionDiff;
// }

// const dragStop = () => {
//     isDragStart = false;
// }

// locationSlider.addEventListener('mousedown', dragStart);
// locationSlider.addEventListener('mousemove', dragging);
// locationSlider.addEventListener('mouseup', dragStop);