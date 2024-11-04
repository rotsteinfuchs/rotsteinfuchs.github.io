// # Made by ChatGPT

window.addEventListener('scroll', function() {
    const wrapper = document.getElementById('wrapper');
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const maxHorizontalScroll = wrapper.scrollWidth - wrapper.clientWidth;
    let scrollY = window.scrollY || window.pageYOffset;
    let newHorizontalScroll = (scrollY / documentHeight) * maxHorizontalScroll;
    wrapper.scrollLeft = newHorizontalScroll;
});

const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    const shift = 33.33 * (index - 1)
    section.style.transform = `translateX(${shift}vw)`;
});

