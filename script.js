// # Made by ChatGPT

window.addEventListener('scroll', function() {
    const gridContainer = document.getElementById('grid-container');
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const maxHorizontalScroll = gridContainer.scrollWidth - gridContainer.clientWidth;
    let scrollY = window.scrollY || window.pageYOffset;
    let newHorizontalScroll = (scrollY / documentHeight) * maxHorizontalScroll;
    gridContainer.scrollLeft = newHorizontalScroll;
});

// Wähle alle Nachrichtenelemente aus
const msgOverlays = document.querySelectorAll('.msg-overlay');

// Durchlaufe jedes Nachrichtenelement und füge das Klick-Event hinzu
msgOverlays.forEach(msgOverlay => {
    msgOverlay.addEventListener('click', (event) => {
        // Überprüfe, ob der Klick auf das ::after-Element ging
        const elementStyles = window.getComputedStyle(msgOverlay, '::after');
        const afterElementBounds = {
            top: msgOverlay.offsetTop + parseFloat(elementStyles.top),
            right: msgOverlay.offsetLeft + msgOverlay.offsetWidth - parseFloat(elementStyles.right),
            width: parseFloat(elementStyles.width),
            height: parseFloat(elementStyles.height)
        };

        const clickWithinAfter = (
            event.clientX >= afterElementBounds.right - afterElementBounds.width &&
            event.clientX <= afterElementBounds.right &&
            event.clientY >= afterElementBounds.top &&
            event.clientY <= afterElementBounds.top + afterElementBounds.height
        );

        if (clickWithinAfter) {
            // Setze display auf 'none', um das spezifische Nachrichtenelement auszublenden
            msgOverlay.style.display = 'none';
        }
    });
});
