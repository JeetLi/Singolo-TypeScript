var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Окрашивание при наведении
var newOnScroll = function (event) {
    var sections = document.querySelectorAll('section');
    var headerA = document.querySelectorAll('.header_a');
    var heightCoursor = event.pageY;
    sections.forEach(function (section, key) {
        if (heightCoursor >= section.offsetTop) {
            headerA.forEach(function (item) {
                item.classList.remove('ActiveHover');
            });
            headerA[key].classList.add('ActiveHover');
        }
    });
};
window.addEventListener('mousemove', newOnScroll);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Слайды
var slider = document.getElementById('slider2');
var leftBtn = document.getElementById('leftBtns');
var rightBtns = document.getElementById('rightBtns');
var contentWrap = document.querySelector('.btns');
var wrapper = document.querySelectorAll('.content');
var arrayBtns = document.querySelectorAll('.content__button');
var changeImg = function () {
    var showImg = document.querySelector('.showSlide');
    var hideImg = document.querySelector('.hideSlide');
    showImg.classList.remove('showSlide');
    showImg.classList.add('hideSlide');
    hideImg.classList.remove('hideSlide');
    hideImg.classList.add('showSlide');
    wrapper.forEach(function (item) { return item.classList.toggle('blueShadow'); });
    arrayBtns.forEach(function (item) { return item.classList.toggle('blueClr'); });
};
arrayBtns.forEach(function (item) { return item.addEventListener('click', changeImg); });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var verticalPhone = document.querySelector('.verticalPhone');
var horizontPhone = document.querySelector('.horizontPhone');
function switchScreenVerticalPhone() {
    var screenVertical = document.querySelector('.screenVerticalPhone');
    screenVertical.classList.toggle('showScreenVertical');
}
function switchscreenHorizontPhone() {
    var screenHorizont = document.querySelector('.screenHorizontPhone');
    screenHorizont.classList.toggle('showScreenHorizont');
}
verticalPhone.addEventListener('click', switchScreenVerticalPhone);
horizontPhone.addEventListener('click', switchscreenHorizontPhone);
// Добавление бордера
var PortfolioImgs = document.querySelectorAll('.portfolio-img > img');
var portfolioImg = document.querySelector('portfolio-item');
function addBorderOnClick(event) {
    var target = event.target;
    PortfolioImgs.forEach(function (item) {
        // если другой,то убираем   КОД РАБОЧИЙ
        if (target.classList.contains('borderForImg')) {
            return;
        }
        item.classList.remove('borderForImg');
    });
    target.classList.toggle('borderForImg');
}
PortfolioImgs.forEach(function (elem) { return elem.addEventListener('click', addBorderOnClick); });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Рандомные картинки
var switchAlbumButtons = document.querySelectorAll('.switchButtons > button');
var switchImagesOnAlbum = function () {
    var img = document.querySelectorAll('.portfolio-img > img ');
    var randomIndex = Math.floor(Math.random() * img.length);
    var cutImg = img[randomIndex];
    var newImg = __spreadArray([], Array.from(img), true);
    newImg.filter(function (el, index) { return index !== randomIndex; });
    newImg.push(cutImg);
    var portfolioImgs = document.querySelector('.portfolio-img');
    var portsImgs = portfolioImgs;
    portsImgs.innerHTML = '';
    newImg.forEach(function (img) { return portsImgs.appendChild(img); });
    console.log(newImg);
};
switchAlbumButtons.forEach(function (elem) { return (elem.onclick = switchImagesOnAlbum); });
//  Модальное окно
var changeModalWindow = document.querySelector('.submitBtn');
changeModalWindow.addEventListener('click', function (e) {
    // Открываем модальное окно
    e.preventDefault();
    modalWindow.classList.remove('hide');
    modalWindow.classList.add('show');
    // Добавляем текст в модальное окноs
    var SubjectForm = document.getElementById('threeForm');
    var textAreaForm = document.getElementById('textAreaForm');
    var textSubject = SubjectForm === null || SubjectForm === void 0 ? void 0 : SubjectForm.value;
    var textDescription = textAreaForm === null || textAreaForm === void 0 ? void 0 : textAreaForm.value;
    if (textSubject.length < 1 && textDescription.length < 1) {
        textSubject = "Без темы";
        textDescription = "Без описания";
    }
    else if (textDescription.length < 1) {
        textDescription = "Без описания";
    }
    else if (textSubject.length > 1) {
        textDescription = "Без описания";
    }
    else if (textSubject.length < 1) {
        textSubject = "Без темы";
    }
    var modal__subject = document.getElementById('modal__subject');
    var modal__description = document.getElementById('modal__description');
    modal__subject.innerHTML = "Subject: ".concat(textSubject);
    modal__description.innerHTML = "Description: ".concat(textDescription);
});
// закрываем модальное окно
var modalWindow = document.querySelector('.modal');
var modalWall = document.querySelector('.modal__wall');
var modalCloseBtn = document.querySelector('[data-close]');
function closeModal() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
}
modalCloseBtn.addEventListener('click', closeModal);
modalWindow.addEventListener('click', function (e) {
    if (e.target === modalWall) {
        closeModal();
    }
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });
});
// бургер
var burger = document.querySelector('.header__burger-menu');
var burgerButton = document.querySelector('.burger__bottom');
var burger__li = document.querySelectorAll('.burger__li');
var burger__text = document.querySelector('.burger__text');
// const page = document.querySelector.
function hideBurger() {
    burger.classList.toggle('hide');
}
burgerButton.addEventListener('click', function (e) {
    hideBurger();
});
burger.addEventListener('click', function (e) {
    if (e.target === burger) {
        hideBurger();
    }
});
burger__li.forEach(function (elem) { return (elem.onclick = hideBurger); });
// const textForClipboard = document.querySelectorAll('.clipBoard');
// const writeTextForClipboard = (event:) => {
//     navigator.clipboard.writeText(event.target.textContent);
// };
// textForClipboard.forEach((elem) => elem.addEventListener('click', writeTextForClipboard));
