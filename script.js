// # Made by ChatGPT

window.addEventListener('scroll', function() {
    const gridContainer = document.getElementById('grid-container');
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const maxHorizontalScroll = gridContainer.scrollWidth - gridContainer.clientWidth;
    let scrollY = window.scrollY || window.pageYOffset;
    let newHorizontalScroll = (scrollY / documentHeight) * maxHorizontalScroll;
    gridContainer.scrollLeft = newHorizontalScroll;
});

var msgOverlays = document.querySelectorAll('.msg-overlay');

msgOverlays.forEach(msgOverlay => {
    msgOverlay.addEventListener('animationend', () => {
        msgOverlay.style.display = 'none';
    });
});
