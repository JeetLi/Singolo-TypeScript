//Окрашивание при наведении
const newOnScroll = (event: MouseEvent) => {
    const sections: NodeListOf<Element> = document.querySelectorAll('section');
    const headerA: NodeListOf<Element> = document.querySelectorAll('.header_a');
    const heightCoursor = event.pageY;

    sections.forEach((section, key: number) => {
        if (heightCoursor >= (section as HTMLElement).offsetTop) {
            headerA.forEach((item) => {
                item.classList.remove('ActiveHover');
            });
            headerA[key].classList.add('ActiveHover');
        }
    });
};
window.addEventListener('mousemove', newOnScroll);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Слайды
const slider: HTMLElement | null = document.getElementById('slider2');
const leftBtn: HTMLElement | null = document.getElementById('leftBtns');
const rightBtns: HTMLElement | null = document.getElementById('rightBtns');
const contentWrap: Element | null = document.querySelector('.btns');
const wrapper: NodeListOf<Element> = document.querySelectorAll('.content');
const arrayBtns: NodeListOf<Element> = document.querySelectorAll('.content__button');

const changeImg = () => {
    const showImg: HTMLElement | null = document.querySelector('.showSlide');
    const hideImg: HTMLElement | null = document.querySelector('.hideSlide');

    (showImg as HTMLElement).classList.remove('showSlide');
    (showImg as HTMLElement).classList.add('hideSlide');
    (hideImg as HTMLElement).classList.remove('hideSlide');
    (hideImg as HTMLElement).classList.add('showSlide');

    wrapper.forEach((item) => item.classList.toggle('blueShadow'));
    arrayBtns.forEach((item) => item.classList.toggle('blueClr'));
};

arrayBtns.forEach((item) => item.addEventListener('click', changeImg));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const verticalPhone: Element | null = document.querySelector('.verticalPhone');
const horizontPhone: Element | null = document.querySelector('.horizontPhone');

function switchScreenVerticalPhone() {
    const screenVertical = document.querySelector('.screenVerticalPhone');
    (screenVertical as Element).classList.toggle('showScreenVertical');
}
function switchscreenHorizontPhone() {
    const screenHorizont = document.querySelector('.screenHorizontPhone');
    (screenHorizont as Element).classList.toggle('showScreenHorizont');
}
(verticalPhone as Element).addEventListener('click', switchScreenVerticalPhone);
(horizontPhone as Element).addEventListener('click', switchscreenHorizontPhone);
// Добавление бордера

const PortfolioImgs = document.querySelectorAll('.portfolio-img > img');
const portfolioImg = document.querySelector('portfolio-item');

function addBorderOnClick(event:Event) {
    const target = event.target
    PortfolioImgs.forEach((item) => {
        
        // если другой,то убираем   КОД РАБОЧИЙ
        if ((target as Element).classList.contains('borderForImg')) {
            return;
        }
        item.classList.remove('borderForImg');
    });
    (target as Element).classList.toggle('borderForImg');
}
PortfolioImgs.forEach((elem) => elem.addEventListener('click', addBorderOnClick));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Рандомные картинки
const switchAlbumButtons = document.querySelectorAll('.switchButtons > button');

interface ArrayConstructor {
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>;
    from<T>(arrayLike: ArrayLike<T>): Array<T>;
}

const switchImagesOnAlbum = () => {
    const img = document.querySelectorAll('.portfolio-img > img ');
    const randomIndex = Math.floor(Math.random() * img.length);
    const cutImg = img[randomIndex];
    const newImg = [...Array.from(img)];
    newImg.filter((el, index) => index !== randomIndex);
    newImg.push(cutImg);
    const portfolioImgs = document.querySelector('.portfolio-img');
    let portsImgs = portfolioImgs as HTMLImageElement
    portsImgs.innerHTML = '';
    newImg.forEach((img) => portsImgs.appendChild(img));
    console.log(newImg);
};

switchAlbumButtons.forEach((elem) => ((elem as HTMLElement).onclick = switchImagesOnAlbum));

//  Модальное окно
const changeModalWindow = document.querySelector('.submitBtn') as HTMLButtonElement;

changeModalWindow.addEventListener('click', (e) => {
    // Открываем модальное окно
    e.preventDefault();
    modalWindow.classList.remove('hide');
    modalWindow.classList.add('show');

    // Добавляем текст в модальное окноs

    const SubjectForm = document.getElementById('threeForm') as HTMLInputElement  
    const textAreaForm = document.getElementById('textAreaForm') as HTMLInputElement  

    let textSubject = SubjectForm?.value;
    let textDescription = textAreaForm?.value;

    if (textSubject.length < 1 && textDescription.length < 1 ) {
        textSubject = "Без темы"; 
        textDescription = "Без описания"; 
    } else if (textDescription.length < 1 ){
        textDescription = "Без описания";
    } else if (textSubject.length > 1 ){
        textDescription = "Без описания";
    } else if (textSubject.length < 1) {
        textSubject = "Без темы";}

    const modal__subject = document.getElementById('modal__subject') as HTMLTextAreaElement;
    const modal__description = document.getElementById('modal__description')as HTMLTextAreaElement;

    modal__subject.innerHTML = `Subject: ${textSubject}`;
    modal__description.innerHTML = `Description: ${textDescription}`;
});
// закрываем модальное окно
const modalWindow = document.querySelector('.modal') as HTMLElement;
const modalWall = document.querySelector('.modal__wall');
const modalCloseBtn = document.querySelector('[data-close]') as HTMLButtonElement;


function closeModal() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
}

modalCloseBtn.addEventListener('click', closeModal);

modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWall) {
        closeModal();
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });
});

// бургер

const burger = document.querySelector('.header__burger-menu') as HTMLElement;
const burgerButton = document.querySelector('.burger__bottom') as HTMLButtonElement;
const burger__li = document.querySelectorAll('.burger__li');
const burger__text = document.querySelector('.burger__text');
// const page = document.querySelector.

function hideBurger() {
    burger.classList.toggle('hide');
}

burgerButton.addEventListener('click', (e) => {
    hideBurger();
});

burger.addEventListener('click', (e) => {
    if (e.target === burger) {
        hideBurger();
    }
});

burger__li.forEach((elem) => ((elem as HTMLElement).onclick = hideBurger));

// const textForClipboard = document.querySelectorAll('.clipBoard');
// const writeTextForClipboard = (event:) => {
//     navigator.clipboard.writeText(event.target.textContent);
// };

// textForClipboard.forEach((elem) => elem.addEventListener('click', writeTextForClipboard));


