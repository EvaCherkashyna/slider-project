const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const container = document.querySelector('.container')

const slideCount = sidebar.childElementCount;
sidebar.style.top = `-${(slideCount-1)*100}vh`;

let activeSlideIndex = 0;
upBtn.addEventListener('click', ()=>{
    slideIt('up')
})
downBtn.addEventListener('click', ()=>{
    slideIt('down')
})

function slideIt(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0;
        }
    }
    else if (direction == 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount-1;
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform=`translateY(-${activeSlideIndex*height}px)`;
    sidebar.style.transform=`translateY( ${activeSlideIndex*height}px)`;
}
