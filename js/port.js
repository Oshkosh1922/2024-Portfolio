document.addEventListener('DOMContentLoaded', function () {
    const bars = ['bar1', 'bar2', 'bar3'];

    bars.forEach(barId => {
        const bar = document.getElementById(barId);
        if (bar) {
            bar.style.transform = 'translateX(-100%)';
            const text = bar.querySelector('.about-text, .services-text, .contact-text');
            if (text) {
                text.setAttribute('data-text', text.innerText);
                text.innerHTML = '';
            }
        }
    });
});

function controlSideBars() {
    const scrollPosition = window.scrollY;
    const triggerPoints = [200, 800, 1400];

    triggerPoints.forEach((point, index) => {
        const bar = document.getElementById(`bar${index + 1}`);
        const text = bar.querySelector('.about-text, .services-text, .contact-text');

        if (scrollPosition > point) {
            bar.style.transform = 'translateX(0)';
            if (!text.classList.contains('typing-started')) {
                text.classList.add('visible-text', 'typing-started');
                startTypingEffect(text);
            }
        } else {
            bar.style.transform = 'translateX(-100%)';
            text.classList.remove('visible-text', 'typing-started');
            stopTypingEffect(text);
        }
    });
}

window.addEventListener('scroll', controlSideBars);

function startTypingEffect(element) {
    const text = element.getAttribute('data-text');
    let index = 0;
    element.innerHTML = '';

    const typingInterval = setInterval(function () {
        if (index < text.length) {
            const span = document.createElement('span');
            span.innerText = text[index];
            span.style.opacity = '0';
            element.appendChild(span);

            setTimeout(function () {
                span.style.opacity = '1';
                span.style.transition = 'opacity 0.3s ease';
            }, 10);

            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50);
}

function stopTypingEffect(element) {
    element.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
    const emailModal = document.getElementById("emailModal");
    const emailIcon = document.getElementById("email-icon");
    const closeButtons = document.querySelectorAll('.close');

    emailIcon.addEventListener('click', function () {
        emailModal.style.display = "block";
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            emailModal.style.display = "none";
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target === emailModal) {
            emailModal.style.display = "none";
        }
    });

    const form = document.getElementById("contact-form");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        sendEmail();
    });
});

function sendEmail() {
    const email = document.getElementById("sender-email").value;
    const message = document.getElementById("message").value;

    if (email && message) {
        window.location.href = `mailto:harrismike1922.com?subject=Message from ${email}&body=${message}`;
    } else {
        alert('Please fill in all the fields.');
    }
}
