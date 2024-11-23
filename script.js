// # Made by ChatGPT

function horizontalScroll () {
    const wrapper = document.getElementById("wrapper");
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const maxHorizontalScroll = wrapper.scrollWidth - wrapper.clientWidth;
    let scrollY = window.scrollY || window.pageYOffset;
    let newHorizontalScroll = (scrollY / documentHeight) * maxHorizontalScroll;
    wrapper.scrollLeft = newHorizontalScroll;
}

function shiftSections () {
    let sections = document.querySelectorAll('section');
    const isMobile = window.innerWidth <= 768;
    sections.forEach((section, index) => {
        const shift = 33.33 * index;
        if (isMobile) {
            section.style.transform = `translateX(${shift}vw)`;
        } else {
            section.style.transform = `translateY(${shift}vh)`;
        }
    });
}

window.addEventListener('load', function () {shiftSections(); horizontalScroll()});
window.addEventListener('resize', shiftSections);
window.addEventListener('scroll', horizontalScroll);
