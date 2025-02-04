// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.navbar-toggler');
    var navLinks = document.querySelector('.navbar-collapse');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

// Scroll to top button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_e02z0sr', 'template_tgi931f', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
        });
});
