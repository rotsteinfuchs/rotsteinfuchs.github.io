// # Mostly made by ChatGPT

function isMobile() {
    return window.innerWidth <= 768;
}

function diagonalScroll() {
    const wrapper = document.getElementById("wrapper");    
    const maxX = wrapper.getBoundingClientRect().width - window.innerWidth;
    const maxY = wrapper.getBoundingClientRect().height - window.innerHeight;
    const x = window.scrollX || window.pageXOffset;
    const y = window.scrollY || window.pageYOffset;
    if (isMobile()) {
        window.scrollTo({ top: x * (maxY / maxX) });
    } else {
        window.scrollTo({ left: y * (maxX / maxY) });
    }
}

function shiftSections() {
    let sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const shift = 33.33 * index;
        if (isMobile()) {
            section.style.transform = `translateY(${shift}vh)`;
        } else {
            section.style.transform = `translateX(${shift}vw)`;
        }
    });
}

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX + 'px';
    const mouseY = event.clientY + 'px';
    document.documentElement.style.setProperty('--mouse-x', mouseX);
    document.documentElement.style.setProperty('--mouse-y', mouseY);
});

window.addEventListener('load', function () { shiftSections(); diagonalScroll() });
window.addEventListener('resize', shiftSections);
window.addEventListener('scroll', diagonalScroll);
