// Interactive Form Validation
const form = document.getElementById('contact-form');

// Initialize Typed.js for typing effect
document.addEventListener("DOMContentLoaded", function () {
    new Typed(".tex", {
        strings: ["Frontend Developer", "Video Editor", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

// Form submission handling
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    // Use Formspree or another service if you're on GitHub Pages
    fetch('https://formspree.io/f/mgvevzdr', {
        method: 'POST',
        headers: {
            'Accept': 'application/json', // Expect JSON response
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        if (data.success) {
            alert(`Thank you, ${data.name}! Your message has been sent.`);
            form.reset(); // Optionally reset the form after submission
        } else {
            alert(`Error: ${data.error}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with your submission. Please try again.');
    });
});
