document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bar1').style.transform = 'translateX(-100%)';
    document.getElementById('bar2').style.transform = 'translateX(-100%)';
    document.getElementById('bar3').style.transform = 'translateX(-100%)';
});



document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Define the points where each bar should appear
    const triggerPoint1 = 200; // Adjust these values as needed
    const triggerPoint2 = 800;
    const triggerPoint3 = 1400;

    // Slide in the bars at different scroll positions
    if (scrollPosition > triggerPoint1) {
        document.getElementById('bar1').style.transform = 'translateX(0)';
    } else {
        document.getElementById('bar1').style.transform = 'translateX(-100%)';
    }

    if (scrollPosition > triggerPoint2) {
        document.getElementById('bar2').style.transform = 'translateX(0)';
    } else {
        document.getElementById('bar2').style.transform = 'translateX(-100%)';
    }

    if (scrollPosition > triggerPoint3) {
        document.getElementById('bar3').style.transform = 'translateX(0)';
    } else {
        document.getElementById('bar3').style.transform = 'translateX(-100%)';
    }
});
let lastScrollPosition = 0;
let isThrottled = false;
let delay = 100; // milliseconds

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (isThrottled) {
        return;
    }

    isThrottled = true;
    setTimeout(() => {
        isThrottled = false;
        lastScrollPosition = currentScrollPosition;

        // Your logic to show/hide bars

    }, delay);
});
const text = "University of Oshkosh Wisconsin\n\nStudying: Applied Computing\n\nYears of education: 2023 to Present";

let typingInterval;

document.querySelector('.school-icon').addEventListener('mouseover', function() {
    let i = 0;
    let typingText = document.querySelector('.popup-bubble .typing-text');
    typingText.innerHTML = '';

    typingInterval = setInterval(function() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50); // Adjust speed
});

document.querySelector('.school-icon').addEventListener('mouseout', function() {
    clearInterval(typingInterval);
    let typingText = document.querySelector('.popup-bubble .typing-text');
    typingText.innerHTML = ''; // Reset the text when not hovering
});


document.querySelectorAll('.button-container a').forEach(icon => {
    icon.addEventListener('click', () => {
        document.querySelectorAll('.side-bar').forEach(bar => {
            bar.style.transform = 'translateX(-100%)';
        });
    });
});








