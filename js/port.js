document.addEventListener('DOMContentLoaded', function() {
    // Force hide side bars on initial load
    ['bar1', 'bar2', 'bar3'].forEach(barId => {
        const bar = document.getElementById(barId);
        // Use transform to slide off-screen to the left or modify as per your hiding logic
        bar.style.transform = 'translateX(-100%)';
    });
});

// Function to control the sliding of side bars based on scroll position
function controlSideBars() {
    const scrollPosition = window.scrollY;
    const triggerPoints = [200, 800, 1400]; // Adjust these values as needed

    triggerPoints.forEach((point, index) => {
        const bar = document.getElementById(`bar${index + 1}`);
        bar.style.transform = scrollPosition > point ? 'translateX(0)' : 'translateX(-100%)';
    });
}

// Add scroll event listener
window.addEventListener('scroll', controlSideBars);

// School information for typing effect
const schools = [
    {
        elementId: 'text-uwo',
        text: "University of Oshkosh Wisconsin<br>Studying: Applied Computing<br>Years of education: 2023 to Present"
    },
    {
        elementId: 'text-fvtc',
        text: "Fox Valley Technical College<br>Studied: Software Development<br>Years of Education: 2021-2023"
    }
];

let typingIntervals = [];

function startTypingEffect(school) {
    let i = 0;
    let typingText = document.getElementById(school.elementId);
    typingText.innerHTML = '';

    let interval = setInterval(function() {
        if (i < school.text.length) {
            if (school.text.substring(i, i + 4) === "<br>") {
                typingText.innerHTML += "<br>";
                i += 4;
            } else {
                typingText.innerHTML += school.text.charAt(i);
                i++;
            }
        } else {
            clearInterval(interval);
        }
    }, 40);

    typingIntervals.push(interval);
}

function stopTypingEffects() {
    typingIntervals.forEach(interval => clearInterval(interval));
    typingIntervals = [];
    schools.forEach(school => document.getElementById(school.elementId).innerHTML = '');
}

// Event listeners for school icon
document.querySelector('.school-icon').addEventListener('mouseover', function() {
    stopTypingEffects();
    schools.forEach(startTypingEffect);
});

document.querySelector('.school-icon').addEventListener('mouseout', stopTypingEffects);

// Resume modal functionality
const modal = document.getElementById("resumeModal");
const btn = document.getElementById("resume-icon");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const socket = new WebSocket('ws://localhost:8080');


document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('about-btn');
    const aboutText = document.getElementById('about-text');
    const aboutImage = document.getElementById('about-image');

    aboutBtn.addEventListener('click', function() {
        // Hide the button
        aboutBtn.style.display = 'none';

        // Show and animate the image
        aboutImage.style.display = 'block';
        setTimeout(() => {
            aboutImage.classList.add('visible-image');
        }, 100); // Slight delay

        // After image, show and animate the text
        setTimeout(() => {
            aboutText.style.display = 'block';
            aboutText.classList.add('visible-text');
        }, 2100); // Wait for image to finish rising
    });
});









