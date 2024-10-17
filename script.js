// Wait for the page to fully load
window.addEventListener('load', function () {
    // Fade in the header after the page loads
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transition = 'opacity 2s';
    setTimeout(() => {
        header.style.opacity = 1;
    }, 200);

    // Animate the nav bar links on hover
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#fff';
            link.style.transition = 'color 0.3s';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#99f2c8';
        });
    });

    // Add a button to change the background color
    const body = document.querySelector('body');
    const colorButton = document.createElement('button');
    colorButton.innerText = 'Change Background Color';
    colorButton.style.position = 'fixed';
    colorButton.style.bottom = '20px';
    colorButton.style.right = '20px';
    colorButton.style.padding = '10px';
    colorButton.style.backgroundColor = '#039BE5';
    colorButton.style.color = '#fff';
    colorButton.style.border = 'none';
    colorButton.style.borderRadius = '5px';
    colorButton.style.cursor = 'pointer';
    body.appendChild(colorButton);

    colorButton.addEventListener('click', () => {
        const colors = ['#1d1d1d', '#f44336', '#4caf50', '#ffeb3b', '#2196f3'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.backgroundColor = randomColor;
    });
});
// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Scroll Reveal Animations
ScrollReveal().reveal('header', { 
    duration: 2000,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('nav', { 
    duration: 1500,
    origin: 'bottom',
    distance: '30px'
});

ScrollReveal().reveal('main, footer', { 
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
    interval: 200
});
