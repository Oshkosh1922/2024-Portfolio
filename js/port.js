document.addEventListener('DOMContentLoaded', function() {
    ['bar1', 'bar2', 'bar3'].forEach(barId => {
        const bar = document.getElementById(barId);
        bar.style.transform = 'translateX(-100%)';
    });
});

function controlSideBars() {
    const scrollPosition = window.scrollY;
    const triggerPoints = [200, 800, 1400];

    triggerPoints.forEach((point, index) => {
        const bar = document.getElementById(`bar${index + 1}`);
        bar.style.transform = scrollPosition > point ? 'translateX(0)' : 'translateX(-100%)';
    });
}

window.addEventListener('scroll', controlSideBars);

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

document.querySelector('.school-icon').addEventListener('mouseover', function() {
    stopTypingEffects();
    schools.forEach(startTypingEffect);
});

document.querySelector('.school-icon').addEventListener('mouseout', stopTypingEffects);

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
        event.stopPropagation();
        aboutBtn.style.display = 'none';
        aboutText.style.display = 'block';
        setTimeout(() => {
            aboutText.classList.add('visible-text');
        }, 100);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const emailModal = document.getElementById("emailModal");
    const emailIcon = document.getElementById("email-icon");
    const closeButtons = document.querySelectorAll('.close');

    emailIcon.onclick = function() {
        emailModal.style.display = "block";
    };

    closeButtons.forEach(button => {
        button.onclick = function() {
            button.closest('.modal').style.display = "none";
        };
    });

    window.onclick = function(event) {
        if (event.target === emailModal) {
            emailModal.style.display = "none";
        }
    };

    const form = document.getElementById("contact-form");
    form.onsubmit = function(event) {
        event.preventDefault();
        sendEmail();
    };
});

function sendEmail() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    window.location.href = `mailto:michaelharris.tech@gmail.com?subject=Message from ${email}&body=${message}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const servicesBtn = document.getElementById('services-btn');
    const servicesText = document.getElementById('services-text');

    servicesBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        servicesBtn.style.display = 'none';
        servicesText.style.display = 'block';
        setTimeout(() => {
            servicesText.classList.add('visible-text');
        }, 100);
    });
});

const contactBtn = document.getElementById('contact-btn');
const contactText = document.getElementById('contact-text');
contactBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    contactBtn.style.display = 'none';
    contactText.style.display = 'block';
    setTimeout(() => {
        contactText.classList.add('visible-text');
    }, 100);
});








