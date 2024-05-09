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

    aboutBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent any parent handlers from being executed

        // Hide the button
        aboutBtn.style.display = 'none';

        // Show the text and start transition
        aboutText.style.display = 'block';
        setTimeout(() => {
            aboutText.classList.add('visible-text');
        }, 100); // slight delay to ensure the display change has taken effect
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Consolidate all modal-related functionalities
    const emailModal = document.getElementById("emailModal");
    const emailIcon = document.getElementById("email-icon");
    const closeButtons = document.querySelectorAll('.close'); // This will get all close buttons

    emailIcon.onclick = function() {
        emailModal.style.display = "block";
    };

    closeButtons.forEach(button => {
        button.onclick = function() {
            button.closest('.modal').style.display = "none"; // This makes sure the closest modal to the button gets closed
        };
    });

    window.onclick = function(event) {
        if (event.target === emailModal) {
            emailModal.style.display = "none";
        }
    };

    const form = document.getElementById("contact-form");
    form.onsubmit = function(event) {
        event.preventDefault(); // Stop the form from submitting normally
        sendEmail(); // Send the email function
    };
});

function sendEmail() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    // Normally, you would need server-side support to send an email.
    // However, as you requested a simple client-side solution:
    window.location.href = `mailto:michaelharris.tech@gmail.com?subject=Message from ${email}&body=${message}`;
}








